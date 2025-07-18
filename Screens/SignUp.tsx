import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  type TextFieldProps,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router";

interface SingleRegisterInputProps extends Omit<TextFieldProps, "ref"> {
  placeholder: string;
  startadorment: React.JSX.Element;
}

interface PasswordInputProps extends Omit<TextFieldProps, "ref"> {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const PasswordInput = ({
  showPassword,
  setShowPassword,
  ...props
}: PasswordInputProps) => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      type={showPassword ? "text" : "password"}
      fullWidth
      sx={{ my: 1 }}
      placeholder="Password"
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon sx={{ color: "grey" }} />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

const SingleRegisterInput = ({
  placeholder,
  startadorment,
  ...props
}: SingleRegisterInputProps) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{startadorment}</InputAdornment>
          ),
        },
      }}
      fullWidth
      variant="outlined"
      sx={{ my: 1 }}
      placeholder={placeholder}
      className="registerinput"
      {...props}
    />
  );
};

interface CredentialsType {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {

  const navigate = useNavigate();

  const [showpassword, setShowPassword] = useState(false);

  const [credentials, setcredentials] = useState<CredentialsType>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = credentials;

  function handlChangeCredentials(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setcredentials((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "rgb(249 250 251)",
        pt: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography className="poppins" fontWeight={"bold"} variant="h6">
        Sign up to use _TKCertFactory
      </Typography>

      <Box
        sx={{
          width: 500,
          bgcolor: "white",
          my: 2,
          borderRadius: 5,
          border: "0.5px solid rgb(229 231 235)",
          p: 5,
        }}
      >
        <SingleRegisterInput
          placeholder="Name"
          startadorment={<PersonIcon sx={{ color: "grey" }} />}
          name="name"
          value={name}
          onChange={handlChangeCredentials}
        />
        <SingleRegisterInput
          placeholder="Email"
          startadorment={<MailOutlineOutlinedIcon sx={{ color: "grey" }} />}
          name="email"
          value={email}
          onChange={handlChangeCredentials}
        />
        <PasswordInput
          showPassword={showpassword}
          setShowPassword={setShowPassword}
          name="password"
          value={password}
          onChange={handlChangeCredentials}
        />
        <Button fullWidth onClick={() => {}} sx={{ my: 1 }} variant="contained">
          <Typography textTransform="capitalize" className="poppins">
            Sign up
          </Typography>
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Button color="info" onClick={() => navigate("/signin")}>
            <Typography
              textTransform="capitalize"
              variant="caption"
              color="black"
              className="poppins"
            >
              Already have an account?{" "}
              <Typography
                textTransform="capitalize"
                color="blue"
                variant="caption"
                className="poppins"
              >
                {" "}
                Sign in here{" "}
              </Typography>{" "}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
