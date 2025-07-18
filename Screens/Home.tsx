import { Container, Typography, Button, Box } from "@mui/material";
// import FrontCertificateImg from "/Front-certificate.png";
import HeadingAndDescComp from "../Components/HeadingandDescComp";
import { useNavigate } from "react-router";

const Home = () => {

     let navigate = useNavigate();

  return (
    <Container
        component="main"
        sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height:"100vh",
        pt: 15,
        flexDirection: "column",
      }}
    >
      <HeadingAndDescComp
        heading="Generate Certificate for Free"
        desc={
          <>
            Build, edit & customize certificates with 100+ free templates using
            our certificate creator. <br /> You can download & print in PDF
            format to award your students.
          </>
        }
        variant="h2"
      />
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <Button onClick={() => navigate("/templates")} variant="contained" sx={{ px: 4, py: 2 }}>
          <Typography
            textTransform="capitalize"
            className="poppins"
            variant="h6"
          >
            Generate Your Certificate
          </Typography>
        </Button>
      </Box>
      {/* <Box>
        <img className="frontcert" src={FrontCertificateImg} />
      </Box> */}
    </Container>
  );
};

export default Home;
