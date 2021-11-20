import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jw5YtSJFgxE6rP2kzkTljGewNEiwFCYSq9uGlFpYlUvZTFuINsktPWTIh0GWnJSnhGAiy9TkbXuFujs6TIFXQkv00MxFoKNEi"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`https://thawing-forest-09797.herokuapp.com/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
{appointment?.price &&<Elements stripe={stripePromise}>
        <CheckOutForm price={appointment.price} appointment={appointment} />
      </Elements>}
    </div>
  );
};

export default Payment;

/*
1.install stripe and stripe react
2. set publishable key
2. stripe react js, install 
3.elements
4. check out formData........
......
5.create payment method



*/
