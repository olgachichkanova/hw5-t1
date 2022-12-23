import './App.css';
import placeholder from "../src/assets/placeholder.svg"
import Card from './components/Card';

function App() {
  const card1 = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content."
  }

  const card2 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }

  return (
    <div className="App">
      <Card title={card2.title} text={card2.text}>
        <img src={placeholder} className="card-img-top" alt="..." />
      </Card>
      <Card title={card1.title} text={card1.text} />
    </div>
  );
}

export default App;
