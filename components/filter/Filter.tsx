import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { montserrat } from "components/stylesSX";

interface FilterProps {
  nameFilter: string;
  descFilter: string[];
}

const Filter = ({ nameFilter, descFilter }: FilterProps) => {
  return (
    <div>
      <Accordion sx={{ width: "275px", boxShadow: "none" }} disableGutters>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<AddIcon />}
          sx={{ borderBottom: "1px solid #D8D8D8", padding: "0px" }}
        >
          <Typography
            className={montserrat.className}
            sx={{
              fontWeight: 700,
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            {nameFilter}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            letterSpacing: 0.6,
            textTransform: "uppercase",
            p: "20px 0",
            display: "flex",
            flexDirection: "column",
            rowGap: "12px",
          }}
        >
          {descFilter.map((category) => (
            <Typography className={montserrat.className}>{category}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
