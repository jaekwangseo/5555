import React from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';


//THIS FUNCTION GRABS INFO FROM THE PAYMENT FORM, POSTS IT TO THE API, THEN REROUTES TO EITHER
//A SUCCESS OR ERROR PAGE
//THE API ADDS TO THE PAYMENT DB, THEN UPDATES THE ORDER STATUS TO COMPLETE AND THE PAYMENT ID
const getPaymentInfo = function(synthE, orderId){
	synthE.preventDefault();
	console.log(orderId);
	const paymentObj = {	//All of the && so that there is no error if a synthE or target is null/undef
	CCN: synthE && synthE.target && synthE.target.CCN && synthE.target.CCN.value,
    FirstName: synthE && synthE.target && synthE.target.fname && synthE.target.fname.value,
    LastName: synthE && synthE.target && synthE.target.lname && synthE.target.lname.value,
    Email: synthE && synthE.target && synthE.target.email && synthE.target.email.value,
    SecurityCode: synthE && synthE.target && synthE.target.securityCode && synthE.target.securityCode.value,
    ExpirationMonth: synthE && synthE.target && synthE.target.expMonth && synthE.target.expMonth.value,
    ExpirationYear: synthE && synthE.target && synthE.target.expYear && synthE.target.expYear.value,
    Address: synthE && synthE.target && synthE.target.address && synthE.target.address.value,
    City: synthE && synthE.target && synthE.target.city && synthE.target.city.value,
    State: synthE && synthE.target && synthE.target.state && synthE.target.state.value,
    Country: synthE && synthE.target && synthE.target.country && synthE.target.country.value,
    Phone: synthE && synthE.target && synthE.target.phone && synthE.target.phone.value
    };
  axios.post(`api/payment/${orderId}`, paymentObj)
  .then((message) => {
		 if (message.data === 'Order Complete') {browserHistory.push('/orderSubmitted');}
		 else {browserHistory.push('/orderError');}
  });
 };

export default function Payment(props){
	return (
		<div id="Payment">
			<h3>Paymemt: </h3>
				<form onSubmit={(event) => getPaymentInfo(event, props.cartId)}> {/*Can args be passed into OnClick Funcs like this?*/}
					First name: <input type="text" name="fname" /><br />
					Last name: <input type="text" name="lname" /><br />
					Email: <input type="text" name="email" /><br />
					Credit Card Number: <input type="number" name="CCN" width={16} /><br />
					Expiration Month: <input type="text" name="expMonth" /><br />
					Expiration Year: <input type="text" name="expYear" /><br />
					Security Code: <input type="text" name="securityCode" /><br />
					Address: <input type="text" name="address" /><br />
					City: <input type="text" name="city" /><br />
					State: <input type="text" name="state" /><br />
					Country: <input type="text" name="country" /><br />
					Phone Number: <input type="text" name="phone" /><br />

					<input type="submit" value="Submit" />
				</form>
		</div>
		);
}
