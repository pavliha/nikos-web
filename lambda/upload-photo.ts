import { APIGatewayEvent, Context } from 'aws-lambda';
import { APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-central-1'
});

AWS.config.setPromisesDependency(Promise);

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const params = {
    Bucket: 'nikos-zp-ua',
    Key: 'photos.json',
    Body: JSON.stringify({ text: 'cool name' }),
    ACL: 'public-read'
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully at ${data}`);
    console.log(event, context); // output to netlify function log
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: data })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
