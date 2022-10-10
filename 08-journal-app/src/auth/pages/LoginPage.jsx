import { Grid, Typography, TextField, Button} from '@mui/material'
import {Google} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange, onResetForm,} = useForm({
    email: 'luisxhl7@gmail.com',
    password: 'luchocarlos123777'
  })

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password });
  }

  const onGoogleLogin = () => {
    dispatch(checkingAuthentication());
  }
  const onGoogleSingnIn = () => {
    dispatch(startGoogleSignIn());
  }


  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit }>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="correo" type="email" placeholder="example@gmail.com" fullWidth name="email"  value={email} onChange={ onInputChange }/>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth name="password"  value={password} onChange={ onInputChange }/>
        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button type='submit' variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth onClick={ onGoogleSingnIn }>
              <Google/>
              <Typography sx={{ ml: 1}}> Google </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end' >
          <Link color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
