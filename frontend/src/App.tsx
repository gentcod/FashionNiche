import './App.css';

import axios from "axios";

axios.get('http://localhost:5000/api/products').then(data => console.log(data))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is the frontend
      </header>
    </div>
  );
}

export default App;
