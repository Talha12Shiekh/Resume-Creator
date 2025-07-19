import { Box, Container, Typography } from "@mui/material";
import { CertificateTemplate } from "./SingleCertificate";
import { InformationType } from "../Screens/Templates";

const CertInformation = ({
  selectedtemplate,
  information,
  ref,
}: {
  selectedtemplate: CertificateTemplate;
  information: InformationType;
  ref: React.Ref<HTMLDivElement>;
}) => {
  const { positions, template } = selectedtemplate;

  const { hpositions, detpositions, datepositions, sigpositions } = positions;

  const { name, date, signature, details } = information;

  return (
    <Box  ref={ref}>
      <Container
        sx={{
          position: "relative",
          width: "70%",
          height: 500,
          my: 2,
        }}
        component="section"
      >
        <img className="frontcert" src={template} alt="Loading..." />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography
            variant="h2"
            className="cursive"
            textAlign={"center"}
            style={{
              position: "absolute",
              ...hpositions,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            className="poppins"
            textAlign={"center"}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...detpositions,
            }}
          >
            <Box sx={{ width: "70%" }}>{details}</Box>
          </Typography>
          <Typography
            variant="body1"
            className="dmserif"
            textAlign={"center"}
            style={{
              position: "absolute",
              ...datepositions,
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="body1"
            className="dmserif"
            textAlign={"center"}
            style={{
              position: "absolute",
              ...sigpositions,
            }}
          >
            {signature}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CertInformation;
