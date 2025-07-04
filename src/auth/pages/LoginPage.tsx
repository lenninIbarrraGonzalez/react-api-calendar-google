import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <Grid>
        <Button variant="contained" fullWidth startIcon={<GoogleIcon />}>
          Login
        </Button>
      </Grid>
    </AuthLayout>
  );
};
