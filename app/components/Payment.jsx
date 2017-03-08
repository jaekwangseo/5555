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
		<div id="Payment" className="form-group col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 parent-box2 col-xs-12">
			<h3 className="first-form-input form-group col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12">Payment: </h3>
				<form className="form-group col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12" onSubmit={(event) => getPaymentInfo(event, props.cartId)}> {/*Can args be passed into OnClick Funcs like this?*/}
					First name: <input className="form-control" type="text" name="fname"></input>
					Last name: <input className="form-control" type="text" name="lname" />
					Email: <input className="form-control" type="text" name="email" />
					Credit Card Number: <input className="form-control" type="number" name="CCN" width={16} />
					Expiration Month: <input className="form-control" type="text" name="expMonth" />
					Expiration Year: <input className="form-control" type="text" name="expYear" />
					Security Code: <input className="form-control" type="text" name="securityCode" />
					Address: <input className="form-control" type="text" name="address" />
					City: <input className="form-control" type="text" name="city" />
					State: <input className="form-control" type="text" name="state" />
					Country: <input className="form-control" type="text" name="country" />
					Phone Number: <input className="form-control" type="text" name="phone" />

				<input className='btn btn-success' type="submit" value="Submit" />
				</form>
		</div>
		);
}
