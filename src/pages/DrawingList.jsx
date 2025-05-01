
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Typography,
    Box
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  
  const API_URL = 'https://nekos.best/api/v2/neko?amount=3';
  
  export default function DrawingList() {
    const [waifus, setWaifus] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setWaifus(data.results || []))
        .catch(console.error) //guardar en un estado? usar variable error? En caso de un error se puede mostrar un mensaje al usuario con color? usar Alert?
        .finally(() => setIsLoading(false));
    }, []);
  
    if (isLoading) {
      return (
        <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <CircularProgress />
        </Grid>
      );
    }
  
    return (
      <Grid container spacing={3} justifyContent="center" sx={{ padding: '30px' }}>
        {waifus.map((waifu, id) => (
          <Grid key={id}>
            <Card
              sx={{
                width: 400,
                borderRadius: '16px', // Bordes redondeados
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
                transition: 'transform 0.3s ease', // Efecto de transición para hover
                '&:hover': {
                  transform: 'scale(1.05)', // Efecto de agrandamiento al pasar el cursor
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={`/DrawingList/${id}`}
                state={{ drawing: waifu }}
              >
                <Box sx={{ height: 300, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={waifu.url}
                    alt={`waifu-${id}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6">
                    {waifu.artist_name || `Waifu #${id + 1}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  
