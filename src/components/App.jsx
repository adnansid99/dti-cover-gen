import { Box } from "@mui/material";
import { useContext } from "react";
import MainPage from "./MainPage";
import SubPages from "./SubPages";
import IndexPage from "./IndexPage";
import PageController from "./PageController";
import { AppContext } from "./Context";

export default function App() {
  const {
    initSubTo,
    initSubBy,
    setSubject,
    submittedToData,
    setSubmittedToData,
    submittedByData,
    setSubmittedByData,
    subPages,
    isIndex,
    setTitle,
  } = useContext(AppContext);

  const handleTitle = (e) => {
    setTitle(e.currentTarget.textContent);
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
        }}
      >
        {/* page controller */}
        <PageController />

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
              handleTitle,
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
                <SubPages key={subPagesNo} props={{ subPagesNo }} />
                <hr className="pageDivider no-print" />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
