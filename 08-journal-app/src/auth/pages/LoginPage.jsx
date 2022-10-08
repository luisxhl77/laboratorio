import { Grid, Typography, TextField, Button} from '@mui/material'
import {Google} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="correo" type="email" placeholder="example@gmail.com" fullWidth />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth />
        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
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
