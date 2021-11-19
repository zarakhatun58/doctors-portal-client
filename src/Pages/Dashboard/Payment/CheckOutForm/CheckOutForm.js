import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
// import useAuth from './../../../../hooks/useAuth';

const CheckOutForm = ({appointment}) => {
const {price}=appointment;
    const stripe = useStripe();
    const elements=useElements()
    // const { user } = useAuth();
    
    
    
const handleSubmit=async  (e)=>{
if (!stripe || !elements){
return;

}
const card =elements.getElement(CardElement);
if(card === null){
return;
}

const {error, paymentMethod}=await stripe.createPaymentMethod({
    type:'card',
    card
});

if(error){
console.log(error)
}
else{

console.log(paymentMethod)
}

e.preventDefault()
}
   
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay ${price}
        </button>
      </form>
    );
};

export default CheckOutForm;