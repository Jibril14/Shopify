import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import {HashRouter as Router, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Registration from './screens/RegistrationScreen';
import loginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/profileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import ContactMe from './components/ContactMe';


const App =()=> {

  return (
    <Router>
  <div>

    <Header/>
     <main className="py-3">
       <Container >
     
       <Route path='/' component={HomeScreen} exact/>
       <Route path='/product/:id' component={ProductScreen} exact/>
       <Route path='/cart/:id?' component={CartScreen} />
       <Route path='/login' component ={loginScreen} />
       <Route path='/register' component={Registration} />
       <Route path='/profile' component={ProfileScreen} />
       <Route path='/shipping' component={ShippingScreen} />
       <Route path='/payment' component={PaymentScreen} />
       <Route path='/placeorder' component={PlaceOrderScreen} />
       <Route path='/order/:id' component={OrderScreen} />
       <Route path='/admin/userlist' component={UserListScreen} />
       <Route path='/admin/user/:id/edit' component={UserEditScreen} />
       <Route path='/admin/productlist' component={ProductListScreen} />
       <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
       <Route path='/admin/orderlist/' component={OrderListScreen} />
       <Route path='/contact' component={ContactMe} exact/>
       </Container>
    
     </main>
     <Footer/>
   </div>
   </Router>  
  );
}

export default App;
