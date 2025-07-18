import { Container, Grid, Box, Typography } from "@mui/material";
import HeadingandDescComp from "../Components/HeadingandDescComp";
import useResponsiveness from "../Hooks/useResponsiveness";
import { TEMPLATES } from "../Constants";
import SingleCertificate, {
  CertificateTemplate,
} from "../Components/SingleCertificate";
import TextFieldsComponent from "../Components/TextFieldsComponent";
import Footer from "../Components/Footer";
import { useCallback, useRef, useState } from "react";
import CertInformation from "../Components/CertInformation";
import { toPng } from "html-to-image";

export interface InformationType {
  name: string;
  date: string;
  signature: string;
  details: string;
}

const Templates = () => {
  const matches = useResponsiveness("sm", "down");
  const [activeindex, setactiveindex] = useState(0);
  const [selectedtemplate, setselectedtemplate] = useState<CertificateTemplate>(
    TEMPLATES[0]
  );
  const ref = useRef<HTMLDivElement>(null);

  const [information, setinformation] = useState<InformationType>({
    name: "Mark Mackenzie",
    date: "12/25/2023",
    signature: "Dr. Arnold O'Neal",
    details:
      "This certificate is awarded to [Name] in recognition of their successful completion of [Degree/Academic Program Name] on [Date].",
  });

  const handleDownloadCertificate = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log(dataUrl);
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <Container component="main" sx={{ pt: 15 }}>
        <HeadingandDescComp
          heading="Select a Template to start creating your certificate"
          desc={
            <>
              Fill in the text form below with all the details & download.{" "}
              <br />
              The certificate will be in PDF format & printable.
            </>
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

          {/* Text fields component section ( where user can enter information for the certificate ) */}
          <Container component="section">
            <TextFieldsComponent
              information={information}
              setinformation={setinformation}
              handleDownloadCertificate={handleDownloadCertificate}
            />
          </Container>
          <Box
            sx={{
              // transform: "scale(0)",
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
      {/* Footer section */}
    </>
  );
};

export default Templates;
