import { Box, Typography } from "@mui/material";
import type { CertificateTemplate } from "./SingleCertificate";
import type { InformationType } from "../Screens/Templates";

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
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          width: "70%",
          // width: "100%",
          // height: 500,
          my: 2,
        }}
        ref={ref}
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
            fontSize="clamp(20px, 5vw, 60px)"
            className="cursive"
            textAlign={"center"}
            style={{
              position: "absolute",
              ...hpositions
              
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            className="poppins"
            fontSize="clamp(5px, 1vw, 15px)"
            textAlign={"center"}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:"100%",
              ...detpositions,
            }}
          >
            <Box sx={{ width: "70%" }}>{details}</Box>
          </Typography>
          <Typography
            className="dmserif"
            fontSize="clamp(6px,1.3vw,20px)"
            style={{
              position: "absolute",
              ...datepositions,
            }}
          >
            {date}
          </Typography>
          <Typography
            fontSize="clamp(4px,1.3vw,15px)"
            className="dmserif"
            style={{
              position: "absolute",
              ...sigpositions,
            }}
          >
            {signature}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CertInformation;
