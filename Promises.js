fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(console.log)


async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json();
	console.log(data)
}




const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]

// ES8

const getData = async function() {
	try {

	const [users, posts, albums] = await Promise.all(urls.map(url => 
		fetch(url).then(resp => resp.json())
))
console.log('users', users)		
console.log('posts', posts)	
console.log('albums', albums)	
} catch (err) {
	console.log('oops');
}
}

// with for loop

const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {

	const [users, posts, albums] = await Promise.all(urls.map(url => 
		fetch(url).then(resp => resp.json())
))
console.log('users', users)		
console.log('posts', posts)	
console.log('albums', albums)	
} catch (err) {
	console.log('oops');
}
}
const loopThtoughUls = urls => {
	for (url of urls) {
		console.log(url)
	}
}


// for await of 

const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
	try {

	const [users, posts, albums] = await Promise.all(urls.map(async function(url) { 
		const response = await fetch(url);
		return response.json();
}));
console.log('users', users)		
console.log('posts', posts)	
console.log('albums', albums)	
} catch (err) {
	console.log('oops');
}
}

const getData2 = async function() {
	const arrayOfPromises = urls.map(url => fetch(url)); 
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data)
	}
}

// ES9 finally()

const urls = [
'https://swapi.co/api/people/1',
'https://swapi.co/api/people/2',
'https://swapi.co/api/people/3',
'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(people => people.json())
}))
 .then(array => {
 	throw Error;
 	console.log('1', array[0])
 	console.log('2', array[1])
 	console.log('3', array[2])
 	console.log('4', array[3])
 })
.catch(err => console.log('fix it', err))
.finally(() => console.log('extra'));	



