import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';

export default function Password({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setError(newValue.length < 6);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LockIcon sx={{ color: 'white', fontSize: 25, marginTop: '20px' }} />

      <FormControl
        sx={{
          width: '28.3ch',
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:after": { borderBottomColor: "white" },
        }}
        variant="standard"
        error={error}
      >
        <InputLabel htmlFor="standard-adornment-password" sx={{ color: 'white' }}>
          Password
        </InputLabel>

        <Input
          sx={{ color: 'white' }}
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          required
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ color: 'white' }}
                aria-label={showPassword ? 'hide the password' : 'display the password'}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {error && <FormHelperText sx={{ color: 'white' }}>Minimum 6 characters required</FormHelperText>}
      </FormControl>
    </Box>
  );
}
