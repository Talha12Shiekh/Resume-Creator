import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CertCard from "../Components/CertificateCard";

export interface UserCertificateType {
  url: string;
  _id: string;
}


const Dashboard = () => {
  const [usercertificates, setusercertificates] = useState<
    UserCertificateType[]
  >([]);

  async function fetchUserCertificates() {
    const response = await fetch(
      `http://localhost:3000/api/certificates/getcertificates`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const json = await response.json();
    setusercertificates(json.data);
  }

  useEffect(() => {
    fetchUserCertificates();
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "rgb(249 250 251)",
          py: 15,
        }}
      >
        {usercertificates.length > 0 ? (
          <Grid container spacing={5}>
            {usercertificates.map(({ url, _id }) => {
              return (
                <Grid
                  key={_id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}
                >
                  <CertCard usercertificates={usercertificates} setusercertificates={setusercertificates} id={_id} url={url} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography className="poppins" variant="h4" textAlign={"center"}>
            No certificates found.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
