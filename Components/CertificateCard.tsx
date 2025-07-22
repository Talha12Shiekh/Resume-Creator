import { Card, CardMedia, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CertificateViewModel from "./CertificateViewModel";
import { useState } from "react";

export default function CertificateCard({ url }: { url: string }) {
  const [showcert,setshowcert] = useState(false);

  function toggleOpen(){
    setshowcert(p => !p);
  }

  return (
    <>
      <CertificateViewModel
        open={showcert}
        handleClose={toggleOpen}
        certificateimg={url}
      />
      <Card
        sx={{
          maxWidth: 345,
          width: 300,
          cursor: "pointer",
          border: "1px solid rgb(229 231 235)",
        }}
      >
        <CardActionArea onClick={toggleOpen}>
          <Box sx={{ p: 2 }}>
            <CardMedia
              component="img"
              image={url}
              alt="Certificate Loading..."
            />
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
