import { Box, Button, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function PageController() {
  const { setSubPages, subPages, isIndex, setIsIndex } = useContext(AppContext);

  const handleAddItem = () => {
    setSubPages((prev) => prev + 1);
  };
  const handleRemoveItem = () => {
    if (subPages != 0) {
      setSubPages((prev) => prev - 1);
    }
  };
  return (
    <Box
      className="no-print"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1.5,
        position: "absolute",
        left: "20px",
        top: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", color: "#bfbfbf", margin: "0 auto" }}
        >
          SubCover: {subPages}
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button
            sx={{
              transition: "all 0.4s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            variant="outlined"
            onClick={handleAddItem}
          >
            Add
            <ControlPointIcon sx={{ marginLeft: "4px", marginRight: "-8px" }} />
          </Button>
          <Button
            sx={{
              transition: "all 0.4s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            variant="outlined"
            onClick={handleRemoveItem}
          >
            Remove
            <RemoveCircleOutlineIcon
              sx={{ marginLeft: "4px", marginRight: "-8px" }}
            />
          </Button>
        </Box>
      </Box>
      <Button
        sx={{
          transition: "all 0.4s",
          "&:hover": { transform: "scale(1.05)" },
        }}
        variant="contained"
        onClick={() => window.print()}
      >
        Save as PDF
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: isIndex ? "red" : "green",
          transition: "all 0.4s",
          "&:hover": {
            backgroundColor: isIndex ? "#d10000" : "#00a300",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => setIsIndex((prev) => !prev)}
      >
        {isIndex ? "Disable" : "Enable"} Index
      </Button>
    </Box>
  );
}
