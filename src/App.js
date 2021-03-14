import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';

function OrderView(){
  return (
    <div>
      <h2>this is order review</h2>
    </div>
  )
}
function Inventory(){
  return (
    <div>
      <h2>this is manage inventory</h2>
    </div>
  )
}
function Other(){
  return (
    <div>
      <h2>this is 404 page</h2>
    </div>
  )
}

function App() {
  return (
    <div>
        <Header></Header>
        <Router>
          <Switch>
             <Route exact path="/">
                <Shop></Shop>
             </Route>
             <Route path="/order-review">
                <OrderView></OrderView>
             </Route>
             <Route path="/manage-inventory">
                <Inventory></Inventory>
             </Route>
             <Route path="/product/:productkey">
                <ProductDetails></ProductDetails>
             </Route>
             <Route path="*">
                <Other></Other>
             </Route>
          </Switch>
        </Router>
        
    </div>
  );
}
export default App;
