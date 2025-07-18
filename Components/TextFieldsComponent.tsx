import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material";
import { useState } from "react";

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

interface InformationType {
  name: string;
  date: string;
  signature: string;
  details: string;
}

const TextFieldsComponent = () => {
  const [information, setinformation] = useState<InformationType>({
    name: "Mark Mackenzie",
    date: "12/25/2023",
    signature: "Dr. Arnold O'Neal",
    details:
      "This certificate is awarded to [Name] in recognition of their successful completion of [Degree/Academic Program Name] on [Date]. Your hard work, determination, and commitment to academic excellence have enabled you to achieve this significant milestone, and we are proud to recognize your achievement.",
  });

  function handlChangeInformation(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setinformation((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  const { name, date, signature, details } = information;

  function handleCreateCertificate() {}

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

      <Button
        onClick={handleCreateCertificate}
        sx={{ mt: 4 }}
        variant="contained"
      >
        <Typography textTransform="capitalize" className="poppins">
          Create Certificate
        </Typography>
      </Button>
    </Box>
  );
};

export default TextFieldsComponent;
