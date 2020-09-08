import axios from 'axios';
/* STEP 1: using axios, send a GET request to the following URL (replacing the placeholder with your Github name): https://api.github.com/users/<your name> */
axios.get('https://api.github.com/users/LenaHarrisLambda')
	.then(response => {
		const cardcontainer = document.querySelector('.cards');
		const newCard = cardMaker(response.data);
		cardcontainer.append(newCard);
	})
	.catch(err => {
	  console.log("Error: ", err);
	});

function followCardMaker(name) {
	axios.get('https://api.github.com/users/' + name)
		.then(response => {
			const cardcontainer = document.querySelector('.cards');
			const newCard = cardMaker(response.data);
			cardcontainer.append(newCard);
		})
		.catch(err => {
		  console.log("Error: ", err);
		});
}

/* STEP 2: Inspect and study the data coming back, this is YOUR github info! You will need to understand the structure of this data in order to use it to build your component function Skip to STEP 3. */

/* STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards */

/* STEP 5: Now that you have your own card getting added to the DOM, either follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the bottom of the page. Get at least 5 different Github usernames and add them as Individual strings to the friendsArray below. Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM. */
const followersArray = ['BrityHemming', 'ElleTinajero', 'Ladrillo', 'MileyWright', 'tetondan'];
followersArray.forEach(element => {
	followCardMaker(element);
});

/* STEP 3: Create a function that accepts a single object as its only argument. Using DOM methods and properties, create and return the following markup:
<div class="card">
	<img src={image url of user} />
	<div class="card-info">
		<h3 class="name">{users name}</h3>
		<p class="username">{users user name}</p>
		<p>Location: {users location}</p>
		<p>Profile:
			<a href={address to users github page}>{address to users github page}</a>
		</p>
		<p>Followers: {users followers count}</p>
		<p>Following: {users following count}</p>
		<p>Bio: {users bio}</p>
	</div>
 </div> */
 function cardMaker(obj) {
	// Declare Code //
	const card = document.createElement('div');
	const avatar = document.createElement('img');
	const cardinfo = document.createElement('div');
	const name = document.createElement('h3');
	const username = document.createElement('p');
	const location = document.createElement('p');
	const profile = document.createElement('p');
	const profilelink = document.createElement('a');
	const followers = document.createElement('p');
	const following = document.createElement('p');
	const bio = document.createElement('p');
	// Add Attributes //
	card.setAttribute('class', 'card');
	cardinfo.setAttribute('class', 'card-info');
	name.setAttribute('class', 'name');
	// Set Text Content //
	avatar.setAttribute('src', obj.avatar_url);
	name.textContent = obj.name;
	username.textContent = obj.login;
	location.textContent = obj.location;
	profile.textContent = 'Profile: '
	profilelink.setAttribute('href', obj.url);
	profilelink.textContent = obj.url;
	followers.textContent = obj.followers;
	following.textContent = obj.following;
	bio.textContent = obj.bio;

	// Append To Parent Elements //
	card.append(avatar);
	card.append(cardinfo);
	cardinfo.append(name);
	cardinfo.append(username);
	cardinfo.append(location);
	cardinfo.append(profile);
	profile.append(profilelink);
	cardinfo.append(followers);
	cardinfo.append(following);
	cardinfo.append(bio);
	return card;
}

/* List of LS Instructors Github username's:
tetondan
dustinmyers
justsml
luishrd
bigknell */