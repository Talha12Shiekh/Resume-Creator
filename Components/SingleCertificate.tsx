import { Grid, Box } from "@mui/material";
import { TEMPLATES } from "../Constants";

export interface CertificateTemplate {
  img: string;
  template: string;
  key: number;
  positions: {
    hpositions: { right: number; left: number; top: string };
    detpositions: { top: string };
    datepositions: { bottom: string; left: string };
    sigpositions: { bottom: string; right: string };
  };
}

interface SingleCertificatePropsTypes {
  index: number;
  img: string;
  activeindex: number;
  setactiveindex: React.Dispatch<React.SetStateAction<number>>;
  setselectedtemplate: React.Dispatch<
    React.SetStateAction<CertificateTemplate>
  >;
}

const SingleCertificate = ({
  index,
  img,
  activeindex,
  setactiveindex,
  setselectedtemplate,
}: SingleCertificatePropsTypes) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      size={{ xs: 6, sm: 6, md: 3 }}
    >
      <Box
        onClick={() => {
          setactiveindex(index);
          setselectedtemplate(TEMPLATES[index]);
        }}
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
          border: index == activeindex ? "3px solid blue" : "",
        }}
      >
        <img
          src={img}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="Loading..."
        />
      </Box>
    </Grid>
  );
};

export default SingleCertificate;
