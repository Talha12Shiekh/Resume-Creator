import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  type TextFieldProps,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import KeyIcon from "@mui/icons-material/Key";

interface SingleRegisterInputProps extends Omit<TextFieldProps, "ref"> {
  placeholder: string;
  startadorment: React.JSX.Element;
}

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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        />
        <SingleRegisterInput
          placeholder="Email"
          startadorment={<MailOutlineOutlinedIcon sx={{ color: "grey" }} />}
        />
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
                      showPassword
                        ? "hide the password"
                        : "display the password"
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
        />
        <Button fullWidth onClick={() => {}} sx={{ my: 1 }} variant="contained">
          <Typography textTransform="capitalize" className="poppins">
            Sign up
          </Typography>
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Button color="info">
            <Typography textTransform="capitalize"  variant="caption" color="black" className="poppins">
              Already have an account?{" "}
              <Typography textTransform="capitalize" color="blue" variant="caption" className="poppins">
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
