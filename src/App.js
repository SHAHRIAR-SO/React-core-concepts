import logo from './logo.svg';
import './App.css';

function App() {
  var person1 ={ 
    fst_name : " Eva",
    second_name : "Rahman"

}

var person2 ={ 
  fst_name : "Dr. mahfuzur",
  second_name : "Rahman"

}
var style = {
  color: 'red',
  backgroundColor : 'white'
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
       <p>my first react paragraph</p>
       <h1>my heading</h1>
       <h4>fuk you bitch</h4>
       <h2>amar atto kichu ase kno</h2>
       <h1>akhon may be thik hoye geche</h1>
       <h1>my heading:{2+3}</h1>
       <h1>i need to hear  song</h1>
       <h3 style={style}>person1: {person1.fst_name + " " + person1.second_name}</h3>
       <h3 style={{backgroundColor : 'white',color : 'yellowgreen'}}>person2: {person2.fst_name + " " + person2.second_name}</h3>

      </header>
    </div>
  );
}

export default App;
