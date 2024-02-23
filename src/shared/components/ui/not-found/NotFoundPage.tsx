import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { modulePrivateRoutes } from "@/domain/entities";

export const NotFoundPage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", paddingTop: "100px" }}>
      <Typography variant="h1" component="h2" gutterBottom>
        Error 404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        La página que estás buscando no se encuentra.
      </Typography>
      <Link to={modulePrivateRoutes.homePage} color="primary">
        Volver a la página de inicio
      </Link>
    </Container>
  );
};
