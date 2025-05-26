const isUserLoggedIn = true;
//Ternary operators only used when setting variable to T/F value.
// variable is asking if "isuserloggedin = true", if yes then print "welcome", if not then print "please log in".
const welcomeMessage = isUserLoggedIn ? "welcome" : "please log in";

//Normal if/else.(both do the same thing)
let welcomeMessage1 = "";

if (isUserLoggedIn) {
  welcomeMessage1 = "welcome";
} else {
  welcomeMessage1 = "please log in";
}
