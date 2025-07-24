import { Card, CardMedia, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CertificateViewModel from "./CertificateViewModel";
import { useState } from "react";
import CertMenu from "./CertMenu";
import type { UserCertificateType } from "../Screens/Dashboard";

interface CertificateCardProps {
  url: string;
  id: string;
  usercertificates: UserCertificateType[];
  setusercertificates: React.Dispatch<
    React.SetStateAction<UserCertificateType[]>
  >;
}

export default function CertificateCard({
  url,
  id,
  usercertificates,
  setusercertificates,
}: CertificateCardProps) {
  const [showcert, setshowcert] = useState(false);

  function toggleOpen() {
    setshowcert((p) => !p);
  }

  function dltcertificate(dltid: string) {
    let copyofcerts = [...usercertificates];
    const dcertificates = copyofcerts.filter((c) => c._id != dltid);
    if (dcertificates.length > 0) {
      setusercertificates(dcertificates);
    }
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
        <Box sx={{ position: "relative" }}>
          <CertMenu url={url} id={id} dltcertificate={dltcertificate} />
          <CardActionArea onClick={toggleOpen}>
            <Box sx={{ p: 2 }}>
              <CardMedia
                component="img"
                image={url}
                alt="Certificate Loading..."
              />
            </Box>
          </CardActionArea>
        </Box>
      </Card>
    </>
  );
}
