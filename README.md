# ISS React

ISS React is a quick-and-dirty React app that I put together after finishing my full-stack web development bootcamp. I did so because I enjoyed working with React and wanted to keep practicing.

I learned a few very important things while putting this together, my most important takeaway being about CORS and the endless ways in which it can break your app. But before I get into that, I'd like to explain my approach to building this web-app. React--as its name suggests--is meant to react and update any number of components without having to refresh the page. I wanted to make something where my components would _react_ every few seconds. To do so, I instantly thought of NASA and its endless supply of easy-to-use APIs--chock-full of great information from the universe above us. I decided to go with the International Space Station (ISS) API because of how quickly the ISS orbits our planet (28,000 km/h, according to NASA). I figured that this would be a good opportunity to use React to visualize the position of the ISS over a map of the world. The end result turned out as I expected; the web-app works and I learned a lot more about building React apps.

Everything was quite straightforward until I deployed the page. Upon deployment, my console was instantly crippled by a series of CORS errors. At first, I was obviously annoyed because my app was working perfectly in my production environment. Then, as I started to do some research, I realized that there's so much more to web development than a 24-week bootcamp's syllabus. So in a way, while I will miss the intense environment of the bootcamp, I realized that there's still plenty to learn and that I can do so on my own. The answer to this CORS bug was obviously found on Stack Overflow. It was a quick-fix--deploy an easy [Heroku app](https://limitless-reaches-72958.herokuapp.com/) to give all your GET requests the appropriate headers.

I hope to keep exploring React and put togther a Node-based back-end for the next one.

[Click here to check out ISS React.](https://raglaks.github.io/iss_react/)

_Please note that the app will take 30-60 seconds to load all the components. I could have made this interval shorter but my computer's fans kept wailing when I reset the state every second. So please have some patience when you first load the app._
