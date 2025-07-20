import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material";
import { InformationType } from "../Screens/Templates";
import DownloadIcon from "@mui/icons-material/Download";

interface SingleInputProps extends Omit<TextFieldProps, "ref"> {
  label: string;
}

const SingleInputWithLabel = ({ label, ...props }: SingleInputProps) => {
  return (
    <>
      <Typography
        className="poppins"
        fontWeight="bold"
        sx={{ my: 1 }}
        variant="body2"
      >
        {label}
      </Typography>
      <TextField
        id="outlined-search"
        fullWidth
        type="search"
        sx={{
          "& .MuiOutlinedInput-root": {
            fontFamily: "Poppins",
          },
        }}
        {...props}
      />
    </>
  );
};

interface TextFieldsComponentProps {
  information: InformationType;
  setinformation: React.Dispatch<React.SetStateAction<InformationType>>;
  handleCreateCertificate: () => void;
  handleDownloadCertificate: () => void;
  certloaded: boolean;
  certurl: string;
}

const TextFieldsComponent = ({
  information,
  setinformation,
  handleCreateCertificate,
  certloaded,
  handleDownloadCertificate,
  certurl,
}: TextFieldsComponentProps) => {
  function handlChangeInformation(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setinformation((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  const { name, date, signature, details } = information;

  return (
    <Box>
      <SingleInputWithLabel
        name="name"
        value={name}
        placeholder={name}
        onChange={handlChangeInformation}
        label="Name"
      />
      <SingleInputWithLabel
        name="date"
        value={date}
        placeholder={date}
        onChange={handlChangeInformation}
        label="Date"
      />
      <SingleInputWithLabel
        name="signature"
        value={signature}
        placeholder={signature}
        onChange={handlChangeInformation}
        label="Signature"
      />
      <SingleInputWithLabel
        name="details"
        value={details}
        placeholder={details}
        onChange={handlChangeInformation}
        label="Details"
        rows={4}
        multiline
      />

      <Box display={"flex"} sx={{ mt: 4 }} justifyContent={"space-between"}>
        <Button
          loading={certloaded}
          loadingPosition="start"
          color="primary"
          onClick={handleCreateCertificate}
          variant="contained"
        >
          <Typography textTransform="capitalize" className="poppins">
            Create Certificate
          </Typography>
        </Button>

        {certurl != "" && (
          <Button
            startIcon={<DownloadIcon />}
            color="primary"
            onClick={handleDownloadCertificate}
            variant="contained"
          >
            <Typography textTransform="capitalize" className="poppins">
              Download Certificate
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TextFieldsComponent;
