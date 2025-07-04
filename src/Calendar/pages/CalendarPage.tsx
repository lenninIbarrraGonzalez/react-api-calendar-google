import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export const CalendarPage = () => {
  const { status, email, displayName } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <Grid>
      <Typography>Este es mi calendario</Typography>
      <Typography>{status}</Typography>
      <Typography>{email}</Typography>
      <Typography>{displayName}</Typography>
    </Grid>
  );
};
