import React, { Component } from "react";
import data from "./cardData.json";
import Card from "./components/Card";

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    guesses: [],
    data
  };

  validateClick = id => {
    if (!this.state.guesses.includes(id)) {
      console.log(id);
      const pushToGuesses = this.state.guesses;
      pushToGuesses.push(id);
      const randomData = this.shuffle(this.state.data);
      this.setState({
        guesses: pushToGuesses,
        data: randomData,
        score: this.state.score + 1
      });
      console.log(this.state.score);
    } else {
      console.log("running lose");
      console.log(id);
      this.setHighScore()
    }
  };
  setHighScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score})
    }
    this.setState({score: 0, guesses: [], data: this.shuffle(this.state.data)})
  }

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  render() {
    return (
      <div className="column">
        {this.state.data.map(pic => (
          <Card
            id={pic.id}
            key={pic.id}
            name={pic.name}
            image={pic.image}
            validateClick={this.validateClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
