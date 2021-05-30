const isCharging = require('is-charging');
const batteryLevel = require('battery-level');
const fetch = require('node-fetch');
const cron = require('node-schedule');

async function get_bat() {
	let todo = {
    id_battery: 1,
    status: await isCharging(),
    capacity: await batteryLevel()
	}

	fetch('http://echarging.duckdns.org/rest-server/api/battery', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 
    	'Content-Type': 'application/json',
		'Authorization': 'Basic '+Buffer.from('admin@admin.com:singadepa').toString('base64') }
	}).then(res => res.json())
  	.then(json => console.log(json))
  	.catch(err => console.log(err))

}

// get_bat()

cron.scheduleJob('*/1 * * * *', function(){
    get_bat()
});
