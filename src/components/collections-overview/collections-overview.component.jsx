import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
