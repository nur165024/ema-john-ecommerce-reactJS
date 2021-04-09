import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import OrderView from './components/OrderView/OrderView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';
import Other from './components/Other/Other';
import Inventory from './components/Inventory/Inventory';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
     const [logInUser, setLogInUser] = useState({});
     
     return (
          <UserContext.Provider value={[logInUser, setLogInUser]}>
               <Router>
                    <h3>Email : {logInUser.email}</h3>
                    <Header></Header>
                    <Switch>
                         <Route exact path="/">
                              <Shop></Shop>
                         </Route>
                         <Route path="/order-review">
                              <OrderView></OrderView>
                         </Route>
                         <Route path="/product/:productkey">
                              <ProductDetails></ProductDetails>
                         </Route>
                         <Route path="/manage-inventory">
                              <Inventory></Inventory>    
                         </Route>
                         <Route path='/checkout'>
                              <Checkout></Checkout>
                         </Route>
                         <Route path='/login'>
                              <Login></Login>
                         </Route>
                         <Route path="*">
                              <Other></Other>
                         </Route>
                    </Switch>
               </Router>
          </UserContext.Provider>
     );
}
export default App;
