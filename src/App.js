import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
