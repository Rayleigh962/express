const url = 'http://localhost:5000/posts';

const post = {
	title: 'my first post',
	author: 'yaseen',
	body: 'this is probably gonna fail :(',
};

async function sendPOST() {
	const response = await fetch(url, {
		method: 'post',
		headers: {
			'accept': 'application/json',
			'content-type': 'application/json',
		},
		body: JSON.stringify(post),
	});
}




// function sendPOST() {
// 	fetch('http://localhost:5000/api/members', {
// 		method: 'post',
// 		headers: {
// 			'Accept': 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ name: name || 'yaseen', status: status || 'active' }),
// 	}).then(res => console.log(res));
// }


// async function sendGET(id) {
// 	const response = await fetch(`http://localhost:5000/api/members?id=${id}`);
// 	const data = await response.json();
// 	await html(data);
// }

// function html(data) {
// 	const p = document.createElement('p');
// 	p.textContent = JSON.stringify(data);
// 	document.querySelector('body').appendChild(p);
// }
