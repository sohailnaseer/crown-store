import React from 'react';

import { connect } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.container';
import {
  updateCollections,
  fetchCollectionsAsync,
} from './../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (data) => dispatch(updateCollections(data)),
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
