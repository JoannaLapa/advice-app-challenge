'use strict'

let adviceNumber = document.querySelector('#advice-number')
let adviceText = document.querySelector('#advice')
const button = document.querySelector('#button')

let URL = 'https://api.adviceslip.com/advice'

function getAdvice() {
	fetch(URL, {cache: "no-cache"})
		.then(res => {
			return res.json()
		})
		.then(adviceData => {
			const adviceObject = adviceData.slip
			adviceNumber.textContent = 'ADVICE #' + adviceObject.id
			adviceText.textContent = '"' + adviceObject.advice + '"'
		})
		.catch(error => console.log('error'))
}

button.addEventListener('click', () => {
	getAdvice()
})
window.onload = () => {
	getAdvice()
}
