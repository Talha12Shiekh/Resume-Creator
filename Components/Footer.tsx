import {
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FOOTER_COLOR, SOCIAL_ICONS } from "../Constants";

const Footer = () => {
  return (
    <Box component="footer" bgcolor={FOOTER_COLOR} sx={{ mt: 2 }}>
      <Container>
        <Toolbar sx={{ py: 3 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="caption" className="poppins" color="grey">
                Copyright © {new Date().getFullYear()} _TKCertFactory
              </Typography>
              <Typography color="white" variant="caption" className="poppins">
                Terms and Conditions Privacy Policy
              </Typography>
            </Box>
            <Box>
              {SOCIAL_ICONS.map((Icon, index) => {
                return (
                  <IconButton
                    key={index}
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ color: "whitesmoke", mr: 1 }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
