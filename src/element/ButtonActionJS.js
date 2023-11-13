// ButtonActionJS.tsx

// imports
import { Box, Button, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";


// ()=>{}
const ButtonActionJS = ({
  sx,
  lable = "ok",
  disabled = false,
  load = false,
  ButtonActionJSCB = () => {},
}) => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (load) {
        progressRef.current();
      } else {
        setProgress(0);
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [load]);

  return (
    <Box sx={sx}>
      <Button
        disabled={disabled || load}
        variant='contained'
        onClick={ButtonActionJSCB}>
        {lable}
        <LinearProgress
          sx={{
            visibility: load ? "inherit" : "hidden",
            borderRadius: "4px",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          variant='buffer'
          value={progress}
          valueBuffer={buffer}
        />
      </Button>
    </Box>
  );
};
export default ButtonActionJS;
