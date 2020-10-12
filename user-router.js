const express = require('express')

const router = express.Router()

router.get('/:userId', (req, res) => {
	res.send(`user id = ${req.params.userId}`)
})

router.get('/:userId/orders/:orderId', (req, res) => {
	res.send(`user id = ${req.params.userId}, order id = ${req.params.orderId}`)
})

module.exports = router