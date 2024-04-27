import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Admin from './admin.png'
import Footer from '../footer';
function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const check_password = (e) => {
        e.preventDefault();
      
        if (name === 'Abhishek' && password === 'abhishek@5141') {
            setLoggedIn(true);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={check_password} style={{margin:'50px',justifyContent:'center',alignItems:'center'}} className="login-form">
                <h2 style={{color:'Black',fontWeight:'bold',fontSize:'35px'}}>Login</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username =>Abhishek"
                        
                        style={{marginTop:'80px',marginBottom:'30px',width:'250px'}}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />  
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password  =>abhishek@5141"
                        value={password}
                        style={{marginTop:'80px',marginBottom:'30px',width:'250px'}}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    {!loggedIn ? (
                        <>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        <p style={{color:'Red'}}> Wrong password type correctly given in placeholder</p></>
                    ) : (
                        <Link to="/admins" className="btn btn-success">
                            Continue to Admin
                        </Link>
                    )}
                </div>
            </form>
            <div className="about-image" style={{}}>
                <p style={{color:'black'}}>This is how admin page Look if u logged in</p>
          <img src={Admin} alt="Abhishek Solapure" />
        </div>
       
        </div>
    );
}

export default Login;
