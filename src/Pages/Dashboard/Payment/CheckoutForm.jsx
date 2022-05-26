import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.init";
const CheckoutForm = ({ singleOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  /* Create Payment Intent */
  const totalPrice =
    Number(singleOrder?.productInfo?.orderQty) *
    Number(singleOrder?.productInfo?.price);
  useEffect(() => {
    fetch(
      `http://localhost:5000/payment/create-payment-intent?uid=${auth?.currentUser?.uid}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ price: totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result?.clientSecret) {
          setClientSecret(result.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      return toast.error(error?.message);
    }
    /* Confirm Payment */
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: singleOrder?.author?.name,
            email: singleOrder?.author?.email,
          },
        },
      });

    if (intentError) {
      return toast.error(intentError?.message);
    } else {
      if (paymentIntent?.status === "succeeded") {
        const data = {
          author: {
            name: singleOrder?.author?.name,
            email: auth?.currentUser.email,
            uid: auth?.currentUser?.uid,
          },
          productInfo: {
            name: singleOrder?.productInfo?.productName,
            price: singleOrder?.productInfo?.price,
            orderQty: singleOrder?.productInfo?.orderQty,
            image: singleOrder?.productInfo?.image,
          },
          transactionId: paymentIntent?.id,
          status: paymentIntent?.status,
          createdAt:
            new Date().toDateString() + " " + new Date().toLocaleTimeString(),
        };
        fetch(
          `http://localhost:5000/orders?uid=${auth?.currentUser?.uid}&&orderId=${singleOrder?._id}`,
          {
            method: "PATCH",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              navigate(`/dashboard/my-orders`);
              fetch(
                `http://localhost:5000/products?uid=${auth?.currentUser?.uid}&&productId=${singleOrder?.productInfo?.productId}`,
                {
                  method: "PATCH",
                  headers: {
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    orderQty: singleOrder?.productInfo?.orderQty,
                  }),
                }
              )
                .then((res) => res.json())
                .then(() => {
                  Swal.fire(
                    "Congrats!!",
                    ` Payment successfully done. Here is your TransactionID ${paymentIntent?.id} & Check Your Email.`,
                    "success"
                  );
                });
            }
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-4 font-montserrat">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary my-8 w-full"
        disabled={!stripe}
      >
        Pay {totalPrice} $
      </button>
    </form>
  );
};

export default CheckoutForm;
