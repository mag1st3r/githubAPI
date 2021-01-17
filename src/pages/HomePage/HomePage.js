import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers, ChangePage } from "redux/actions/users";
//Components
import { Typography, LinearProgress } from "@material-ui/core";
import UserList from "components/UserList";
import PaginationControlled from "components/PaginationControlled";

const useStyles = makeStyles(() => ({
  title: {
    margin: "30px 0",
    textTransform: "uppercase"
  },
  root: {
    width: "50%",
    margin: "0 auto",
  },
  pagination: {
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading, usersList, page } = useSelector((state) => state.users);

  const handleChange = (event, value) => {
    dispatch(ChangePage(value))
  };

  useEffect(() => {
    const since = page * 10 - 10;
    dispatch(GetUsers(since));
  }, [dispatch, page]);

  return (
    <main className={classes.root}>
      <Typography
        className={classes.title}
        variant="h4"
        component="h4"
        align="center"
      >
        Github users
      </Typography>

      {loading ? <LinearProgress /> : <UserList list={usersList} />}

      <div className={classes.pagination}>
        <PaginationControlled page={page} handleChange={handleChange} />
      </div>
    </main>
  );
};

export default HomePage;
