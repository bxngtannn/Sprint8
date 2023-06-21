import logo from './logo.svg';
import './App.css';

import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
