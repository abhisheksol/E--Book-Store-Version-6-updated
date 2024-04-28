import { useState } from "react";
import "./books.css" //addbooks madun books cha data gatalo 
import Button from "react-bootstrap/esm/Button";
import { AiOutlineShopping } from 'react-icons/ai';
import sound from './bloop.mp3'
import sound2 from './cart.mp3'
// redux
import { Link } from 'react-router-dom';
import { addToCart } from "../../add_to_cart/actions/action";
import { useSelector, useDispatch } from 'react-redux';

// redux --xxx--



export default function Book(props) {


  function play() {
    new Audio(sound).play()
  }
  function play2() {
    new Audio(sound2).play()
  }

  const mystate = useSelector((state) => state.cardData)
  // console.warn("mystate", mystate);
  const dispatch = useDispatch()

  let { _id, name, price, author, description, available, image, download } = props.book;
  // console.log('this is book.props=====>', props.book);
  return (
    <div className="bodys">

      <div className="cards" style={{ backgroundImage: 'url("")', backgroundColor: '#EDF4F2', position: 'relative' }}>
     <div style={{marginBottom:'20px'}}>
     <h1 style={{
          color: "#31473A",
          backgroundColor: "#D5E5C2",
          padding: '5px', position: "absolute",
          borderRadius: '15px', paddingLeft: '15px',
          paddingRight: '30px',
          fontFamily: 't',
          fontWeight: 'bold'
        }}>{name}
          
        </h1>
     </div>

        <div style={{ height: '59px' }}></div>
        <div onClick={play2}>
          <button className="add_to_cart"
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              zIndex: '1', // Ensure the button appears above the image
            }}
            onClick={() => dispatch(addToCart({ _id, name, price, author, description, available, image, download }, play2))}
          >
            <AiOutlineShopping size={20} style={{ marginRight: '5px' }} /> Add
          </button>
          <div>
       {
          available?<h2 style={{backgroundColor:'white',
          fontSize:'20px',
          position:'absolute',
          marginLeft:'15px',
          marginTop:'5px',
          paddingRight:'5px',
          color:"green",
          borderRadius:'5px'
        }}>Free</h2>:null
        }
       </div>
          </div>


        {/* <Link to="/details"> */}
        <Link to={`/details/${_id}?name=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&available=${encodeURIComponent(available)}&download=${encodeURIComponent(download)}`}>
          <img
            src={image}
            alt={name}
            onClick={play}
            style={{
              zIndex: '0', // Ensure the image is behind the button

            }}
          />
        </Link>
      

      </div>

     



    </div>

  );
}
