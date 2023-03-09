import React, { useCallback } from 'react'
// Import the package
import useRazorpay, { RazorpayOptions } from "react-razorpay";

// async function loadScript(src: string) {
//   return new Promise(resolve => {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//       resolve(true)
//     }
//     script.onerror = () => {
//       resolve(false)
//     }
//     document.body.appendChild(script);
//   })
// }

// const __DEV__ = document.domain === 'localhost';
// console.log(document.domain);

// async function displayRazorpay() {
  
//   const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

//   if(!res) {
//     alert('Razorpay SDK failed to load. Are you online?');
//     return;
//   }

//   const data = await fetch('http://localhost:4000/razorpay', { method: 'POST'}).then((t) => {
//     return t.json()
//   });

//   console.log(data,data.id, data.amount,data.currency);
  
//   const options = {
//     key: __DEV__ ?  process.env.REACT_APP_RAZOR_PAY_KEY : process.env.REACT_APP_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
//     amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: data.currency,
//     order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     name: "Test",
//     description: "Test Transaction",
//     image: "http://localhost:4000/logo.svg",
//     handler: function (response: any){
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature)
//     }
    
//   };

//   const _window = window as any;
//   const rzp1 = new _window.Razorpay(options);
//   try {
//     rzp1.open();
//   } catch(e) {
//     console.log(e)
//   }
//   // e.preventDefault();
//   rzp1.on('payment.failed', function (response: any){
//       alert(response.error.code);
//       alert(response.error.description);
//       alert(response.error.source);
//       alert(response.error.step);
//       alert(response.error.reason);
//       alert(response.error.metadata.order_id);
//       alert(response.error.metadata.payment_id);
//   });

//   // document.getElementById('rzp-button1').onclick = function(e){
//   //     e.preventDefault();
//   // }

// }


const BuyMembership = () => {

    const Razorpay = useRazorpay();

    const handlePayment = useCallback( async() => {

      const data = await fetch('http://localhost:4000/razorpay', { method: 'POST'}).then((t) => {
        return t.json()
      });

      const options: RazorpayOptions = {
        key: "rzp_test_2wB9Iv368uK8oR",
        amount: "50000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "http://localhost:4000/logo.svg",
        order_id: data.id,
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    }, [Razorpay]);

  return (
    <div className='btn-razorpay'>
      <br />
      <button type='button' onClick={handlePayment}> 
        <h1>Buy a Membership to 500 INR</h1>
      </button>
    </div>
  )

}

export default BuyMembership
