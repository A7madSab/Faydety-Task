import React from "react"

import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.primary.light
    }
}))

const LoadingScreen = () => {
    const classes = useStyles()

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <CircularProgress color="primary" size={120} />
        </Grid>
    )
}


export default LoadingScreen
