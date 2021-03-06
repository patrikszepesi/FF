import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { Icon } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { Section } from '../../../../../components/organisms';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '0 0 50% 0',
    [theme.breakpoints.up('sm')]: {
      borderRadius: '0 0 90% 0',
    },
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow>
          <>
          <SectionHeader
            title="Zero Waste"
            subtitle="A zero waste sz?? szerinti jelent??se nulla hullad??k. A hullad??kmentes ??letm??dra utal. A szeml??letm??d alapelve, hogy ??jrahasznos??t??s, teh??t ut??lagos hullad??kgazd??lkod??s helyett ink??bb a prevent??v gondolkod??sm??dot v??lasszuk."
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: 'h2',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            data-aos="fade-up"
          />
          </>
        </Section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
