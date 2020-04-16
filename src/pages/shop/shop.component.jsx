import React from 'react';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
        <Route exact path={`${match.path}`} component={CollectionOverview} />
      </div>
    );
  }
}

export default ShopPage;
