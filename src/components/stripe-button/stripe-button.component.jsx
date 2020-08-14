import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

 
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HG8o4IqryyQZ9AhFnp8W0gVZInwMohbXxZKoAgHq5YDW2muqYhZeZrcpvwD12cfbYtdyMLThLo3fbDvATlrU5Wv00SzD8pMe2';
    const onToken=(token)=>{
        console.log(token);// use this token to give it to the backend for payment
        alert('Payment Successfull')
    }
    
    return(
        <StripeCheckout label="Pay Now"
        name="Crown Clothing"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;