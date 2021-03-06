import { useContext, useEffect } from "react";
import { Context } from "../../context";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useRouter } from "next/router";
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const classes = useStyles();
  const router = useRouter();



  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        // console.log(res);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        router.push('/seller/item/create')
        //window.location.href = "/user";
      });
    }
  }, [user]);

  return (
    <div className={classes.root}>
    <h1>Ne zárd be az ablakot!</h1>
      <Button onClick={()=>router.push("/seller/item/create")} type="button">Kattins ide, ha az oldal nem irányít át 7 másodpercen belűl</Button>
    </div>
  );
};

export default StripeCallback;
