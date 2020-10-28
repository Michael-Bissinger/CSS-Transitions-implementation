const express = require('express')
const router = express.Router()

function getRandomName() {
	const names = ["Peter", "Petra", "Kay-Sölve", "Max"]
	const n = Math.floor(Math.random() * (names.length - 1))
	return names[n]
}

/* https://expressjs.com/de/guide/routing.html */

router.get('/', (req, res) => {
	res.status(200)
		.type("json")
		.send({
			"name": getRandomName(),
			"wert": Math.floor(Math.random() * 1000),
	
			
	/* my app *//*"property_trans1": String, */
			"property_trans1": getRandomName(),
	/* my app *//*"property_trans2": String, */
			"property_trans2": getRandomName(),
	/* my app *//*"property_trans3": String, */
			"property_trans3": getRandomName(),

	/* my app *//*"duration_trans1": Number,*/
			"duration_trans1": Math.floor(Math.random() * 1000),
	/* my app *//*"duration_trans2": Number,*/
			"duration_trans2": Math.floor(Math.random() * 1000),
	/* my app *//*"duration_trans3": Number,*/
			"duration_trans3": Math.floor(Math.random() * 1000),

	/* my app *//*"timing_trans1": String, */
			"timing_trans1": getRandomName(),
	/* my app *//*"timing_trans2": String, */
			"timing_trans2": getRandomName(),
	/* my app *//*"timing_trans3": String, */
			"timing_trans3": getRandomName(),

	/* my app *//*delay_trans1": Number,*/
			"delay_trans1": Math.floor(Math.random() * 1000),
	/* my app *//*"delay_trans2": Number,*/
			"delay_trans2": Math.floor(Math.random() * 1000),
	/* my app *//*"delay_trans3": */
			"delay_trans3": Math.floor(Math.random() * 1000)

		})
		.end();
})

module.exports = router
