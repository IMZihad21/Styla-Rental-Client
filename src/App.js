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
import DressDetails from './Pages/Dress/DressDetails/DressDetails';
import Orders from './Pages/Orders/Orders/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authorization" component={Authorization} />
          <PrivateRoute exact path="/dress/rent">
            <RentDress />
          </PrivateRoute>
          <PrivateRoute exact path="/dress/find">
            <FindDress />
          </PrivateRoute>
          <PrivateRoute path="/dress/:dressID">
            <DressDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute exact path="/orders/all">
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
