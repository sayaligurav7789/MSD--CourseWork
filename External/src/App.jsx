import { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!!")
  };

  return (
    
    <div class = "card">
      <h2>Registartion Form</h2>
      <form onSubmit = {handleOnSubmit}>
        <input 
        type = "name"
        name = "name"
        placeholder= "Enter Name"
        onChange = {(e) => {
          setName(e.target.value);
        }}
        required
        /><br/><br/>

        <input 
        type = "email"
        name = "email"
        placeholder= "Enter Email"
        onChange = {(e) => {
          setEmail(e.target.value);
        }}
        required
        /><br/><br/>

        <input 
        type = "password"
        name = "password"
        placeholder= "Enter password"
        onChange = {(e) => {
          setPassword(e.target.value);
        }}
        required
        /><br/><br/>

        <button type = "submit">Register</button>
      </form>
    </div>
  )
}

export default App
