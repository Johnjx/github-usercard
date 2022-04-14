import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const URL = 'https://api.github.com/users/johnjx'

axios.get(URL)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
    </div>
*/

function cardMaker(dataObj) {
  const profileCard = document.createElement("div");
  profileCard.classList.add("card");

  const userImage = document.createElement("img");
  userImage.src = dataObj.avatar_url;
  userImage.alt = "Image of the User"
  profileCard.appendChild(userImage);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  profileCard.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = dataObj.name;
  cardInfo.appendChild(name);

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = dataObj.login;
  cardInfo.appendChild(userName);

  const userLocation = document.createElement("p");
  userLocation.textContent = `Location: ${dataObj.location}`;
  cardInfo.appendChild(userLocation);

  const userPage = document.createElement("p");
  userPage.textContent = "Profile:";
  const pageLink = document.createElement("a");
  pageLink.textContent = "Press Here";
  pageLink.href = dataObj.html_url;
  userPage.appendChild(pageLink);
  cardInfo.appendChild(userPage);

  const followers = document.createElement("p");
  followers.textContent = `Follower: ${dataObj.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${dataObj.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${dataObj.bio}`;
  cardInfo.appendChild(bio);

  return profileCard;

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
