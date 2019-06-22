# react-click-game

### Instructions

<!-- 1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality. -->

<!-- 2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app). -->


3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.

7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.




Personal Psudo Code --

How Are we going to build this game?

// what is the app?
    // in this game we are going to be clicking on an object, if you click on the same 
    // object twice, you lose. If you dont click on the same object, your score goes up
    // by one.


// what we need for the UI
    // a nav element that that will display text and as well as our score keeper
    // images of the things we will be clicking on
    // basic syle with a background and color *Could bring in bootstrap*
    // explain the game to the user


// logic
    // Get data (images) of the images we want to see

    // Once we have all the images, we will need to grab the data, flip through ".map()"
    // and push everything out to the screen.

    // When the user clicks on an image, shuffle the images to a random place.
        // we can use the random method from JS or some other way to shuffle the images.
    
    // each image/object needs to have a key value so that it knows if it has been clicked or not
        // if a key has been clicked on multiple times, stop the game, show the score and restart

    // We need to keep track of the top score, in the app it will reset when refreshed also.



   handleClick = (event) => {
    
    //get id of the card yu clicked off first event.target.cardId
    //grab the cards array off state
    //find the card object on state and see if its been clicked
    // if its been clicked 
      //you lost and reset
    //if it hasent been clicked 
      //shuffle them
      //find the object in the array you clicked on
      //update a clicked value to be true on the object in the array
      //set that new array you returned that has the object updated on it to state
      //react will re render
  }

  shuffleArray(cardsArray) {
    //use a fisher yates or durnteinfield shuffle
    //create new array
    //shuffle
    //return new array
  }