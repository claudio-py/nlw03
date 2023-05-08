//create map
const map = L.map('mapid').setView([-27.2210955, -49.6457307], 16)
//create and add tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//creat icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
	//create popup overlay
	const popup = L.popup({
		closeButton: false,
		className: 'map-popup',
		minWidth: 240,
		minHeight: 240
	}).setContent(
		`${name} <a href='orphanage?id=${id}' ><img src='/images/arrow-white.svg'> </a> `
	)
	//create pin icon and popup
	L
	.marker([lat, lng], { icon })
	.addTo(map)
	.bindPopup(popup)
}


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
	const orphanage = {
		id: span.dataset.id,
		name: span.dataset.name,
		lat: span.dataset.lat,
		lng: span.dataset.lng
	}
	addMarker(orphanage)
})
