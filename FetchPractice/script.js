//Fetch is used to fetch things like API from the internet.
//this fetch got the link from an outside website.
const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
  //   //and since the fetch returns data as a promise. if it is resolved then move on to .then.
  //   //so if link resolves then return the response in json format to use in code.
  .then((response) => {
    return response.json();
  }) //if response turning into json resolves then print that information and log the name of each user.
  .then((information) => {
    //log the name of each users.
    information.map((element) => {
      console.log(element.name);
    });
  });

//turn exact same promise into async await
async function doStuff() {
  const response = await fetch(URL);
  //.ok asks if the fetch was able to get the url. no need to ue catch for fetch requests.
  if (response.ok) {
    const responseJson = await response.json();
    console.log(responseJson.map((user) => user.name));
  } else {
    console.log("FAILURE");
  }
}

doStuff();

/*
 *
 *
 */

//how to send data to server from fetch instead of taking it.
async function doStuff1() {
  const response = await fetch(URL, {
    //post method says we want to post data to the server
    method: "POST",
    //header tells server what data looks like. body wont send without header.
    headers: {
      "Content-Type": "application/json",
    },
    //body is the data we want to send.
    //json.stringify makes json file to string.
    body: JSON.stringify({
      title: "New Post",
    }),
  });
  const post = await response.json();
  console.log(post);
}

doStuff1();

/*
 *
 *
 *
 */

//do the same thing but with comments section
const URL2 = "http://jsonplaceholder.typicode.com/comments?postId=1";

fetch(URL2)
  .then((response) => {
    return response.json();
  })
  .then((comments) => {
    console.log(comments);
  });
