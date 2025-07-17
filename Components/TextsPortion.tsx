import { Container, Typography, Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { TEXTS_DATA } from "../Constants";
import useResponsiveness from "../Hooks/useResponsiveness";

const SingleTextComponent = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string;
}) => {
    const matches = useResponsiveness("sm","down");

  return (
    <Box
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
        },
        transition: "all 0.3s ease",
      }}
      textAlign="center"
      my={5}
    >
      <Typography
        variant={matches ? "h6" : "h4"}
        component="h4"
        className="poppins"
        sx={{ mb: 2 }}
      >
        <DoneIcon sx={{ color: "blue", mr: 1 }} />
        {heading}
      </Typography>
      <Typography variant="body1" className="poppins">
        {desc}
      </Typography>
    </Box>
  );
};

const TextsPortion = () => {
  return (
    <Container>
      {TEXTS_DATA.map(({ key, heading, desc }) => {
        return <SingleTextComponent key={key} heading={heading} desc={desc} />;
      })}
    </Container>
  );
};

export default TextsPortion;
