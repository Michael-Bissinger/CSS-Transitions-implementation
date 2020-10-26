function zeigeKontoDetails(kontonummer, contentDiv) {
	console.log("zeigeKontoDetails: ", kontonummer, contentDiv)
	fetch('konten/' + kontonummer + '/')
		.then(res => res.json())
		.then(konto => {
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
			h5.innerText = konto.name

			const p = document.createElement('p')
			p.classList.add('card-text')
			p.innerText = konto.kontonummer

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

function erzeugeKonto(evt) {
	const nameInput = document.getElementById("name")
	document.getElementById('new_account_div').classList.add('hidden');
	console.log(nameInput.value);

	fetch('konten/', {
		method: 'POST',
		body: JSON.stringify({ "Name": nameInput.value }),
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
	document.getElementById('create_account_button').addEventListener('click', erzeugeKonto)
})