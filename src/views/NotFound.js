import { useHistory } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: theme.palette.primary.light
    }
}))

const NotFoundView = () => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
            <Typography>
                Something Went wrong
            </Typography>
            <Button variant="contained" onClick={() => history.goBack()}>
                Go Back
            </Button>
        </Grid>
    )
}

export default NotFoundView
