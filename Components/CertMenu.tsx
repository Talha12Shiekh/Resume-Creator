import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import MenuButton from "./MenuButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography } from "@mui/material";
import { downloadCertificate } from "../Screens/Templates";
import { showerrtoast, showsuccesstoast } from "../Screens/SignUp";

interface CertMenuProps {
  url: string;
  id: string;
  dltcertificate: (id: string) => void;
}

export default function CertMenu({ url, id, dltcertificate }: CertMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleDownloadCertificate() {
    downloadCertificate(url);
    handleClose();
  }

  async function handleDeleteCertificate() {
    try {
      const response = await fetch(
        `http://localhost:3000/api/certificates/deletecertificate/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const res = await response.json();
      dltcertificate(id);
      if (res.success) {
        showsuccesstoast(res.message);
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
    <React.Fragment>
      <Tooltip title="Certificate Options">
        <MenuButton onClick={handleClick} />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleDeleteCertificate}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body1" className="poppins">
            Delete
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleDownloadCertificate}>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body1" className="poppins">
            Download
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
