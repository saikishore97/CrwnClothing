export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingitem = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    if(existingitem){
       return cartItems.map(cartItem=>
            {return cartItem.id===existingitem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem;}
       ) 
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}];
};

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const existingitem = cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id);
    if(existingitem.quantity===1){
       return cartItems.filter(cartItem=>cartItem.id!==existingitem.id)
    }

    return cartItems.map(cartItem=>
        {return cartItem.id===existingitem.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem;}
   ) 

}