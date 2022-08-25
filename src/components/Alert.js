import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
function Alert(props) {
  const alert = useSelector((state) => state.alert);
  const { enqueueSnackbar } = useSnackbar();

  console.log(alert);

  useEffect(() => {
    if (alert.text !== "") {
      enqueueSnackbar(alert.text, {
        variant: alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  }, [alert.text]);

  return <></>;
}

export default Alert;
