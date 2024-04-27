//==================================== show books============================================
import axios from "axios"
import Book from "./book";
import { Link } from 'react-router-dom';
import "./books.css"
import { useState, useEffect } from "react";

// yata api cha url URl varible mada save kalo
// const URL = "http://localhost:5000/"
const URL = "https://nomulter.vercel.app/"

// ===========yata axios use kalo ===========
const fetchhandler = async () => {
    return axios.get(URL).then((res) => res.data)
}
//------------------------------function -------------------------------
export default function Books() {
    const [search_item, setsearch_item] = useState("")
    const [apidata, setapidata] = useState([])

    // api madun data apidata mada save kart ahe



    useEffect(() => {
        fetchhandler().then(data => setapidata(data.books))
    }, [])

    const filter = apidata.filter(book => {
        return book.name.toLowerCase().includes(search_item.toLowerCase())
        // working expilation down(last line)
    })

    console.log("this api book data is got==>", apidata);

    return (
        <div>

            <div style={{ display: 'flex', marginLeft: '25px' }}>
                <button style={buttonStyle}>
                    <Link to="/add" style={linkStyle}>Add Books</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/admin" style={linkStyle}>Edit Books</Link>
                </button>

            </div>
            {/* <h1>All books are here!!</h1> */}
            <div className="search-bar" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                <input placeholder="🔍 Search" style={{ padding: '8px', borderRadius: '25px', border: '1px solid #ccc', height: '30px', marginTop: '50px', marginRight: '25px' }}
                    value={search_item}
                    onChange={(e) => setsearch_item(e.target.value)}
                />
            </div>

            {  filter==false?<dotlottie-player src="https://lottie.host/f2a3eb0a-fb48-487a-861a-985b9b2035a5/VGyrK5RzJ3.json"
                    background="transparent"
                    speed="1"
                    loop autoplay></dotlottie-player> :null
                
            }
            <div className="bodys">

                {
                    filter.map((book, i) => (
                        <div key={i}>
                            <Book book={book} />
                            {/* he api book.js mada send karta ahe karta prataka book
                            aka template mada disava  */}
                        </div>

                    ))
                }
            </div></div>
    )


}
const buttonStyle = {
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

// const filter=apidata.filter(book=>{
//     return book.name.toLowerCase().includes(search_item.toLowerCase())
//
// })

// apidata =amla sagaya book cha data provide karta
// ata ami data var filter lavnar kutala data show karcha

// book.name.toLowerCase() hai amala sagaya book cha nav provide karta
// all_name .. ami include(search name) ja name incuded ahe ta cha dakava 

