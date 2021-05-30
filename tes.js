const fetch = require('node-fetch');

let todo = {
    id_battery: 123,
    status: true,
    capacity: 0.20
}

fetch('http://echarging.duckdns.org/rest-server/api/battery', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json',
'Authorization': 'Basic '+Buffer.from('admin@admin.com:singadepa').toString('base64') }
}).then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
