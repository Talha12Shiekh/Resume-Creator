import { Container, Grid, Box, Typography } from "@mui/material";
import HeadingandDescComp from "../Components/HeadingandDescComp";
import useResponsiveness from "../Hooks/useResponsiveness";
import cert6 from "/cert6.webp";
import { TEMPLATES } from "../Constants";
import { useState } from "react";

const Templates = () => {
  const matches = useResponsiveness("sm", "down");
  const [active, setactive] = useState(0);

  return (
    <Container component="main" sx={{ pt: 15 }}>
      <HeadingandDescComp
        heading="Select a Template to start creating your certificate"
        desc={
          <>
            Fill in the text form below with all the details & download. <br />
            The certificate will be in PDF format & printable.
          </>
        }
        variant={matches ? "h5" : "h4"}
      />

      <Box
        sx={{
          p: 5,
          mt: 2,
          bgcolor: "rgb(249 250 251)",
          border: "0.5px solid rgb(229 231 235)",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2}>
          {TEMPLATES.map((img, index) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Box
                onClick={() => setactive(index)}
                sx={{
                  width: 200,
                  height: 150,
                  bgcolor: "red",
                  m: 2,
                  boxShadow: "2px 2px 10px 2px grey",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid blue",
                  },
                  transition: "all 0.5s ease",
                  border: index == active ? "3px solid blue" : "",
                }}
              >
                <img
                  src={img}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Loading..."
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Templates;
