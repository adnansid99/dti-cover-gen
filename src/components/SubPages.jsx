/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Signature from "./Signature";
import DitLogo from "./DtiLogo";

export default function SubPages({ props }) {
  const { submittedToData, submittedByData, subject, subPagesNo } = props;
  return (
    <>
      <DitLogo paddingTop="6rem" />
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
          sx={{ fontSize: "35px", fontWeight: "700", color: "#1F3864" }}
        >
          Lab no. {subPagesNo + 1}
        </Typography>

        <h2
          // onInput={handleInput}
          // contentEditable={true}
          style={{ fontWeight: "600", color: "#BF8F00" }}
        >
          {subject}
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
          {submittedToData.map((data, index) => {
            return (
              <span
                key={index}
                id={index}
                // onInput={handleSubTo}
                style={{ fontSize: "18px", fontWeight: "500" }}
                // contentEditable={true}
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
          {submittedByData.map((data, index) => {
            return (
              <p
                key={index}
                id={index}
                // onInput={handleSubBy}
                style={{ fontSize: "18px", fontWeight: "500" }}
                // contentEditable={true}
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
