import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

export default ({children}) => (
  <Grid containter>
    <CssBaseline />
    {children}
  </Grid>
);