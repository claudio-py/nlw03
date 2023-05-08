//create map
const map = L.map('mapid').setView([-27.2210955, -49.6457307], 16)
//create and add tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//creat icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68]
})

let marker

//creTE nd aDD Mrker
map.on('click', event => {
	const lat = event.latlng.lat
	const lng = event.latlng.lng
	document.querySelector('[name=lat]').value = lat
	document.querySelector('[name=lng]').value = lng
	//remove pin aicon
	marker && map.removeLayer(marker)
	//  add icon layer
	marker = L.marker([lat, lng], { icon }).addTo(map)
})

function addPhotoField() {
	// /pegar o container dee fptps
	const container = document.querySelector('#images')
	//pegar p cpntainer ára duplicar .new-image
	const fieldsContainer = document.querySelectorAll('.new-upload')
	//realizar o clone da ultima imagem adicionada
	const newFieldContainer =
		fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
	//if Field blank, disable addField fucntion
	const input = newFieldContainer.children[0]
	if (input.value == '') {
		return
	}
	// /clear new field
	input.value = ''
	// adicionar po colne ap cpntainer de #imagens
	container.appendChild(newFieldContainer)
}
function deleteField(event) {
	const span = event.currentTarget
	const fieldsContainer = document.querySelectorAll('.new-upload')

	if (fieldsContainer.length < 2) {
		// limpar o valor do campo
		span.parentNode.children[0].value = ''
		return
	}
	// deletar o campo
	span.parentNode.remove()
}
//Seleção de botões

function toggleSelect(event) {
	//retirar a class .active (dos botçoes)
	document.querySelectorAll('.button-select button').forEach(button => {
		button.classList.remove('active')
	})
	//colocar class .active nesse botao clicado
	const button = event.currentTarget
	button.classList.add('active')

	//pegar o botão clicado
	//verificar se sim ou nao~
	//atualiza o meu input hidden o valor selecionadpo
	const input = document.querySelector('[name="open_on_weekends"]')
	input.value = button.dataset.value
}
