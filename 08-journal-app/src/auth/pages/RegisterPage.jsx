import { Grid, Typography, TextField, Button} from '@mui/material'
import {Google} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="nombre completo" type="text" placeholder="luis carlos hernandez ..." fullWidth />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="correo" type="email" placeholder="example@gmail.com" fullWidth />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth />
        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end' >
          <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
          <Link color='inherit' to='/auth/login'>
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
