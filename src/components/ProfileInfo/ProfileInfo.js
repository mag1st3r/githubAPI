import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes, { oneOfType } from "prop-types";
//Components
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  span: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
  svg: {
    width: 20,
    height: 20,
    marginRight: "10px",
  },
});

const ProfileInfo = ({ content, IconComponent, to }) => {
  const classes = useStyles();
  return content ? (
    <Typography
      className={classes.container}
      align="left"
      gutterBottom
      variant="subtitle1"
      component="p"
    >
      {IconComponent && <IconComponent className={classes.svg} />}
      {to ? (
        <a target="_blank" href={to} rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </Typography>
  ) : null;
};
ProfileInfo.propTypes = {
  content: PropTypes.string,
  IconComponent: oneOfType([PropTypes.bool, PropTypes.object]),
};

export default ProfileInfo;
