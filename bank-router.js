const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const kontoSchema = new mongoose.Schema({
	kontonummer: String,
	/*name: String,
	kontostand: Number,*/

	property_trans1: String,
	property_trans2: String,
	property_trans3: String,

	duration_trans1: Number,
	duration_trans2: Number,
	duration_trans3: Number,

	timing_trans1: String,
	timing_trans2: String,
	timing_trans3: String,

	delay_trans1: Number,
	delay_trans2: Number,
	delay_trans3: Number
});

const Konto = mongoose.model('Konto', kontoSchema);

mongoose.connect('mongodb://admin:secret@localhost/', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', err => console.error('connection error:', err))
db.once('open', () => console.log('Connected'))

router.get('/', (req, res) => {
	Konto.find()
		.then(data => res.status(200).type("json").send(data.map(el => el.kontonummer)))
		.catch(err => res.status(500).send(err))
})

router.get('/:kontonummer/', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.findOne({ "kontonummer": kontonummer })
		.then(transition => res.status(200).type("json").send(transition))
		.catch(err => res.sendStatus(404).send("Konto nicht gefunden"))
})

router.get('/:kontonummer/kontostand/', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.findOne({ "kontonummer": kontonummer })
		.then(transition => res.send("" + transition.kontostand).end())
		.catch(err => res.sendStatus(404).send("Konto nicht gefunden").end())
})


router.post('/', (req, res) => {
	const kontonummer = 1
	const transition = new Konto({
		"kontonummer": kontonummer,
		
		/*"kontostand": 100,*/
	"property_trans1": req.body.Property_trans1,
	"property_trans2": req.body.Property_trans2,
	"property_trans3": req.body.Property_trans3,
	"duration_trans1": req.body.Duration_trans1,
	"duration_trans2": req.body.Duration_trans2,
	"duration_trans3": req.body.Duration_trans3,
	"timing_trans1": req.body.Timing_trans1,
	"timing_trans2": req.body.Timing_trans2,
	"timing_trans3": req.body.Timing_trans3,
	"delay_trans1": req.body.Delay_trans1,
	"delay_trans2": req.body.Delay_trans2,
	"delay_trans3": req.body.Delay_trans3
	})

	transition.save()
		.then(data => res.redirect("" + kontonummer + "/").end())
		.catch(err => res.status(500).send("Hat nicht geklappt"))
})

router.delete('/:kontonummer', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.deleteOne({ "kontonummer": kontonummer })
		.then(transition => res.end("Ok"))
		.catch(err => res.sendStatus(404).end("Konto nicht gefunden"))
})

module.exports = router
