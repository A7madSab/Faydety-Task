import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const Logo = () => {
    return (
        <Grid item container direction="row">
            <Grid>
                <img src="/logo.png" alt="logo" width="50px" />
            </Grid>
            <Grid>
                <Typography>Faydety</Typography>
                <Typography>فايدتي</Typography>
            </Grid>
        </Grid>
    )
}

export default Logo
