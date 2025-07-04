import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSignIn } from '../../store/auth';
import type { AppDispatch, RootState } from '../../store/store';

import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (status === 'authenticated') {
      console.log('Entrooooo');
      navigate('/', { replace: true });
    }
  }, [status, navigate]);

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <Grid>
        <Button
          variant="contained"
          fullWidth
          onClick={onGoogleSignIn}
          startIcon={<GoogleIcon />}
        >
          Login
        </Button>
      </Grid>
    </AuthLayout>
  );
};
