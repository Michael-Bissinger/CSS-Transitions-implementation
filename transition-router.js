/* benötigte packages */
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

/* mongoose mitteilen wie die daten aussehen mit denen man interagiert */

const transitionSchema = new mongoose.Schema({
	transitionnummer: Number,
	property: String,
	duration: Number,
	timing: String,
	delay: Number
});

/* Modell erstellen */
const Transitionsetup = mongoose.model('Transition', transitionSchema);

/* zur db verbinden */
mongoose.connect('mongodb://admin:secret@localhost/', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', err => console.error('connection error:', err))
db.once('open', () => console.log('Connected'))

/* Hole alle Daten in der Datenbank ab */
router.get('/', (req, res) => {
	Transitionsetup.find()
	.then(data => res
		.status(200)
		.type("json")
		.send(data))
	.catch(err => res.set.send(err))
})

router.get('/:kontonummer/', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.findOne({ "kontonummer": kontonummer })
		.then(konto => res.status(200).type("json").send(konto))
		.catch(err => res.sendStatus(404).send("Konto nicht gefunden"))
})

router.get('/:kontonummer/kontostand/', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.findOne({ "kontonummer": kontonummer })
		.then(konto => res.send("" + konto.kontostand).end())
		.catch(err => res.sendStatus(404).send("Konto nicht gefunden").end())
})

router.post('/', (req, res) => {
	const kontonummer = "" + Math.floor(10000000 * Math.random())
	const konto = new Konto({
		"kontonummer": kontonummer,
		"name": req.body.Name,
		"kontostand": 100
	})

	konto.save()
		.then(data => res.redirect("" + kontonummer + "/").end())
		.catch(err => res.status(500).send("Hat nicht geklappt"))
})

router.delete('/:kontonummer', (req, res) => {
	const kontonummer = req.params.kontonummer

	Konto.deleteOne({ "kontonummer": kontonummer })
		.then(konto => res.end("Ok"))
		.catch(err => res.sendStatus(404).end("Konto nicht gefunden"))
})

module.exports = router
