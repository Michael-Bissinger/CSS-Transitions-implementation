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
			"property_trans1": getRandomName(),
			"property_trans2": getRandomName(),
			"property_trans3": getRandomName(),

			"duration_trans1": Math.floor(Math.random() * 1000),
			"duration_trans2": Math.floor(Math.random() * 1000),
			"duration_trans3": Math.floor(Math.random() * 1000),

			"timing_trans1": getRandomName(),
			"timing_trans2": getRandomName(),
			"timing_trans3": getRandomName(),

			"delay_trans1": Math.floor(Math.random() * 1000),
			"delay_trans2": Math.floor(Math.random() * 1000),
			"delay_trans3": Math.floor(Math.random() * 1000)

		})
		.end();
})

module.exports = router
