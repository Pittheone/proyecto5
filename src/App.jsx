import { Container, Typography } from "@mui/material"


function App() {
  return (
    <>
    <Container>
      <Typography variant="h3" component="h1" gutterBottom sx={{mt: 10}}>
        Bienvenido a la galería de dibujos
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '2rem' }}>
          Aquí encontrarás una selección de ilustraciones generadas desde la API de nekos.best.
          Haz clic en cualquiera de ellas para ver más detalles sobre el artista y la obra.
        </Typography>
    </Container>
    </>

  )
}

export default App
