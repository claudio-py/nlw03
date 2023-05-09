const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
	// await saveOrphanage(db, {
	// 	lat: '-27.2210955',
	// 	lng: '-49.6557307',
	// 	name: 'Lar dos meninos',
	// 	about:
	// 		'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
	//     whatsapp:"832283723827",
	// 	images: [
	// 		'https://picsum.photos/id/250/800',
	// 		'https://picsum.photos/id/251/800'
	// 	].toString(),
	// 	instructions:
	// 		'venha como se sentir a vontade e traga muito amor mas também muuita paciencia em',
	// 	opening_hours: 'Horário de visitas Das 18h até 8h',
	// 	open_on_weekends: '0'
	// })
	//consultar dados na tabela
	const selectedOrphanages = await db.all('SELECT * FROM orphanages')
	console.log(selectedOrphanages)
	const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
	console.log(orphanage)
	//deleetar dados da tabela
	// console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})
