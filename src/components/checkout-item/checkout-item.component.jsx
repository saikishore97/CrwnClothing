import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearCartItem,addCartItem,removeCartItem} from '../../redux/cart/cart.actions';

const CheckoutItem=({cartItem,clearItem,addItem,removeItem})=>{
    const {imageUrl,name,price,quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(cartItem)} >&#10096;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10097;</div>
            </span>
            <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    );

};

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearCartItem(item)),
    addItem:item=>dispatch(addCartItem(item)),
    removeItem:item=>dispatch(removeCartItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);