
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from "./component/header"
import Home from "./component/home"
import About from "./component/about"
import Addbook from "./component/addbook"
import Books from "./component/book/showbook"
import Admin from "./component/book/admin"
import Bookdetail from "./component/book/bookdetails"
import Cart from "./add_to_cart/cart_page"
import Login from "./component/login.js/login"
import Payment from "./component/payment/payment"
import Footer from './component/footer';
import  Book_opened  from "./component/Open_Book/book_click";
function App() {
  return ( 
    <div className="App">
         <header>
         <Nav/>
         </header>

         <main>
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Addbook/>}/>
            <Route path='/admins' element={<Admin/>}/>
            <Route path='/admin' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/payment' element={<Payment/>}/>
            
            <Route path='/books' element={<Books/>}/>
            <Route path='/:id' element={<Bookdetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/details/:_id' element={<Book_opened/>}/>
          </Routes>
         </main>
      <footer>
        {/* <Footer/> */}
        </footer>    
    
    </div>
  );
}

export default App;
