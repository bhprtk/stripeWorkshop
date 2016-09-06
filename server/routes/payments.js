const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', (req, res) => {
	let {id} = req.body;
	stripe.charges.create({
		amount: 7999,
		currency: 'usd',
		source: id
	}, (err, charge) => {
		if(err) return res.status(400).send(err);
		console.log ('charge:', charge);
		res.send();
	})
})

module.exports = router;
