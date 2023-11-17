import { Box } from "@mui/material";
import { useState } from "react";
import MainPage from "./MainPage";
import SubPages from "./SubPages";
import IndexPage from "./IndexPage";
import PageController from "./PageController";

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
        }}
      >
        {/* page controller */}
        <PageController
          props={{ setSubPages, subPages, isIndex, setIsIndex }}
        />

        <Box
          sx={{
            width: 750,
            aspectRatio: 8.27 / 11.69,
            backgroundColor: "#fff",
            padding: 10,
            display: "flex",
            flexDirection: "column",
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
