import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.actions';

const CollectionItem=({item,addCartItem})=>{
    const {name,imageUrl,price}=item;

    return(
        <div className="collection-item">
            <div className="image" 
                 style={{backgroundImage:`url(${imageUrl})`}}
            />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>

                <CustomButton onClick={()=>addCartItem(item)} inverted>Add to Cart</CustomButton>

        </div>
    );
}

const mapDispatchToProps = dispatch=>({
   addCartItem :(item)=>dispatch(addCartItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);