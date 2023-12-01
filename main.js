let developers = [
  {
    id: 1,
    name: "Martha Wanjiru",
    profession: "web developer",
    age: 22,
    gender: "female",
    color: "Beautiful",
    githubUsername: "Martha-Wanjiru"
  },
  {
    id: 2,
    name: "John Odhiambo",
    profession: "web developer",
    age: 25,
    gender: "male",
    color: "Black-American",
    githubUsername: "joe-bits"
  },
  {
    id: 3,
    name: "Evone Wavinya",
    profession: "web developer",
    age: 20,
    gender: "female",
    color: "Dark-brown",
    githubUsername: "Evone_Wavinya"
  },
  {
    id: 4,
    name: "Randy Kimani",
    profession: "web developer",
    age: 21,
    gender: "male",
    color: "Black-American",
    githubUsername: "kimani-caps"
  },
  {
    id: 5,
    name: "Nicholas Onyiego",
    proffession: "web developer",
    age: 22,
    color: "Black-American",
    gender: "Male",
    githubUsername: "nicholasonyiego9"
},
{
    id: 7,
    name: "Samwel Kariuki",
    proffession: "web developer",
    age: 20,
    color: "Dark-brown",
    gender: "Male",
    githubUsername: "nj-sam"
},
{
    id: 8,
    name: "Brian Kamana",
    proffession: "web developer",
    age: 20,
    color: "Brown",
    gender: "Male",
    githubUsername: "kamana88"
},

{
    id: 9,
    name: "Kezia Odunga",
    proffession: "web developer",
    age: 20,
    color: "Brown",
    gender: "Female",
    githubUsername: ""
},

{
    id: 10,
    name: "Elsie Kalondu",
    age: 16,
    proffession: "web developer",
    color: "Chocolate",
    gender: "Female",
    githubUsername: "eisakalosh"
},

{
    id: 11,
    name: "Moses Odhiambo",
    age: 22,
    proffession: "web developer",
    color: "Dark-brown",
    gender: "Male",
    githubUsername: "moses-onyango"
},

{
    id: 12,
    name: "Faith Wanjiku",
    age: 23,
    proffession: "web developer",
    color: "Brown",
    gender: "Female",
    githubUsername: "wanjiku8"
},

{
    id: 13,
    name: "Mary Mwende",
    age: 20,
    proffession: "web developer",
    color: "Brown",
    gender: "Female",
    githubUsername: "Marymwende"
},

{
    id: 14,
    name: "Lexin Onyando",
    age: 19,
    proffession: "web developer",
    color: "Dark-brown",
    gender: "Male",
    githubUsername: "lexinonyando"
},

{
    id: 15,
    name: "Iddi Shaban",
    age: 20,
    proffession: "web developer",
    color: "Black-American",
    gender: "Male",
    githubUsername: "iddizo04"
},

{
    id: 16,
    name: "Fredrick Othiambo",
    age: 20,
    proffession: "web developer",
    color: "Black-American",
    gender: "Male",
    githubUsername: "fredrick001"
},

{
    id: 18,
    name: "Joshua Josek",
    age: 26,
    proffession: "web developer",
    color: "Dark-brown",
    gender: "Male",
    githubUsername: "JoshuaJosek88"
},

{
    id: 19,
    name: "Mitchelle Adhiambo",
    age: 26,
    proffession: "web developer",
    color: "Dark-brown",
    gender: "Female",
    githubUsername: "Michell635"
},

];

// Function to fetch developer avatars from GitHub
async function fetchDeveloperAvatarsFromGitHub() {
  const avatarUrls = await Promise.all(
    developers.map(async (dev) => {
      try {
        const response = await fetch(`https://api.github.com/users/${dev.githubUsername}`);
        const userData = await response.json();
        return userData.avatar_url;
      } catch (error) {
        console.error(`Failed to fetch avatar for ${dev.githubUsername}:`, error);
        return 'default-avatar-url.jpg'; 
      }
    })
  );
  return avatarUrls;
}


// Function to open the GitHub profile in a new tab when the button is clicked
function openGitHubProfile(username) {
  const githubUrl = `https://github.com/${username}`;
  window.open(githubUrl, '_blank');
}

// Fetch developer avatars from GitHub
fetchDeveloperAvatarsFromGitHub().then((avatarUrls) => {
  // Select the ".box" element
  const box = document.querySelector('.box');

  // Initialize an empty string to accumulate the HTML content for the cards
  let cards = '';

  // Iterate through the developers and avatar URLs
  developers.forEach((dev, index) => {
    const avatarUrl = avatarUrls[index];

    // Generate HTML for each card with the GitHub avatar image, rounded style, and a button
    cards += `
      <div class="card">
        <img src="${avatarUrl}" alt="" class="avatar">
        <ul>
          <li><h1>Name: ${dev.name}</h1></li>
          <li><h2>Profession: ${dev.profession}</h2></li>
          <li><h3>Age: ${dev.age}</h3></li>
          <li><h4>Gender: ${dev.gender}</h4></li>
          <li><h4>Color: ${dev.color}</h4></li>
        </ul>
        <button onclick="openGitHubProfile('${dev.githubUsername}')">View Profile</button>
      </div>
    `;
  });

  // Set the HTML content in the ".box" element
  box.innerHTML = `
    <div class="container">
      ${cards}
    </div>
  `;
});