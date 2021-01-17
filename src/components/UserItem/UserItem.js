import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
//Components
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  avatar: {
    width: "100px",
    height: "100px",
    marginRight: "15px",
  },
  user: {
    width: "100%",
    cursor: "pointer",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

const UserItem = ({ user }) => {
  const { avatar_url, html_url, login } = user;
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (name) => {
    //solution to bypass the link within the link
    history.push(`users/${name}`);
  };

  return (
    <>
      <ListItem
        alignItems="center"
        onClick={() => {
          handleClick(login);
        }}
        className={classes.user}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar} alt={login} src={avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={login}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={html_url}
                  onClick={(e) => e.stopPropagation()}
                >
                  Profile Link
                </a>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
