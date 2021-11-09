import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import Service from "../Service/Service";
import whitening from "../../../images/whitening.png";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.",
    img: fluoride
  },

  {
    name: "Cavity Filling",
    description:
      "During a filling, your dentist fills these holes with a substance, such as amalgam or composite. While this is a simple, routine procedure, it leaves many people with sensitive teeth afterward.",
    img: cavity
  },

  {
    name: "Teeth Whitening",
    description:
      "Teeth whitening done by your dentist can get teeth brighter faster. The bleaching solution is usually much stronger than at-home kits.",
    img: whitening
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
