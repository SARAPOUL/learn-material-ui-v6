import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Checkbox, Divider, FormControlLabel, Link, SvgIcon, Typography, useColorScheme, Select, MenuItem } from '@mui/material';
import AppTheme from './AppTheme';
import ColorScheSelectIcon from './ColorScheSelectIcon';

function App() {
  return (
    <AppTheme>
      <div className='fixed top-[1rem] right-[1rem]'>
        <ColorScheSelectIcon />
      </div>
      <Box sx={(theme) => ({
        maxWidth: '400px',
        padding: "2rem",
        margin: 'auto',
        marginTop: '10vh',
        border: '1px solid #eee',
        borderColor: theme.vars.palette.grey[300],
        borderRadius: `calc(${theme.vars.shape.borderRadius} * 2)`,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.vars.palette.background.paper,
        ...theme.applyStyles("dark", {
          borderColor: theme.vars.palette.grey[700],
        }),
        [theme.breakpoints.down('sm')]: {
          backgroundColorL: 'none',
          boxShadow: 'none',
          border: 'none',
        }
      })}>
        <Stack spacing={3} useFlexGap>
          <CssBaseline />
          <Typography
            variant='h1'
            sx={{ fontSize: '2rem', fontWeight: '500' }}
          >
            Sign In
          </Typography>
          <TextField
            variant='outlined'
            label="Email"
            type="email"
            placeholder='Enter your email'
            fullWidth
            autoFocus
            id="email"
            name="email"
            autoComplete='email'
            required
          />

          <TextField
            variant='outlined'
            label="Password"
            type="password"
            placeholder='Enter your password"'
            fullWidth
            autoFocus
            id="password"
            name="password"
            autoComplete='password'
            required
          />
          <FormControlLabel
            control={<Checkbox value="remember" color='primary' />}
            label="Remember me"
            sx={{
              marginLeft: "12px",
              "& .MuiFormControlLabel-label": { userSelect: 'none' }
            }}
          />
          <Button
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>
          <Typography
            component="div"
            variant="body2"
            align='center'>
            Do not have an account? <Link href="#">Sign Up</Link>
          </Typography>
          <Divider> or</Divider>
          <Button
            startIcon={<GoogleIcon />}
            variant="outlined"
            fullWidth
          >
            Sign In with Google
          </Button>
          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            fullWidth
          >
            Sign In with Facebook
          </Button>
        </Stack>
      </Box>
    </AppTheme >
  )
    ;
}

function GoogleIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-3 0 262 262" preserveAspectRatio="xMidYMid">
        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
      </svg>
    </SvgIcon>
  );
}

function FacebookIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16" fill="none">
        <path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" />
        <path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" />
      </svg>
    </SvgIcon>
  )
}
export default App;
