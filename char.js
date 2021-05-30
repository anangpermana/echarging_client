const batteryLevel = require('battery-level');
const isCharging = require('is-charging');

(async () => {
	console.log(await isCharging());
	//=> 0.55
})();
