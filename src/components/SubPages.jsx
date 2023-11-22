import { Box, Typography } from "@mui/material";
import Signature from "./Signature";
import DitLogo from "./DtiLogo";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function SubPages({ props }) {
  const { submittedToData, submittedByData, subject, items } =
    useContext(AppContext);
  const { subPagesNo } = props;
  return (
    <>
      <DitLogo paddingTop="3rem" />
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

        <h2 style={{ fontWeight: "600", color: "#BF8F00" }}>{subject}</h2>
        {items.length == 0 || items[subPagesNo] == undefined ? null : (
          <Typography
            variant="h6"
            sx={{
              color: "#0F75B6",
              fontWeight: "600",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Lab Title:{" "}
            <span
              style={{
                color: "#292A2D",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              {items[subPagesNo].name}
            </span>
          </Typography>
        )}
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
                style={{ fontSize: "18px", fontWeight: "500" }}
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
                style={{ fontSize: "18px", fontWeight: "500" }}
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
