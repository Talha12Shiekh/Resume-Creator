import { Container, Grid, Box } from "@mui/material";
import HeadingandDescComp from "../Components/HeadingandDescComp";
import useResponsiveness from "../Hooks/useResponsiveness";
import { TEMPLATES } from "../Constants";
import SingleCertificate from "../Components/SingleCertificate";
import TextFieldsComponent from "../Components/TextFieldsComponent";
import Footer from "../Components/Footer";
import { useState } from "react";

const Templates = () => {
  const matches = useResponsiveness("sm", "down");
  const [activeindex, setactiveindex] = useState(0);

  return (
    <>
      <Container component="main" sx={{ pt: 15 }}>
        <HeadingandDescComp
          heading="Select a Template to start creating your certificate"
          desc={
            <>
              Fill in the text form below with all the details & download.{" "}
              <br />
              The certificate will be in PDF format & printable.
            </>
          }
          variant={matches ? "h5" : "h4"}
        />

        {/* Templates section from which the user can choose the template of certificate */}
        <Box
          sx={{
            py: 5,
            mt: 2,
            bgcolor: "rgb(249 250 251)",
            border: "0.5px solid rgb(229 231 235)",
            borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            {TEMPLATES.map(({ img, key }, index) => (
              <SingleCertificate
                key={key}
                img={img}
                activeindex={activeindex}
                setactiveindex={setactiveindex}
                index={index}
              />
            ))}
          </Grid>

          {/* Text fields component section ( where user can enter information for the certificate ) */}
          <Container component="section">
            <TextFieldsComponent />
          </Container>
        </Box>
      </Container>
      <Footer />
      {/* Footer section */}
    </>
  );
};

export default Templates;
