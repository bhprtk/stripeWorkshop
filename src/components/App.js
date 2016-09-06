import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();

		this._onReceiveToken = this._onReceiveToken.bind(this);
	}

	_onReceiveToken(token) {
		axios.post('/api/payments', token)
			.then(res => {
				console.log ('res:', res)
			})
			.catch(console.error)
	}

	render() {
		let product = {
			desc: 'Golf Clubs',
			price: 79.00
		}

		let {price, desc} = product;

		return (
			<div>
				<h1 className="text-center">yup</h1>

				<StripeCheckout
					stripeKey={STRIPE_KEY}
					description={desc}
					amount={price * 100}
					token={this._onReceiveToken} />

			</div>
		);
	}
}
