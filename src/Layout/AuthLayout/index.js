import { useHistory } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { AiOutlineGoogle } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

import BackImg from "../../assets/logo.png"
import Text from "../../components/Text"

const styles = makeStyles((theme) => ({
    btnContainer: {
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
    },
    btnIcon: {
        width: "250px",
        margin: "10px",
        padding: "8px",
        borderRadius: "25px"
    },
    formControl: {
        paddingBottom: "10px"
    },
    underlinedText: {
        textDecoration: "underline",
        color: theme.palette.primary.main,
        textDecorationColor: theme.palette.primary.main
    },
    largeBtn: {
        borderRadius: "25px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px"
    },
    checkbox: {
        color: "#efefef",
    }
}))

const AuthLayout = ({ children }) => {
    const classes = styles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    const history = useHistory()

    return (
        <Container maxWidth="md" style={{ height: "100%" }}>
            <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ height: "100%" }}>
                <Grid item md={5} container direction="column" justify="center">
                    {children}
                </Grid>
                {matches
                    ? <Grid item md={1} container direction="column" justify="center" alignItems="center">
                        <hr style={{ height: "30vh" }} />
                        <Typography color="primary" align="center"><Text tid="OR" /></Typography>
                        <hr style={{ height: "30vh" }} />
                    </Grid>
                    : <Grid item md={1} container direction="row" justify="center" alignItems="center">
                        <hr style={{ width: "26vw" }} />
                        <Typography color="primary" align="center"><Text tid="OR" /></Typography>
                        <hr style={{ width: "26vw" }} />
                    </Grid>
                }
                <Grid style={{ height: "80%" }} item md={5} container direction="column" justify="center" alignItems="center" className={classes.btnContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AiOutlineGoogle />}
                        className={classes.btnIcon}
                    >
                        <Text tid="Login w/ Google" />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<FaFacebookF />}
                        className={classes.btnIcon}
                    >
                        <Text tid="Login w/ Facebook" />
                    </Button>
                </Grid>
                <Grid style={{ height: "80%" }} item md={1} container direction="column" justify="flex-start" alignItems="center">
                    <IconButton onClick={() => history.push("/")}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AuthLayout
