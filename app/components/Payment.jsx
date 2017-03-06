import React from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';


//THIS FUNCTION GRABS INFO FROM THE PAYMENT FORM, POSTS IT TO THE API, THEN REROUTES TO EITHER
//A SUCCESS OR ERROR PAGE
//THE API ADDS TO THE PAYMENT DB, THEN UPDATES THE ORDER STATUS TO COMPLETE AND THE PAYMENT ID
const getPaymentInfo = function(synthE, orderId){	//Does the synthE go first here? or the passed in arg?
	synthE.preventDefault();
	const paymentObj = {
		CCN: synthE.target.CCN,
    FirstName: synthE.target.fname,
    LastName: synthE.target.lname,
    SecurityCode: synthE.target.securityCode,
    ExpirationMonth: synthE.target.expMonth,
    ExpirationYear: synthE.target.expYear,
    Address: synthE.target.address,
    City: synthE.target.city,
    State: synthE.target.state,
    Country: synthE.target.country,
    Phone: synthE.target.phone
    };
  axios.post(`/api/payment/:${orderId}`, paymentObj)
  .then((order) => {
		if (order.id === orderId) {browserHistory.push('/orderSubmitted');}
		else {browserHistory.push('/orderError');}
  });
 };

export default function Payment(props){
	return (
		<div id="Payment">
			<h3>Paymemt: </h3>
				<form onSubmit={getPaymentInfo(props.cartId)}> {/*Can args be passed into OnClick Funcs like this?*/}
					First name: <input type="text" name="fname" /><br />
					Last name: <input type="text" name="lname" /><br />
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
