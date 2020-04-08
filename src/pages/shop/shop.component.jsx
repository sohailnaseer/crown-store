import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './../../pages/shop/shop.data';
import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.collections = SHOP_DATA;
  }

  render() {
    return this.collections.map(({ title, items }) => {
      return (
        <div className='shop-page'>
          <CollectionPreview title={title} items={items} />
        </div>
      );
    });
  }
}

export default ShopPage;
