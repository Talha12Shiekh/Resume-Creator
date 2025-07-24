import { Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MenuButton = ({ onClick }: { onClick: (event: React.MouseEvent<HTMLElement>) => void }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 30,
        height: 30,
        position: "absolute",
        right: 0,
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgb(249 250 251)",
        border: "0.5px solid rgb(229 231 235)",
        m: 1,
        zIndex:10,
        top:0
      }}
      className="menubtn"
    >
      <MoreHorizIcon sx={{ color: "black" }} />
    </Box>
  );
};

export default MenuButton;
