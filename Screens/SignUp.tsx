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
import { Bounce, toast } from "react-toastify";

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

export const SingleRegisterInput = ({
  placeholder,
  startadorment,
  ...props
}: SingleRegisterInputProps) => {
  return (
    <TextField
      id={"input-with-icon-textfield"}
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

interface BottomTextProps {
  navigateroute: string;
  ftext: string;
  stext: string;
}

export const BottomText = ({
  navigateroute,
  ftext,
  stext,
}: BottomTextProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button color="info" onClick={() => navigate(navigateroute)}>
        <Typography
          textTransform="capitalize"
          variant="caption"
          color="black"
          className="poppins"
        >
          {ftext}
          <Typography
            textTransform="capitalize"
            color="blue"
            variant="caption"
            className="poppins"
          >
            {" "}
            {stext}{" "}
          </Typography>{" "}
        </Typography>
      </Button>
    </Box>
  );
};

interface CredentialsType {
  name: string;
  email: string;
  password: string;
}

export function showsuccesstoast(msg: string) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

export function showerrtoast(msg: string) {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
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

  async function handleSignUp() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const res = await response.json();
      if (res.success) {
        localStorage.setItem("token", res.token);
        showsuccesstoast("Account created successfully !");
        navigate("/templates");
      } else {
        const errmsgs = res.messages;
        if (errmsgs) {
          errmsgs.forEach((msg: string) => showerrtoast(msg));
        } else {
          showerrtoast(res.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
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
      {/* <ToastContainer toastStyle={{ fontFamily: "poppins" }} /> */}
      <Typography className="poppins" fontWeight={"bold"} variant="h6">
        Sign up to use _TKCertFactory
      </Typography>

      <Box
        sx={{
          bgcolor: "white",
          my: 2,
          borderRadius: 5,
          border: "0.5px solid rgb(229 231 235)",
          p: 5,
          maxWidth: 500,
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
        <Button
          fullWidth
          onClick={handleSignUp}
          sx={{ my: 1 }}
          variant="contained"
        >
          <Typography textTransform="capitalize" className="poppins">
            Sign up
          </Typography>
        </Button>

        <BottomText
          navigateroute="/signin"
          ftext="Already have an account?"
          stext="Sign in here"
        />
      </Box>
    </Box>
  );
};

export default SignUp;
