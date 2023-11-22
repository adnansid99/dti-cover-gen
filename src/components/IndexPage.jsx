import {
  Box,
  Fade,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useContext, useState } from "react";
import { AppContext } from "./Context";

export default function IndexPage() {
  const { items, setItems, name, setName, date, setDate, setSubPages } =
    useContext(AppContext);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const styles = {
    border: {
      border: "1px #8eaadb solid",
      fontWeight: 500,
      fontSize: 12,
      padding: 1,
    },
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: name,
      date: date,
    };
    setItems([...items, newItem]);
    setSubPages((prev) => prev + 1);
  };
  // console.log(items[0].name);
  return (
    <Box sx={{ minHeight: "90vh", maxHeight: "100%", paddingTop: "6rem" }}>
      <Box
        sx={{
          backgroundColor: "#ffe599",
          border: `2px #000 solid`,
          padding: "8px 32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "500" }}>
          INDEX
        </Typography>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#4472c4" }}>
            <TableRow sx={{ ...styles.border, border: "1px #4472c4 solid" }}>
              <TableCell sx={{ color: "#FFF" }}>NO.</TableCell>
              <TableCell sx={{ color: "#FFF" }} align="center">
                Experiment name
              </TableCell>
              <TableCell sx={{ color: "#FFF", minWidth: 100 }} align="right">
                Date
              </TableCell>
              <TableCell sx={{ color: "#FFF", minWidth: 100 }} align="right">
                Page no.
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  border: "1px #8eaadb solid",
                  "&:nth-child(odd)": {
                    backgroundColor: "#d9e2f3",
                  },
                  "&:nth-child(even)": {
                    backgroundColor: "#FFF",
                  },
                }}
              >
                <TableCell
                  sx={{
                    ...styles.border,
                    height: 60,
                    p: 0,
                  }}
                  component="th"
                  scope="row"
                  align="center"
                  onMouseEnter={() => setShowDeleteButton(true)}
                  onMouseLeave={() => setShowDeleteButton(false)}
                >
                  <span>{index + 1}</span>

                  <Fade in={showDeleteButton} mountOnEnter unmountOnExit>
                    <IconButton
                      onClick={() => {
                        setSubPages((prev) => (prev == 0 ? prev : prev - 1));
                        setItems((e) => e.filter((item) => item.id !== row.id));
                      }}
                    >
                      <DeleteRoundedIcon sx={{ fill: "red" }} />
                    </IconButton>
                  </Fade>
                </TableCell>
                <TableCell sx={styles.border} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={styles.border} align="right">
                  {row.date}
                </TableCell>
                <TableCell sx={styles.border} align="right">
                  {row.page}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="no-print input-styling">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={() => handleAddItem()}>Submit</button>
      </Box>
    </Box>
  );
}
