import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
