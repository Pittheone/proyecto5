import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DrawingList() {
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_DRAIWINGS_API_URL
  );

  if (isLoading) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Typography color="error" variant="h6">
          Error: {error.message}
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ padding: "30px" }}
    >
      {data?.results.map((waifu, id) => (
        <Grid key={id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              width: { xs: 200, sm: 250, md: 400 },
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardActionArea
              component={Link}
              to={`/DrawingList/${id}`}
              state={{ drawing: waifu }}
            >
              <Box
                sx={{
                  height: { xs: 200, sm: 250, md: 300 },
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={waifu.url}
                  alt={`waifu-${id}`}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
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
