// референси кнопок https://mui.com/material-ui/react-button/
// референси завантажень https://mui.com/material-ui/react-progress/
// референси Emoji https://uk.piliapp.com/emoji/list/

import { Box } from "@mui/material";
import "./App.css";
import ButtonAction from "./element/ButtonAction";
import { useState } from "react";
import ButtonActionJS from "./element/ButtonActionJS";

function App() {
  const [isButtonActive, setButtonActive] = useState(false);

  return (
    <Box>
      <ButtonAction
        load={isButtonActive}
        disabled={isButtonActive}
        lable={isButtonActive ? "😜" : "👀"}
        ButtonActionCB={() => setButtonActive(!isButtonActive)}
        sx={{
          padding: "10px",
          // "& button:hover": { backgroundColor: "red" },
          "& .MuiLinearProgress-barColorPrimary": { backgroundColor: "red" },
        }}
      />
      <ButtonAction
        lable={isButtonActive ? "load" : "ok"}
        ButtonActionCB={() => setButtonActive(!isButtonActive)}
        sx={{ padding: "10px" }}
      />
      <ButtonActionJS
        lable={isButtonActive ? "JS" : "ok"} // ButtonActionCB={()=> setButtonActive(!isButtonActive)}
        sx={{ padding: "10px" }}
      />
    </Box>
  );
}

export default App;
