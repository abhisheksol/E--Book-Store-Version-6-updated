import { useState } from "react";
import "./books.css" //addbooks madun books cha data gatalo 
import Button from "react-bootstrap/esm/Button";
import { AiOutlineShopping } from 'react-icons/ai';
// redux
import { Link } from 'react-router-dom';
import { addToCart } from "../../add_to_cart/actions/action";
import { useSelector, useDispatch } from 'react-redux';

// redux --xxx--



export default function Book(props) {

  const mystate = useSelector((state) => state.cardData)
  console.warn("mystate", mystate);
  const dispatch = useDispatch()

  let { _id, name, price, author, description, available, image, download } = props.book;
  console.log('this is book.props=====>', props.book);
  return (
    <div className="bodys">

      <div className="cards" style={{ backgroundImage: 'url("")', backgroundColor: '#EDF4F2', position: 'relative' }}>
        <h1 style={{ color: "#31473A", backgroundColor: "#D5E5C2", padding: '5px', position: "absolute", borderRadius: '15px',paddingLeft:'15px',paddingRight:'30px',fontFamily:'t',fontWeight:'' }}>{name}</h1>

        <div style={{ height: '59px' }}></div>
        <button className="add_to_cart"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            zIndex: '1', // Ensure the button appears above the image
          }}
          onClick={() => dispatch(addToCart({ _id, name, price, author, description, available, image, download }))}
        >
          <AiOutlineShopping size={20} style={{ marginRight: '5px' }} /> Add
        </button>


        {/* <Link to="/details"> */}
        <Link to={`/details/${_id}?name=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&available=${encodeURIComponent(available)}&download=${encodeURIComponent(download)}`}>
          <img
            src={image}
            alt={name}
            style={{
              zIndex: '0', // Ensure the image is behind the button
              
            }}
          />
        </Link>
      </div>



      {/* <h1 style={{ color: "pink" }}>{name}</h1>
        <p style={{ color: "pink", fontWeight: 'bold' }}>Author: {author}</p>
        <div style={{ backgroundColor: "black", height: '1px' }}></div>

        <p style={{ color: "pink", fontWeight: 'bold' }}>Price: {price}</p>
        <div style={{ backgroundColor: "black", height: '1px' }}></div>

        <p style={{ color: "pink", fontWeight: 'bold' }}>Description: {description}</p>
        <div style={{ backgroundColor: "black", height: '1px' }}></div>

        <p style={{ color: "pink", fontWeight: 'bold' }}>Available: {available ? '✅' : '❌'}</p>
        <div style={{ backgroundColor: "black", height: '1px' }}></div>
        {
          price <= 0 ? <button className="download-button">
            <a href={download} target="_blank" rel="noreferrer">Download</a>
          </button> : <Button variant="warning">
            <Link to="/payment" style={{ color: 'black' }}>
              Buy
            </Link>
          </Button>
        } */}


    </div>

  );
}
