const express = require('express')
const router = express.Router()

function getRandomName() {
	const names = ["Peter", "Petra", "Kay-Sölve", "Max"]
	const n = Math.floor(Math.random() * (names.length - 1))
	return names[n]
}

router.get('/', (req, res) => {
	res.status(200)
		.type("json")
		.send({
			"name": getRandomName(),
			"wert": Math.floor(Math.random() * 1000)
		})
		.end();
})

module.exports = router
