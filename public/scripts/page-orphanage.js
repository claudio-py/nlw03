const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 15)
//create and add tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//creat icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
})
//create popup overlay

//create pin icon and popup

L.marker([lat, lng], { icon }).addTo(map)

// image gallery
function selectImage(event) {
	const button = event.currentTarget
	//removee todas as classes ativas
	const buttons = document.querySelectorAll('.images button')
	buttons.forEach(removeActiveClass)
	function removeActiveClass(button) {
		button.classList.remove('active')
	}
	//selecionar a imagem aclicada
	const image = button.children[0]
	const imageContainer = document.querySelector('.orphanage-details > img')
	//atualizar o container de imagem
	imageContainer.src = image.src
	//adcionar a claser active no bptao clicado
	button.classList.add('active')
}
