import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useHistoryConverted } from "../hooks/useHistoryConverted";
import { useNavigate } from "react-router-dom";
import { Routes } from "./Routes";

export const Converted = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<boolean>();
  const { history, latest, remove } = useHistoryConverted();

  return (
    <>
      <Box
        width="100%"
        height="75vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack alignItems="center" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <p>You converted</p>
            <h1>
              {latest?.query?.amount} of {latest?.query?.from}
            </h1>

            <p>Which is</p>
            <h1>
              {latest?.result?.toFixed(2)} of {latest?.query?.to}
            </h1>

            <p>
              Date of conversion: {latest?.date?.split("-").reverse().join(".")}
            </p>
          </Box>
        </Stack>
        {latest?.success === true ? (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Accordion
              sx={{ width: "75%" }}
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                console.log(event)
              }
            >
              <AccordionSummary
                expandIcon={
                  expanded ? (
                    <ExpandMoreIcon onClick={() => setExpanded(false)} />
                  ) : (
                    <ExpandMoreIcon onClick={() => setExpanded(true)} />
                  )
                }
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                }}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography> See historic conversions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {history?.map((el) =>
                  el !== undefined ? (
                    <Box
                      key={el.info?.timestamp}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ borderBottom: "1px solid grey" }}
                    >
                      {" "}
                      <p>
                        Date: {el.date?.split("-").reverse().join(".")}
                      </p>{" "}
                      <p>
                        From: {el.query?.amount} {el.query?.from}; To:{" "}
                        {el.result?.toFixed(2)} {el.query?.to}
                      </p>{" "}
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </AccordionDetails>
              <Button sx={{ width: "100%" }} onClick={remove}>
                remove historic conversions
              </Button>
            </Accordion>
          </Container>
        ) : (
          <p>History cleared</p>
        )}
        <Button onClick={() => navigate(Routes.CHOOSE_CURRENCIES)}>
          back to conversion page
        </Button>
      </Box>
    </>
  );
};
