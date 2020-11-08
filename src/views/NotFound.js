import React from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "95vh",
        minWidth: "100vw",
        backgroundColor: theme.palette.primary.light
    }
}))

const NotFoundView = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Typography>
                Something Went wrong
            </Typography>
        </Grid>
    )
}

export default NotFoundView
