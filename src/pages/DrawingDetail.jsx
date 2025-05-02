import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const DrawingDetail = () => {
  const location = useLocation();
  const drawing = location.state?.drawing;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (drawing) {
      // Simula un pequeño retraso de carga
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // puedes ajustar el tiempo o quitarlo si no lo necesitas

      return () => clearTimeout(timer);
    }
  }, [drawing]);

  if (isLoading) {
    return (
      <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Nombre del Artista: {drawing.artist_name}
      </Typography>
      <img
        src={drawing.url}
        alt={drawing.artist_name || 'Waifu'}
        style={{ width: '50%', borderRadius: '20px' }}
      />
    </Container>
  );
};

export default DrawingDetail;
