import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { resetAlertValue } from "../redux/action/alert.action";
function Alert(props) {
  const alert = useSelector((state) => state.alert);
  const { enqueueSnackbar } = useSnackbar();


  const dispatch = useDispatch();

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

    setTimeout(()=>{
      dispatch(resetAlertValue())
    }, 2000)
  }, [alert.text]);

  return(
    <>
    </>
  );
}

export default Alert;
