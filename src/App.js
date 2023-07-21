import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
