import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css'
import Authorization from './Pages/Authorization/Authorization/Authorization';
import FindDress from './Pages/Dress/FindDress/FindDress';
import RentDress from './Pages/Dress/RentDress/RentDress';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AllOrders from './Pages/Orders/AllOrders/AllOrders';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import Navbar from './Pages/Shared/Header/Navbar/Navbar';
import PrivateRoute from './Utilities/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/authorization" component={Authorization} />
          <PrivateRoute path="/dress/rent">
            <RentDress />
          </PrivateRoute>
          <PrivateRoute path="/dress/find">
            <FindDress />
          </PrivateRoute>
          <PrivateRoute path="/orders/all">
            <AllOrders />
          </PrivateRoute>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
