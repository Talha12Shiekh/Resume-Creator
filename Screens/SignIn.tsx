import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { BottomText, PasswordInput, SingleRegisterInput } from "./SignUp";

interface CredentialsType {
  email: string;
  password: string;
}

const SignIn = () => {
  const [showpassword, setShowPassword] = useState(false);

  const [credentials, setcredentials] = useState<CredentialsType>({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

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
        Sign in
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
            Sign In
          </Typography>
        </Button>

        <BottomText
          navigateroute="/signup"
          ftext="Don't have an account yet?"
          stext="Sign up here"
        />
      </Box>
    </Box>
  );
};

export default SignIn;
