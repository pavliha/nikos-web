import React, { FC } from 'react';
import { Router } from '@reach/router';
import { IndexPage, PhotosPage, PricesPage, ContactsPage, VideosPage, ScrollToTop } from 'src/components';

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop path="/">
        <IndexPage path="/" />
        <PhotosPage path="photos" />
        <VideosPage path="videos" />
        <PricesPage path="prices" />
        <ContactsPage path="contacts" />
      </ScrollToTop>
    </Router>
  );
};

export default App;
