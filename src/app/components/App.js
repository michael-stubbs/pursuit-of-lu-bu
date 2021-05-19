import { Component } from "react";
import Game from "./Game";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  componentDidMount() {
    const url = new URL("http://localhost:3001");
    fetch(url + "reviews")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((reviews) => {
        console.log(reviews);
        this.setState({ reviews });
      });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="game-container">
          {this.state.reviews.map((i) => {
            return (
              <Game
                key={i._id}
                title={i.title}
                img={i.link}
                rating={i.rating}
                body={i.review}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
