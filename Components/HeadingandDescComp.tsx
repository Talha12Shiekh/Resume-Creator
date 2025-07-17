import { Box, Typography, type TypographyVariant } from "@mui/material";


const HeadingandDescComp = ({ heading, desc,variant }:{ heading:string, desc:React.ReactNode,variant:TypographyVariant }) => {

    
  return (
    <Box>
      <Typography
        variant={variant}
        component="h2"
        sx={{mb:2}}
        className="poppins"
        fontWeight="bold"
        textAlign={"center"}
      >
        {heading}
      </Typography>
      <Typography
        textAlign="center"
        color="grey"
        className="poppins"
        variant="body1"
      >
        {desc}
      </Typography>
    </Box>
  );
};

export default HeadingandDescComp;
