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
		.send(data.map(el => el.transitionnummer)))
	.catch(err => res.set.send(err))
})

/* Nutzer fragt Transitiondaten ab */

router.get('/:transitionnummer/', (req, res) => {
	const transitionnummer = req.params.transitionnummer

	Transitionsetup.findOne({ "transitionnummer": transitionnummer })
		.then(transition => res.status(200).type("json").send(transition))
		.catch(err => res.sendStatus(404).send("Transition nicht gefunden"))
})

/* WIRD NICHT GEBRAUCHT!!!

router.get('/:transitionnummer/property/', (req, res) => {
	const transitionnummer = req.params.transitionnummer

	Konto.findOne({ "transitionnummer": transitionnummer })
		.then(konto => res.send("" + konto.kontostand).end())
		.catch(err => res.sendStatus(404).send("Transition nicht gefunden").end())
})
 ... */

/* Nutzer speichert Transitiondaten */

router.post('/', (req, res) => {
	const transition = new Transitionsetup({
		"transitionnummer": req.body.transnummer_html, /* TODO: noch anlegen */
		"property": req.body.property_html, /* TODO: noch anlegen */
		"duration": req.body.duration_html, /* TODO: noch anlegen */
		"timing": req.body.timing_html, /* TODO: noch anlegen */
		"property": req.body.property_html, /* TODO: noch anlegen */
		"delay": req.body.delay_html /* TODO: noch anlegen */
	})

	transition.save()
		.then(data => res.redirect("" + transitionnummer + "/").end())
		.catch(err => res.status(500).send("Transition konnte nicht angelegt werden"))
})

router.delete('/:transitionnummer', (req, res) => {
	const transitionnummer = req.params.transitionnummer

	Transitionsetup.deleteOne({ "transitionnummer": transitionnummer })
		.then(transition => res.end("Ok"))
		.catch(err => res.sendStatus(404).end("Transition nicht gefunden"))
})

module.exports = router

/*

konto = transition
Konto = Transitionsetup

=> Wurde umgebaut zu einer REST-Anwendung. Wir schicken kein HTML mehr, sondern nur noch JSON */