import { Grid, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export const AuthLayout = ({
  children,
  title = '',
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        className="box-shadow"
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
