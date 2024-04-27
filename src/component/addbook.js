import React, { useState } from "react";
import axios from "axios";
import { Form, Button, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState(false); // Initialize as false
  const [download, setDownload] = useState("");
  const [colour, setcolour] = useState("grey")
  const history = useNavigate();

  const add_to_page = async () => {
    await axios
      .post("https://nomulter.vercel.app/", {
        name: name,
        author: author,
        price: parseFloat(price),
        description: description,
        image: image,
        available: available,
        download: download,
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add_to_page().then(() => history("/books"));
    console.log({ name, author, price, description, image, available, download });
  };
  //############################################################--upload --############################################################################################

  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', 'be500228e4732c37b70f817f79fc89cb');

    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      // console.error('Error uploading file:', error);
    }
  };
  //################################################################--end--########################################################################################

  return (
    <div>
      <div style={{
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
        <h1> Add Book </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          {/* ##############################################################--Link Geneator--##########################################################################################
 */}
          <div style={{ backgroundColor: 'rgb(38,155,199)' }}>
            <FormLabel style={{ fontFamily: 't', fontWeight: '600' }}># # Upload File Here to Generate Url🌐 And Paste it in Image Url 🔗🔗</FormLabel>


            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />


              <div onClick={() => {
                uploadFile();
                setcolour('green')
              }}
                style={{
                  cursor: 'pointer',
                  backgroundColor: colour,
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                  margin: '40px',


                }}>Generate URL For Image</div>

              {response && (
                <div>
                  <p>Image uploaded successfully!</p>
                  <img src={response.data.url} style={{ height: "50px" }} alt="Uploaded" />
                  <p> URL👉 {response.data.url}</p>
                </div>
              )}
            </Form.Group>
          </div>
          {/* ########################################################################################################################################################
 */}

          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDownload">
            <Form.Label>Download URL</Form.Label>
            <Form.Control
              type="text"
              value={download}
              onChange={(e) => setDownload(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAvailable">
            <Form.Check
              type="checkbox"
              label="Availability of book"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form>
      </div></div>
  );
}



// import React, { Component } from 'react';
// import axios from 'axios';

// class AddBookForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       price: '',
//       author: '',
//       description: '',
//       available: true,
//       image: null,
//       download: '',
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     this.setState({
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
//     });
//   }

//   handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', this.state.name);
//     formData.append('price', this.state.price);
//     formData.append('author', this.state.author);
//     formData.append('description', this.state.description);
//     formData.append('available', this.state.available);
//     formData.append('file', this.state.image);
//     formData.append('download', this.state.download);

//     try {
//       const response = await axios.post('http://localhost:5000/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       // Handle success, e.g., show a success message or redirect
//     } catch (error) {
//       console.error(error);
//       // Handle error, e.g., show an error message
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Add a New Book</h2>
//         <form onSubmit={this.handleFormSubmit}>
//           <div>
//             <label>Name:
//               <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Price:
//               <input type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Author:
//               <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Description:
//               <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Available:
//               <input type="checkbox" name="available" checked={this.state.available} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Image:
//               <input type="file" name="image" onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <label>Download Link:
//               <input type="text" name="download" value={this.state.download} onChange={this.handleInputChange} />
//             </label>
//           </div>
//           <div>
//             <button type="submit">Add Book</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddBookForm;
