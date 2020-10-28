const express = require('express')
const router = express.Router()

/* https://expressjs.com/de/guide/routing.html */

router.get('/', (req, res) => {
	res.status(200)
		.type("json")
		.send({
			"property_trans1": string,
			"property_trans2": string,
			"property_trans3": string,

			"duration_trans1": number,
			"duration_trans2": number,
			"duration_trans3": number,

			"timing_trans1": string,
			"timing_trans2": string,
			"timing_trans3": string,

			"delay_trans1": number,
			"delay_trans2": number,
			"delay_trans3": number

		})
		.end();
})

module.exports = router
