import Game from "./Game";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="game-container">
        <Game />
        <Game />
      </div>
    </div>
  );
}

export default App;
