let name;
let status;

function sendPOST() {
	fetch('http://localhost:5000/api/members', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: name || 'yaseen', status: status || 'active' }),
	}).then(res => console.log(res));
}

// function sendGET(id) {
// 	fetch(`http://localhost:5000/api/members?id=${id}`, {
// 		method: 'get',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 		}
// 	})
// 		.then(res => res.json())
// 		.then(data => html(data));
// }

async function sendGET(id) {
	const response = await fetch(`http://localhost:5000/api/members?id=${id}`);
	const data = await response.json();
	await html(data);
}

function html(data) {
	const p = document.createElement('p');
	p.textContent = JSON.stringify(data);
	document.querySelector('body').appendChild(p);
}
