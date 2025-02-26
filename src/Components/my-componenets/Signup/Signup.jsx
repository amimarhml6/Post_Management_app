import { useState } from 'react';
import './Signup.css';
import Password from '../TextField/Password';
import Gmail from '../TextField/Gmail';
import Name from '../TextField/FullName';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [emailValid, setEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    if (field === "email") {
      setEmailValid(validateEmail(value)); 
    }
  };

  const isFormValid =
    formData.fullName.trim() !== '' &&
    emailValid &&
    formData.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si l'email existe déjà
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      setErrorMessage("This email is already registered. Please use another one or go to login");
      return;
    }

    // Ajouter le nouvel utilisateur
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirection vers la page de connexion
    navigate('/login');
  };

  return (
    <div className="SignInterface">
      <h1 style={{ color: "white" }}>Sign Up</h1>
      <div className="Sign-blg">
        <form className='forms-Sign' onSubmit={handleSubmit}>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="forS">
            <Name value={formData.fullName} onChange={(val) => handleChange('fullName', val)} />
            <Gmail value={formData.email} onChange={(val) => handleChange('email', val)} />
            <Password value={formData.password} onChange={(val) => handleChange('password', val)} />
          </div>

          <p className='p-Sign'>
            You have an account? <Link to='/login' className='Sign-up' style={{ color: "red" }}>Login</Link>
          </p>

          

          <button type="submit" className='Sign-Submit' disabled={!isFormValid}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
