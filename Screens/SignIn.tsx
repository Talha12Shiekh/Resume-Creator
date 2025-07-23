import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import {
  BottomText,
  PasswordInput,
  showerrtoast,
  showsuccesstoast,
  SingleRegisterInput,
} from "./SignUp";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

interface CredentialsType {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
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

  async function handleSignIn() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await response.json();
      if (res.success) {
        localStorage.setItem("token", res.token);
        showsuccesstoast("User logged in successfully !");
        navigate("/templates");
      } else {
        const errmsgs = res.messages;
        if (errmsgs) {
          errmsgs.forEach((msg) => showerrtoast(msg));
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
        Sign in
      </Typography>

      <Box
        sx={{
          maxWidth: 500,
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
        <Button
          fullWidth
          onClick={handleSignIn}
          sx={{ my: 1 }}
          variant="contained"
        >
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
