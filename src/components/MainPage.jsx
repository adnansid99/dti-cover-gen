/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Signature from "./Signature";
import DaffLogo from "./DaffLogo";

export default function MainPage({ props }) {
  const { initSubTo, initSubBy, handleInput, handleSubTo, handleSubBy } = props;
  return (
    <>
      <DaffLogo paddingTop="1.5rem" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "900",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: "40px", fontWeight: "700", color: "#1F3864" }}
        >
          Lab Report On
        </Typography>

        <h2
          onInput={handleInput}
          contentEditable={true}
          style={{ fontWeight: "600", color: "#BF8F00" }}
        >
          subject (code)
        </h2>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 7 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <h3 style={{ color: "#00B0F0", fontSize: "28px" }}>Submitted To:</h3>
          {initSubTo.map((data, index) => {
            return (
              <span
                key={index}
                id={index}
                onInput={handleSubTo}
                style={{ fontSize: "18px", fontWeight: "500" }}
                contentEditable={true}
              >
                {data}
              </span>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <h3 style={{ color: "#00B0F0", fontSize: "28px" }}>Submitted By:</h3>
          {initSubBy.map((data, index) => {
            return (
              <p
                key={index}
                id={index}
                onInput={handleSubBy}
                style={{ fontSize: "18px", fontWeight: "500" }}
                contentEditable={true}
              >
                {data}
              </p>
            );
          })}
        </Box>
      </Box>
      <Signature />
    </>
  );
}
