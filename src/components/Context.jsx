import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
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
  // index section
  const initIndexData = [];
  const [items, setItems] = useState(initIndexData);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  // index section

  const [title, setTitle] = useState("[Title] report");
  const [subject, setSubject] = useState("subject (code)");
  const [submittedToData, setSubmittedToData] = useState(initSubTo);
  const [submittedByData, setSubmittedByData] = useState(initSubBy);
  const [subPages, setSubPages] = useState(0);
  const [isIndex, setIsIndex] = useState(true);

  const wareHouse = {
    items,
    setItems,
    name,
    setName,
    date,
    setDate,
    initSubTo,
    initSubBy,
    title,
    setTitle,
    subject,
    setSubject,
    submittedToData,
    setSubmittedToData,
    submittedByData,
    setSubmittedByData,
    subPages,
    setSubPages,
    isIndex,
    setIsIndex,
  };
  return (
    <AppContext.Provider value={wareHouse}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
