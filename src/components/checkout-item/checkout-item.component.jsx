import React from 'react';

import './checkout-item.styles.scss';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItemFromCart,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;{' '}
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CheckoutItem));
