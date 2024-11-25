import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

export const Home = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState([]);
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');

    const handleLogout = () => {
        Cookies.remove('jwtToken');
        navigate('/Login');
    };

    const handleAddPassword = () => {
        if (!website || !username || !password) {
            alert('Please fill in all fields');
            return;
        }
        setPasswords([...passwords, { website, username, password }]);
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className='m-cont'>
            <h2>Password Manager</h2>
            <div className='addPassForm'>
                <div className='form'>
                    <h3>Add New Password</h3>
                    <input 
                        type='text' 
                        placeholder='Enter Your Website' 
                        value={website} 
                        onChange={(e) => setWebsite(e.target.value)} 
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Your Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        type='password' 
                        placeholder='Enter Your Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className='btn btn-success' onClick={handleAddPassword}>
                        Add
                    </button>
                </div>
            </div>

            <div className='addUsersDetails'>
                <h2>Your Password</h2>
                <input 
                    type='search' 
                    placeholder='Search' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <hr />
                <div id='details'>
                    {passwords
                        .filter((p) => p.website.includes(search) || p.username.includes(search))
                        .map((p, i) => (
                            <div key={i}>
                                <p>Website: {p.website}</p>
                                <p>Username: {p.username}</p>
                                <p>Password: {p.password}</p>
                            </div>
                        ))}
                </div>
            </div>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </div>
    );
};

export default Home;
