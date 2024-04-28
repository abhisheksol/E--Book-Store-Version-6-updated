import axios from "axios";
import { useEffect, useState } from "react";
import "./books.css" //addbooks madun books cha data gatalo 
import Button from "react-bootstrap/esm/Button";

import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
    let [admin_data, setadmin_data] = useState([]);

   let history=useNavigate()
    const get = async () => {
        // return await axios.get("http://localhost:5000/").then((res) => res.data);
        return await axios.get("https://nomulter.vercel.app/").then((res) => res.data);

    };

// delete book functionality-----------------------------------------------------------------------

    const delete1=async(_id)=>{
        // await axios.delete(`http://localhost:5000/${_id}`)
        await axios.delete(`https://nomulter.vercel.app/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/admin"))
        window.location.reload(true)

    }


    useEffect(() => {

        get().then(data => setadmin_data(data.books))

    }, [])


    // console.log("this is setdata coming....", admin_data); // for test purpose what data is coming



    return (
        <div className="App">
            <h1 style={{color:'white',margin:'15px'}}>Books Updata & Delete Page</h1>
            <p style={{color:'white',margin:'15px'}} >(Plz dont delete all books)</p>
            <div className="bodys">
            {admin_data.map((data, i) => (
                <div className="cards" style={{backgroundColor:'rgb(94,61,51)'}}>
                    
                    <img
            src={data.image}
            alt={data.name}
            style={{
              zIndex: '0', // Ensure the image is behind the button
              
            }}
                    />
                    
                    <h1 style={{ color: "pink", fontWeight: 'bold' }}>{data.name}</h1>
                    <p style={{ color: "pink", fontWeight: 'bold' }}>Author: {data.author}</p>
                    <p style={{ color: "pink", fontWeight: 'bold' }}>Price: {data.price}</p>
                    <p style={{ color: "pink", fontWeight: 'bold' }}>Description: {data.description}</p>
                    <p style={{ color: "pink", fontWeight: 'bold' }}>Available: {data.available ? 'Yes' : 'No'}</p>
                    
            <Link to={`/${data._id}`}>
            <Button variant="success" style={{margin:'5px'}}>Update</Button>
            </Link>
            
            <Button variant="danger" onClick={() => delete1(data._id)}>Delete</Button>

                </div>
            ))
            }</div>
        </div>
    );
}
