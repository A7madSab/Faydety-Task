import { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Logo from "./Logo"

const styles = makeStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))

const Navbar = () => {
    const classes = styles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container direction="row">
            <Logo />
            <Grid container alignItems="center">
                <Typography>Loans
                    <IconButton>
                        <ExpandMoreIcon onClick={handleClick} />
                    </IconButton>
                </Typography>

                <Typography>
                    Credit Cards
                </Typography>

                <Typography>
                    Saving Deposits
                </Typography>
                <Button>Join or Log in</Button>
            </Grid>

            <Grid container alignItems="center">
                <Typography>
                    How it works
                </Typography>

                <Typography>
                    Calculators
                </Typography>

                <Typography>
                    Money Blog
                </Typography>

                <Typography>
                    Help Center
                </Typography>

                <Typography>
                    AR | EN
                </Typography>
            </Grid>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.root}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Grid>
    )
}

export default Navbar
