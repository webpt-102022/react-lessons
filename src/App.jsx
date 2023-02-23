import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import SaySomething, { users, list as itemList, names } from './data/data';

const App = () => {

  const dogs = [{
    name: "Sparkles the dog",
    color: "brown",
    age: 5,
    isVaccined: true,
    _id: "34439583405983415"
  },
  {
    name: "Aria",
    color: "black",
    age: 6,
    isVaccined: false,
    _id: "34r435435436435456"
  },
  {
    name: "Dolfy",
    color: "golden",
    age: 11,
    isVaccined: true,
    _id: "435346456245654"
  }]

  return (
    <>
      <div className="App">
        <Header />
        <div className="card-container">
          {dogs.map((elem, i) => {
            return (
              <div key={elem._id} className="card_inner">
                <h1>This is a card</h1>
                <Card animal={elem} name={elem.name}>{elem.name}</Card>
              </div>)
          })}
          <ul>
            {names.map((elem, i) => <li key={i}>{elem}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
