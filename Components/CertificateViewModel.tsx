import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CertificateViewModel = ({
  open,
  handleClose,
  certificateimg,
}: {
  open: boolean;
  handleClose: () => void;
  certificateimg: string;
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          p={5}
          display="flex"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "0", right: "0", m: 1 }}
          >
            <CloseIcon style={{ color: "white", fontSize: 35 }} />
          </IconButton>
          <img
            src={certificateimg}
            alt="Loading..."
            style={{ width: "90%", height: 550, objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default CertificateViewModel;
