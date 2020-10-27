function loadTransition() {
	/*console.log("zeigeKontoDetails: ", kontonummer, contentDiv)*/
	/*fetch('konten/' + kontonummer + '/')
/* my app */fetch('konten/' + 1 + '/')
	.then(res => res.json())
		.then(konto => {

	/* my app */const property_trans1 = document.getElementById("property_trans1")
	/* my app */const property_trans2 = document.getElementById("property_trans2")
	/* my app */const property_trans3 = document.getElementById("property_trans3")
	/* my app */console.log("property: " + property_trans1 + property_trans2 + property_trans3)

	/* my app */const duration_trans1 = document.getElementById("duration_trans1")
	/* my app */const duration_trans2 = document.getElementById("duration_trans2")
	/* my app */const duration_trans3 = document.getElementById("duration_trans3")
	/* my app */console.log("duration: " + duration_trans1 + duration_trans2 + duration_trans3)

	/* my app */const timing_trans1 = document.getElementById("timing_trans1")
	/* my app */const timing_trans2 = document.getElementById("timing_trans2")
	/* my app */const timing_trans3 = document.getElementById("timing_trans3")
	/* my app */console.log("timing: " + timing_trans1 + timing_trans2 + timing_trans3)

	/* my app */const delay_trans1 = document.getElementById("delay_trans1")
	/* my app */const delay_trans2 = document.getElementById("delay_trans2")
	/* my app */const delay_trans3 = document.getElementById("delay_trans3")
	/* my app */console.log("delay: " + delay_trans1 + delay_trans2 + delay_trans3)

	property_trans1.value = konto.property_trans1;
	property_trans2.value = konto.property_trans2;
	property_trans3.value = konto.property_trans3;		

	duration_trans1.value = konto.duration_trans1;
	duration_trans2.value = konto.duration_trans2;
	duration_trans3.value = konto.duration_trans3;
	
	timing_trans1.value = konto.timing_trans1;
	timing_trans2.value = konto.timing_trans2;
	timing_trans3.value = konto.timing_trans3;

	delay_trans1.value = konto.delay_trans1;
	delay_trans2.value = konto.delay_trans2;
	delay_trans3.value = konto.delay_trans3;

	alert("Ladevorgang abgeschlossen! " + konto.property_trans1)

		})
		.catch(err => zeigeFehler(err))
}

function zeigeKontoDetails(kontonummer, contentDiv) {
	console.log("zeigeKontoDetails: ", kontonummer, contentDiv)
	/*fetch('konten/' + kontonummer + '/')
/* my app */fetch('konten/' + 1 + '/')
	.then(res => res.json())
		.then(konto => {

	/* my app */const property_trans1 = document.getElementById("property_trans1")
	/* my app */const property_trans2 = document.getElementById("property_trans2")
	/* my app */const property_trans3 = document.getElementById("property_trans3")
	/* my app */console.log("property: " + property_trans1 + property_trans2 + property_trans3)

	/* my app */const duration_trans1 = document.getElementById("duration_trans1")
	/* my app */const duration_trans2 = document.getElementById("duration_trans2")
	/* my app */const duration_trans3 = document.getElementById("duration_trans3")
	/* my app */console.log("duration: " + duration_trans1 + duration_trans2 + duration_trans3)

	/* my app */const timing_trans1 = document.getElementById("timing_trans1")
	/* my app */const timing_trans2 = document.getElementById("timing_trans2")
	/* my app */const timing_trans3 = document.getElementById("timing_trans3")
	/* my app */console.log("timing: " + timing_trans1 + timing_trans2 + timing_trans3)

	/* my app */const delay_trans1 = document.getElementById("delay_trans1")
	/* my app */const delay_trans2 = document.getElementById("delay_trans2")
	/* my app */const delay_trans3 = document.getElementById("delay_trans3")
	/* my app */console.log("delay: " + delay_trans1 + delay_trans2 + delay_trans3)

			alert("konto.property_trans1 " + konto.property_trans1)
	property_trans1.value = konto.property_trans1;







			contentDiv.innerHTML = ""
			const div = document.createElement('div')
			div.classList.add('card')
			div.style.width = "18rem"

			const img = document.createElement('img')
			img.src = "https://vignette.wikia.nocookie.net/donald-duck/images/1/1d/Dagobert_duck.jpg/revision/latest?cb=20100716165905&path-prefix=de"

			const divCardBody = document.createElement('div')
			divCardBody.classList.add('card-body')

			const h5 = document.createElement('h5')
			h5.classList.add('card-title')
			h5.innerText = "platzhalter"

			const p = document.createElement('p')
			p.classList.add('card-text')
			p.innerText = konto.kontonummer

			/* my app */alert("Duration_trans1: " + konto.duration_trans1)
			/* my app */alert("Timing_trans2: " + konto.timing_trans2)
			/* my app */alert("Kontonr: " + konto.kontonummer)
			/* my app */alert("Kontoname: " + "platzhalter")

			const a = document.createElement('a')
			a.classList.add('btn')
			a.classList.add('btn-primary')
			a.innerText = "Close"
			a.addEventListener('click', evt => { 
				contentDiv.innerHTML = "";
				evt.preventDefault();
			})

			const deleteLink = document.createElement('a')
			deleteLink.classList.add('btn')
			deleteLink.classList.add('btn-primary')
			deleteLink.innerText = "Delete"
			deleteLink.addEventListener('click', evt => {

				fetch('konten/' + kontonummer + '/', { method: 'DELETE' })
					.then(res => {
						const li = contentDiv.closest('li')
						const ol = li.parentElement
						ol.removeChild(li)
					})
					.catch(err => zeigeFehler(err))

				evt.preventDefault();
			})

			contentDiv.appendChild(div)
			div.appendChild(img)
			div.appendChild(divCardBody)
			divCardBody.appendChild(h5)
			divCardBody.appendChild(p)
			divCardBody.appendChild(a)
			divCardBody.appendChild(deleteLink)
		})
		.catch(err => zeigeFehler(err))
}

function zeigeKonto(kontonummer) {
	console.log("zeigeKonto: ", kontonummer)
	const ol = document.getElementById('data_out')
	const li = document.createElement('li')
	ol.appendChild(li)

	const span = document.createElement('span');
	span.innerText = kontonummer
	span.addEventListener('click', () => zeigeKontoDetails(kontonummer, div))
	li.appendChild(span)

	const div = document.createElement('div')
	li.appendChild(div)
}

function zeigeFehler(fehlertext) {
	const err_out = document.getElementById('error_out')
	const div = document.createElement('div')
	div.classList.add('alert')
	div.classList.add('alert-danger')
	div.setAttribute('role', 'alert')
	div.innerText = fehlertext
	err_out.appendChild(div)

	setTimeout(() => err_out.removeChild(div), 5000)
}

function ladeKonten() {
	const ol = document.getElementById('data_out')
	ol.innerHTML = "";

	fetch('konten/')
		.then(res => res.json())
		.then(konten => konten.forEach(zeigeKonto))
		.catch(err => zeigeFehler(err))
}

function saveTransition(evt) {
	/*const nameInput = document.getElementById("name")*/

	/* my app */const property_trans1 = document.getElementById("property_trans1")
	/* my app */const property_trans2 = document.getElementById("property_trans2")
	/* my app */const property_trans3 = document.getElementById("property_trans3")
	/* my app */console.log("property: " + property_trans1 + property_trans2 + property_trans3)

	/* my app */const duration_trans1 = document.getElementById("duration_trans1")
	/* my app */const duration_trans2 = document.getElementById("duration_trans2")
	/* my app */const duration_trans3 = document.getElementById("duration_trans3")
	/* my app */console.log("duration: " + duration_trans1 + duration_trans2 + duration_trans3)

	/* my app */const timing_trans1 = document.getElementById("timing_trans1")
	/* my app */const timing_trans2 = document.getElementById("timing_trans2")
	/* my app */const timing_trans3 = document.getElementById("timing_trans3")
	/* my app */console.log("timing: " + timing_trans1 + timing_trans2 + timing_trans3)

	/* my app */const delay_trans1 = document.getElementById("delay_trans1")
	/* my app */const delay_trans2 = document.getElementById("delay_trans2")
	/* my app */const delay_trans3 = document.getElementById("delay_trans3")
	/* my app */console.log("delay: " + delay_trans1 + delay_trans2 + delay_trans3)

	/*document.getElementById('new_account_div').classList.add('hidden');*/
	/*console.log(nameInput.value);*/

	/* Erst konto 1 löschen, dann geht's weiter */
	/* my app */fetch('konten/' + 1 + '/', { method: 'DELETE' })
	/* my app */.then(res => {   })
	/* my app */.catch(err => zeigeFehler(err))
	
	
	/* Jetzt konto 1 neu erstellen */	
	fetch('konten/', {
		method: 'POST',
		body: JSON.stringify({ 
		/*"Name": nameInput.value, */
		
	/* my app */	"Property_trans1": property_trans1.value,
	/* my app */	"Property_trans2": property_trans2.value,
	/* my app */	"Property_trans3": property_trans3.value,
	/* my app */	"Duration_trans1": duration_trans1.value,
	/* my app */	"Duration_trans2": duration_trans2.value,
	/* my app */	"Duration_trans3": duration_trans3.value,
	/* my app */	"Timing_trans1": timing_trans1.value,
	/* my app */	"Timing_trans2": timing_trans2.value,
	/* my app */	"Timing_trans3": timing_trans3.value,
	/* my app */	"Delay_trans1": delay_trans1.value,
	/* my app */	"Delay_trans2": delay_trans2.value,
	/* my app */	"Delay_trans3": delay_trans3.value
		 }),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(res => ladeKonten())
		.catch(err => zeigeFehler(err))


	evt.preventDefault();
}

function zeigeFormular() {
	document.getElementById('new_account_div').classList.remove('hidden');
}

window.addEventListener('load', evt => {
	ladeKonten();
	document.getElementById('refresh_button').addEventListener('click', ladeKonten)
	document.getElementById('new_account_button').addEventListener('click', zeigeFormular)
	document.getElementById('create_account_button').addEventListener('click', saveTransition)

	document.getElementById('button_save').addEventListener('click', saveTransition)
	document.getElementById('button_load').addEventListener('click', loadTransition)
})