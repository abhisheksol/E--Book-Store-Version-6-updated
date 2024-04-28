import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update_del() {
    const history = useNavigate();
    // addbooks madun form la copy past kalo
    let [name, setname] = useState("");
    let [author, setauthor] = useState("");
    let [price, setprice] = useState("");
    let [description, setdescription] = useState("");
    let [image, setimage] = useState(null);
    let [available, setavailable] = useState("");
    let [download, setdownload] = useState("");
    //-----------------------------------------

    const [updata_json_data, setupdata_json_data] = useState({});

    const update_id = useParams().id;
    // console.log("this is id I got:", update_id);

    // ------url
    useEffect(() => {
        // const URL = `http://localhost:5000/${update_id}`;
        const URL = `https://nomulter.vercel.app/${update_id}`;

        const fetch = async () => {
            return await axios.get(URL).then((res) => setupdata_json_data(res.data));
        };

        fetch();
    }, [update_id]);

    const book = updata_json_data.gotbook;

    // console.log("this is update json data :=>", book);

    // Adi cha data form mada display karna sathi before pressing update btn
    // Example name: "adi cha name tu dilala"
    // Example author: "adi cha author tu dilala"

    useEffect(() => {
        if (book) {
            setname(book.name);
            setauthor(book.author);
            setprice(book.price);
            setdescription(book.description);
            setimage(book.image);
            setavailable(book.available);
            setdownload(book.download);
        }
    }, [book]);

    const update_send_data_to_api = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("author", author);
        formData.append("description", description);
        formData.append("available", available);
        formData.append("file", image);
        formData.append("download", download);

        await axios.put(`https://nomulter.vercel.app/${update_id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    function setapi(e) {
        e.preventDefault();
        update_send_data_to_api().then(() => history("/books"));
    }

    return (
        <div className="App">
            <h1 style={{color:'white', margin:'35px'}}>welcome to book Update Page</h1>
            <h2>{ }</h2>

            {/* { book && ( form..)} hai asa lihalya karna he api la fetch karna adi run hot hota tya muya empty form yata hota */}

            {/* ==============addbooks madun form la copy past kalo ================== */}
            {book && (
                
                <form onSubmit={setapi} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                    maxWidth: '400px',
                    margin: 'auto'
                }}>
                    <label style={{ marginBottom: '10px' }}>Name:</label>
                    <input 
                        value={name} 
                        onChange={(e) => setname(e.target.value)} 
                        style={{ 
                            padding: '8px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }} 
                    /><br />
                
                    <label style={{ marginBottom: '10px' }}>Author:</label>
                    <input 
                        value={author} 
                        onChange={(e) => setauthor(e.target.value)} 
                        style={{ 
                            padding: '8px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }} 
                    /><br />
                
                    <label style={{ marginBottom: '10px' }}>Price:</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setprice(e.target.value)} 
                        style={{ 
                            padding: '8px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }} 
                    /><br />
                
                    <label style={{ marginBottom: '10px' }}>Description:</label>
                    <input 
                        value={description} 
                        onChange={(e) => setdescription(e.target.value)} 
                        style={{ 
                            padding: '8px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }} 
                    /><br />
                
                    <label style={{ marginBottom: '10px' }}>Image:</label>
                    <input 
                        value={image}
                        onChange={(e) => setimage(e.target.value)} 
                        style={{ 
                            marginBottom: '15px'
                        }} 
                    />
                
                    <label style={{ marginBottom: '10px' }}>Download:</label>
                    <input 
                        value={download} 
                        onChange={(e) => setdownload(e.target.value)} 
                        style={{ 
                            padding: '8px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }} 
                    /><br />
                
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setavailable(e.target.checked)}
                        style={{ marginBottom: '15px' }}
                    /> <span style={{ marginBottom: '15px' }}>Availability of Book</span><br />
                
                    <button 
                        type="submit" 
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        Update Book
                    </button>
                </form>
                
            )}
            <p></p>
        </div>
    )
}
