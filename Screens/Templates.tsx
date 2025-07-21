import { Container, Grid, Box } from "@mui/material";
import HeadingandDescComp from "../Components/HeadingandDescComp";
import useResponsiveness from "../Hooks/useResponsiveness";
import { TEMPLATES } from "../Constants";
import SingleCertificate from "../Components/SingleCertificate";
import type { CertificateTemplate } from "../Components/SingleCertificate";
import TextFieldsComponent from "../Components/TextFieldsComponent";
import Footer from "../Components/Footer";
import { useCallback, useEffect, useRef, useState } from "react";
import CertInformation from "../Components/CertInformation";
import { toPng } from "html-to-image";
import { useNavigate } from "react-router";

export interface InformationType {
  name: string;
  date: string;
  signature: string;
  details: string;
}

const Templates = () => {
  const navigate = useNavigate();
  const matches = useResponsiveness("sm", "down");
  const [activeindex, setactiveindex] = useState(0);
  const [selectedtemplate, setselectedtemplate] = useState<CertificateTemplate>(
    TEMPLATES[0]
  );
  const [certurl, setcerturl] = useState("");
  const [certloaded, setcertloaded] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [information, setinformation] = useState<InformationType>({
    name: "Mark Mackenzie",
    date: "12/25/2023",
    signature: "Dr. Arnold O'Neal",
    details:
      "This certificate is awarded to [Name] in recognition of their successful completion of [Degree/Academic Program Name] on [Date].",
  });

  const handleCreateCertificate = useCallback(() => {
    setcertloaded(true);

    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        setcerturl(dataUrl);
        setcertloaded(false);
      })
      .catch((err) => {
        console.log(err);
        setcertloaded(false);
      });
  }, [ref]);

  const handleDownloadCertificate = useCallback(() => {
    if (certurl === "") return;

    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = certurl;
    link.click();
  }, [certurl]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // allow creation of certificates
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Container component="main" sx={{ pt: 15 }}>
        <HeadingandDescComp
          heading="Select a Template to start creating your certificate"
          desc={
            " Fill in the text form below with all the details & download. The certificate will be in PDF format & printable."
          }
          variant={matches ? "h5" : "h4"}
        />

        {/* Templates section from which the user can choose the template of certificate */}
        <Box
          sx={{
            py: 3,
            mt: 2,
            bgcolor: "rgb(249 250 251)",
            border: "0.5px solid rgb(229 231 235)",
            borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            {TEMPLATES.map(({ img, key }, index) => (
              <SingleCertificate
                setselectedtemplate={setselectedtemplate}
                key={key}
                img={img}
                activeindex={activeindex}
                setactiveindex={setactiveindex}
                index={index}
              />
            ))}
          </Grid>

          <Container component="section">
            <TextFieldsComponent
              information={information}
              setinformation={setinformation}
              handleCreateCertificate={handleCreateCertificate}
              handleDownloadCertificate={handleDownloadCertificate}
              certloaded={certloaded}
              certurl={certurl}
            />
          </Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 5,
            }}
          >
            {certurl != "" && (
              <img
                style={{ width: matches ? "90%" : "70%" }}
                src={certurl}
                alt="Loading..."
              />
            )}
          </Box>
          <Box
            sx={{
              contentVisibility: "hidden",
            }}
          >
            <CertInformation
              information={information}
              selectedtemplate={selectedtemplate}
              ref={ref}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Templates;
