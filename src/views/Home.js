import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import InputAdornment from "@material-ui/core/InputAdornment"
import { makeStyles } from "@material-ui/core/styles"
import AccountCircle from '@material-ui/icons/AccountCircle';

import Navbar from "../components/Navbar"

const styles = makeStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white
            }
        }
    }
}))

const Home = () => {
    const classes = styles()
    return (
        <Grid>
            <Navbar />
            <Grid container>
                <Grid item xs={6}>
                    <Typography>Personal Loans</Typography>
                    <Typography>find and compare the best deals on personal loans</Typography>
                </Grid>

                <Grid item xs={6}>
                    <img src="/imgs/personal.svg" alt="person" width="45%" />
                </Grid>
            </Grid>

            <Grid container>
                <TextField
                    id="standard-full-width"
                    label="Loan amount"
                    style={{ margin: 8 }}
                    placeholder="e.g. 100,000"
                    // helperText="Full width!"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                 <TextField
                    id="standard-full-width"
                    label="Loan Duration"
                    style={{ margin: 8 }}
                    placeholder="e.g. 100,000"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                
            </Grid>
        </Grid>
    )
}

export default Home
