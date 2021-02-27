import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProductComponent from './components/ListProductComponent';
import Navbar from './components/Navbar';
import FooterComponent from './components/FooterComponent';
import AddProduct from './components/AddProduct';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
        <Router>
              <Navbar />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/products" component = {ListProductComponent}></Route>
                          <Route path = "/add-product/:prod_id" component = {AddProduct}></Route>
                          <Route path = "/view-product/:prod_id" component = {ViewProductComponent}></Route>
                          <Route path = "/update-product/:prod_id" component = {UpdateProductComponent}></Route> 
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
