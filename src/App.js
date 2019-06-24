import React, { Component } from "react";
import './App.css';
import CreateCard from "./components/cards"
import clickers from "./clickers.json";
import Wrapper from "./components/wrapper"
import Header from "./components/Header"


// import Footer from "./components/Footer"

class App extends Component {
  
  // Setting this.state.friends to the friends json array
  state = {
    clickers,
    score: 0,
    highscore: 0
    // add clicked false
  };


  gameOver = () => {
    // build the function out so that it will reset the game
    console.log("Game Over was fired")
    this.setState({score : this.state.score = 0})
    // console.log(this.imageClicked)
  }

  // function for clickers
  imageClicked = id => {
    
    // get the ID of the card that is clicked on
    const imageClick = id
    // console.log(imageClick)
   
    //grab the cards array off state
    const clicked = this.state.clickers
    // console.log(clicked)

    // this get reasigned to index on line 50
    let indexOfCardClicked;

    //find the card object on state 
    clicked.find(function(element, index) {
      if (element.id === imageClick) {
        // return the index that was clicked
        // index will become the "returnedArray"
        indexOfCardClicked = index;
        return index;
      } else {
        return false;
      }
    });

// console.log showing "true" or "false"

// see if it has been clicked
// if its === true (has been clicked) call "gameOver" & reset
if (clicked[indexOfCardClicked].buttonClicked === true) {
  // console.log(clicked[indexOfCardClicked].buttonClicked)
      
      // Call the game over function
      this.gameOver()
      
    } else {

    this.setState({score : this.state.score + 1})
    console.log(this.state.score)
    //shuffle them
    this.state.clickers.sort(() => Math.random() - 0.5)
      
  //if it hasent been clicked 
    //find the object in the array you clicked on
    //update a clicked value to be true on the object in the array
    //set that new array you returned that has the object updated on it to state
    //react will re render
  
    }
  }

  // render our page
  render() {
    return(
      
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}/>
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