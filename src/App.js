import React from 'react';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Side from './Side_bar'
import Cart_red from './Reducer/Cart_reducer'
import Product_red from './Reducer/Products_reducer'
import Products from  './Components/Products'
import {Provider} from 'react-redux'
import Cart from './Components/Cart'
import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'



const reducer = combineReducers({Carts:Cart_red,Product:Product_red})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
    
  return (
    <div className="App">
   <Provider store={store}>
      <Router>
         <Navbar />
         {/* <Side /> */}
         <Route exact path="/" component={Products} />
         <Route path="/Cart" component={Cart}  />      
      </Router>
    </Provider>
      
    </div>
  );
}

export default App;
