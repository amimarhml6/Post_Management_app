import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Gmail({ value, onChange }) {
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setError(!validateEmail(newValue)); // Si l'email est invalide, on active l'erreur
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, m: 1 }}>
      <i className='bx bxl-gmail' style={{ color: 'white', fontSize: '24px' }}></i>

      <TextField 
        id="email-input" 
        label="Email"
        variant="standard"
        type="email"
        required
        value={value}
        onChange={handleChange}
        error={error}
        helperText={error ? "Invalid email format" : ""}
        InputLabelProps={{ style: { color: 'white' } }} 
        sx={{
          width: '28.3ch',
          input: { color: 'white' }, 
          '& .MuiInput-underline:before': { borderBottomColor: 'white' }, 
          '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' }, 
          '& .MuiInput-underline:after': { borderBottomColor: 'white' }
        }}
      />
    </Box>
  );
}
