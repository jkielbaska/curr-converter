import { useRouteError } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export const Error = () => {
  const navigate = useNavigate();
  const error: any = useRouteError();
  console.error(error);

  return (
    <Box
      sx={{
        width: "100%",
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Start Page
        </Button>
      </Stack>
    </Box>
  );
};
