let name;
let status;

function sendPOST() {
	fetch('http://localhost:5000/api/members', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: name, status: status }),
	}).then(res => console.log(res));
}
