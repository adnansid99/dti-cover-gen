import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import MainPage from "./components/MainPage";
import SubPages from "./components/SubPages";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IndexPage from "./components/IndexPage";

const initSubTo = [
  "Teacher's name",
  "Instructor",
  "Daffodil Technical Institute (DTI)",
];
const initSubBy = [
  "Name: Your name",
  "Board roll: xxxxx",
  "Reg. no: xxxxx",
  "Semester: xth",
  "Department: Computer (x)",
];

export default function App() {
  const [subject, setSubject] = useState("subject (code)");
  const [submittedToData, setSubmittedToData] = useState(initSubTo);
  const [submittedByData, setSubmittedByData] = useState(initSubBy);
  const [subPages, setSubPages] = useState(0);
  const [isIndex, setIsIndex] = useState(true);

  const handleAddItem = () => {
    setSubPages((prev) => prev + 1);
  };
  const handleRemoveItem = () => {
    if (subPages != 0) {
      setSubPages((prev) => prev - 1);
    }
  };

  const handleInput = (e) => {
    setSubject(e.currentTarget.textContent);
  };

  const handleSubTo = (e) => {
    const id = e.currentTarget.id;
    const value = e.currentTarget.textContent;
    const newData = submittedToData.map((data, index) => {
      if (index == id) {
        return value;
      }
      return data;
    });
    setSubmittedToData(newData);
  };

  const handleSubBy = (e) => {
    const id = e.currentTarget.id;
    const value = e.currentTarget.textContent;
    const newData = submittedByData.map((data, index) => {
      if (index == id) {
        return value;
      }
      return data;
    });
    setSubmittedByData(newData);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <Box
        id="indexId"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          // backgroundColor: "red",
        }}
      >
        <Box
          className="no-print"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1,
            position: "absolute",
            left: "10px",
            top: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "500", color: "#bfbfbf", margin: "0 auto" }}
            >
              SubCover: {subPages}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" onClick={handleAddItem}>
                Add
                <ControlPointIcon
                  sx={{ marginLeft: "4px", marginRight: "-8px" }}
                />
              </Button>
              <Button variant="outlined" onClick={handleRemoveItem}>
                Remove
                <RemoveCircleOutlineIcon
                  sx={{ marginLeft: "4px", marginRight: "-8px" }}
                />
              </Button>
            </Box>
          </Box>
          <Button variant="contained" onClick={() => window.print()}>
            Save as PDF
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: isIndex ? "red" : "green",
              "&:hover": { backgroundColor: isIndex ? "#d10000" : "#00a300" },
            }}
            onClick={() => setIsIndex((prev) => !prev)}
          >
            {isIndex ? "Disable" : "Enable"} Index
          </Button>
        </Box>
        <Box
          sx={{
            width: 750,
            aspectRatio: 8.27 / 11.69,
            backgroundColor: "#fff",

            padding: 10,

            // border: `1px red soild`,

            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {/* Main cover page */}
          <MainPage
            props={{
              initSubTo,
              initSubBy,
              handleInput,
              handleSubTo,
              handleSubBy,
            }}
          />

          <hr className="pageDivider no-print" />

          {/* Index Page */}
          {isIndex ? (
            <>
              <IndexPage />
              <hr className="pageDivider no-print" />
            </>
          ) : null}

          {/* Sub cover pages */}
          {[...Array(subPages)].map((_, subPagesNo) => {
            return (
              <>
                <SubPages
                  key={subPagesNo}
                  props={{
                    submittedToData,
                    submittedByData,
                    subject,
                    subPagesNo,
                  }}
                />
                <hr className="pageDivider no-print" />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
