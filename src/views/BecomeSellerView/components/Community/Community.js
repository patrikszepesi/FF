import React from 'react';
import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import { Context } from "../../../../../context";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  colors,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Button
} from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader,IconAlternate } from '../../../../../components/molecules';
import { HeroShapedStripe, Section, CardBase } from '../../../../../components/organisms';
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import axios from 'axios';
import myImage from '../../../../../public/assets/rev.svg'
import { useRouter } from "next/router";
import UserRoute from "../../../../../components/routes/UserRoute";





const useStyles = makeStyles(theme => ({
  appStore: {
    maxWidth: 152,
  },
  googlePlayBtn: {
    border: '1px solid #A6A6A6',
    borderRadius: '5px',
    maxWidth: '150px',
  },
  cover: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  coverImg: {
    objectFit: 'contain',
  },
  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
  dot: {
    display: 'block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '100%',
    background: colors.grey[500],
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
    },
  },
  dotHighlighted: {
    background: colors.grey[900],
  },
  divider: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  button: {
    margin: theme.spacing(5),
    borderRadius: "5em",
    height: `${theme.spacing(12)}px !important`,
    width: `${theme.spacing(35)}px !important`,
    color: "#ffb74d",
    backgroundColor: "     #FFFFFF        ",
    border: '1px solid'

  },
  button2: {
    margin: theme.spacing(5),
    borderRadius: "5em",
    height: `${theme.spacing(6)}px !important`,
    width: `${theme.spacing(20)}px !important`,
    color: "#ffb74d",
    backgroundColor: "     #FFFFFF        ",
    border: '1px solid'

  },
}));

const Community = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter();


  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);



  const becomeInstructor = () => {
    // console.log("become instructor");
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed. Try again.");
        setLoading(false);
      });
  };

  return (
    <UserRoute>
    <div className={className} {...rest}>
    {user && user.role && user.role.includes("Instructor")?(<HeroShapedStripe
      leftSide={
        <SectionHeader
          title={
            <span>
            M??r be??ll??tottad, hogy  {' '}
              <Typography color="secondary" variant="inherit" component="span">elad?? lehess</Typography>
            </span>
          }
          subtitle=" "
          ctaGroup={[
            <Button
              variant="contained"
              className={classes.button}
              icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
              onClick={()=> router.push("/seller/revenue")}
              disabled={
                loading
              }
            >
              {loading ? "Loading..." : "P??nz??gyi adatok megtekint??se"}
            </Button>
          ]}
          align="left"
          disableGutter
          data-aos="fade-up"
          titleVariant="h3"
        />
      }
      rightSide={
        <div className={classes.cover}>
          <Image
            src={myImage}
            alt="..."
            className={classes.coverImg}
            data-aos="fade-up"
            lazy={false}
          />
        </div>
      }
    />):(<HeroShapedStripe
      leftSide={
        <SectionHeader
          title={
            <span>
            Adj meg p??r sz??ks??ges adatot {' '}
              <Typography color="secondary" variant="inherit" component="span">miel??tt elkezdesz eladni dolgokat</Typography>
            </span>
          }
          subtitle=""
          ctaGroup={[
            <>
            <Button
              variant="contained"
              className={classes.button}
              icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
              onClick={becomeInstructor}
              disabled={
                (user && user.role && user.role.includes("Instructor")) ||
                loading
              }
            >
              {loading ? "Loading..." : "Kattins ide, hogy elkezd"}
            </Button>

            <Button
              className={classes.button2}
              onClick={()=> router.push("/help")}>
            Hogyan m??k??dik ?
            </Button>
            </>
          ]}
          align="left"
          disableGutter
          data-aos="fade-up"
          titleVariant="h3"
        />
      }
      rightSide={
        <div className={classes.cover}>
          <Image
            src={myImage}
            alt="..."
            className={classes.coverImg}
            data-aos="fade-up"
            lazy={false}
          />
        </div>
      }
    />)}


    </div>
    </UserRoute>
  );
};
//
Community.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Community;
