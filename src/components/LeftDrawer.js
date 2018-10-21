import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const drawStyles = theme => {
  return {
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgb(33, 33, 33)",
      color: "white"
    },
    logo: {
      cursor: "pointer",
      fontSize: 22,
      color: Typography.textFullWhite,
      lineHeight: "64px",
      fontWeight: Typography.fontWeightLight,
      backgroundColor: blue[500],
      paddingLeft: 40,
      height: 64
    },
    avatarRoot: {
      padding: "15px 0 20px 15px",
      backgroundImage: "url(" + require("../images/material_bg.png") + ")",
      height: 45,
      display: "flex"
    },
    avatarIcon: {
      float: "left",
      display: "block",
      marginRight: 15,
      boxShadow: "0px 0px 0px 8px rgba(0,0,0,0.2)"
    },
    avatarSpan: {
      paddingTop: 12,
      paddingLeft: 24,
      display: "block",
      color: "white",
      fontWeight: 300,
      textShadow: "1px 1px #444"
    },
    menuItem: {
      color: "white",
      fontSize: 14
    }
  };
};

const LeftDrawer = props => {
  let { navDrawerOpen, classes } = props;
  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.logo}>Material Admin</div>
      <div className={classes.avatarRoot}>
        <Avatar
          src="https://material-ui.com/static/images/uxceo-128.jpg"
          size={50}
          classes={classes.avatarIcon}
        />
        <span className={classes.avatarSpan}>{props.username}</span>
      </div>
      {props.menus.map((menu, index) => (
        <Link to={menu.link}>
          <MenuItem
            key={index}
            classes={{ root: classes.menuItem }}
            // containerElement={
          >
            <ListItemIcon style={{ color: "white" }}>{menu.icon}</ListItemIcon>
            <span>{menu.text}</span>
          </MenuItem>
        </Link>
      ))}
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string
};

// export default LeftDrawer;
export default withStyles(drawStyles, { withTheme: true })(LeftDrawer);
