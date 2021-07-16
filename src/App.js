import './App.css';
import Display from './components/Display';
import Search from './components/Search';
import Error from './components/Error';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Search/>
    <Router>
       <Display path=":type/:id"/>
       <Error path = "/error"/>
    </Router>
    </div>
  );
}

export default App;
