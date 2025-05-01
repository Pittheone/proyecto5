import { Container, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

const DrawingDetail = () => {
  const location = useLocation();
  const drawing = location.state?.drawing;
  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',       // apila verticalmente
      alignItems: 'center',          // centra horizontalmente
      justifyContent: 'center',      // centra verticalmente
      minHeight: '80vh',             // opcional: fuerza altura para centrar vertical
      padding: '30px'
    }}
  >
      <Typography variant="h4" gutterBottom>
       Nombre del Artista: {drawing.artist_name}
      </Typography>
      <img 
              src={drawing.url}
              alt={drawing.artist_name || 'Waifu'}
              style={{ width: '50%', borderRadius: '8px' }}
            />
    </Container>
  )
}

export default DrawingDetail