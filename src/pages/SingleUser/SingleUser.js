import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/actions/users";

//Components
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import {
  Domain,
  PeopleAlt,
  CalendarToday,
  MailOutline,
  LocationOn,
  ArrowBackIos,
} from "@material-ui/icons";
import { LinkIcon } from "@material-ui/icons/Link";
import ProfileInfo from "components/ProfileInfo";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "20px",
    padding: "20px",
  },
  media: {
    width: 240,
    height: 240,
    borderRadius: "50%",
  },
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

const SingleUser = () => {
  const { username } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.users);
  const {
    avatar_url,
    name,
    followers,
    following,
    company,
    email,
    blog,
    location,
    bio,
    created_at,
  } = user || {};

  const formatDate = created_at && created_at.split("T")[0];

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  return !loading ? (
    <Card className={classes.root}>
      <IconButton
        component={Link}
        to="/"
        size="small"
      >
        <ArrowBackIos fontSize="large" />
      </IconButton>
      <Avatar className={classes.media} alt={name} src={avatar_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {name}
        </Typography>
        <Typography
          className={classes.container}
          align="left"
          gutterBottom
          variant="subtitle1"
          component="p"
        >
          <Typography
            className={classes.span}
            align="left"
            variant="subtitle1"
            component="span"
          >
            <PeopleAlt className={classes.svg} /> {followers} followers
          </Typography>
          <Typography
            className={classes.span}
            align="left"
            variant="subtitle1"
            component="span"
          >
            {following} following
          </Typography>
        </Typography>
        <ProfileInfo content={formatDate} IconComponent={CalendarToday} />
        <ProfileInfo content={company} IconComponent={Domain} />
        <ProfileInfo content={email} IconComponent={MailOutline} />
        <ProfileInfo content={location} IconComponent={LocationOn} />
        <ProfileInfo content={blog} IconComponent={LinkIcon} to={blog} />
        <ProfileInfo content={bio} IconComponent={false} />
      </CardContent>
    </Card>
  ) : (
    <LinearProgress />
  );
};

export default SingleUser;
