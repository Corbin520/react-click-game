import React, { Component } from "react";
import './App.css';
import CreateCard from "./components/cards"
import clickers from "./clickers.json";
import Wrapper from "./components/wrapper"
import Header from "./components/Header"


// import Footer from "./components/Footer"
console.log(CreateCard)
class App extends Component {
  
  // Setting this.state.friends to the friends json array
  state = {
    clickers,
    score: 0,
    highscore: 0
    // add clicked false
  };

  

  imageClicked = id => {

  
    
    console.log("Worked from App.js")
    
    // get the ID of the card that is clicked on
    const imageClick = id
    console.log(imageClick)
   

    //grab the cards array off state
    const clicked = this.state.clickers
    console.log(clicked)

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

  

  render() {
    return(
      
      <Wrapper>
        <Header />
      {/* Add title */}
        {this.state.clickers.map(clickers => (
          <CreateCard
            id={clickers.id}
            key={clickers.id}
            image={clickers.image}
            handleClick = {this.imageClicked}
            />
        ))}
      </Wrapper>
    )
  }
}
export default App;