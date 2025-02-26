import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
 

export default function InputWithIcon({ value, onChange }) {
 

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField 
          id="input-with-sx" 
          label="Full Name" 
          variant="standard"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
    </Box>
  );
}
