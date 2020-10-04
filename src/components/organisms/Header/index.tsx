import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BaseButton } from 'components/atoms';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    menubutton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  };
});

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menubutton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            react-typescript-firebase
          </Typography>
          <BaseButton variant="text" href="/" color="secondary">
            Login
          </BaseButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};
