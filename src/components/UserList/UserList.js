import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
//Components
import List from "@material-ui/core/List";
import UserItem from "components/UserItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
}));

const UserList = ({ list }) => {
  const classes = useStyles();
  const userItems = useMemo(
    () => list && list.map((user) => <UserItem key={user.id} user={user}/>),
    [list]
  );
  return <List className={classes.root}>{userItems}</List>;
};

UserList.propTypes = {
  list: PropTypes.array,
};

export default UserList;
