import React from 'react';

export default function Payment(props){
	return (
		<div id="Payment">
			<h3>Paymemt: </h3>
				<form onSubmit={props.UNDEFINEDFUNC}>
					First name: <input type="text" name="fname" /><br />
					Last name: <input type="text" name="lname" /><br />
					Credit Card Number: <input type="number" name="CCN" width={16} /><br />
					<input type="submit" value="Submit" />
				</form>
		</div>
		);
}
