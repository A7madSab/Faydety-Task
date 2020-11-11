import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import * as Yup from "yup"
import { Formik } from "formik"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import CancelIcon from "@material-ui/icons/Cancel"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"

import Text from "../components/Text"
import useSettings from "../hooks/useSettings"
import useIsMountedRef from "../hooks/useIsMountedRef"

const styles = makeStyles((theme) => ({
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
        color: "#efefef"
    }
}))

const SignIn = ({ match }) => {
    const classes = styles()
    const [form, setForm] = useState({ showPassword: false, showPasswordRepeat: false })
    const isMountedRef = useIsMountedRef()
    const { saveSettings } = useSettings()

    const onFormSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log("onFormSubmitonFormSubmitonFormSubmitonFormSubmit", values)
        try {
            if (isMountedRef.current) {
                setStatus({ success: true, name: "", email: "", subject: "", message: "" })
                setSubmitting(false)
            }
        } catch (err) {
            if (isMountedRef.current) {
                setStatus({ success: false })
                setErrors({ submit: err.message })
                setSubmitting(false)
            }
        }
    }

    useEffect(() => {
        console.log("match.params.langmatch.params.langmatch.params.lang", match.params.lang)
        match.params.lang.toLowerCase() === "en"
            ? saveSettings({ direction: "ltr", language: "English" })
            : saveSettings({ direction: "rtl", language: "Arabic" })
    }, [])

    return (
        <>
            <Typography variant="h1" color="secondary"><Text tid="Your Account" /></Typography>
            <Formik
                onSubmit={onFormSubmit}
                initialValues={{
                    name: "Salah Salah Salah",
                    email: "",
                    password: "",
                    rePassword: "",
                    termsConditon: false,
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required(<Text tid="Name is required." />),
                    email: Yup.string().email(<Text tid="Must be a valid email." />).max(255).required(<Text tid="Email is required." />),
                    password: Yup.string().max(255).required(<Text tid="Password is required." />),
                    rePassword: Yup.string().max(255).required(<Text tid="Re-Password is required." />).oneOf([Yup.ref("password"), null], <Text tid="Passwords must match." />),
                    termsConditon: Yup.boolean().oneOf([true], <Text tid="Must Accept Terms of Service." />)
                })}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <Typography color="secondary"><Text tid="Email" /></Typography>
                            <TextField
                                fullWidth
                                autoFocus
                                type="text"
                                name="email"
                                margin="none"
                                variant="outlined"
                                color="secondary"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                helperText={touched.email}
                                error={Boolean(touched.email && errors.email && <Grid container direction="row" alignItems="center">
                                    <CancelIcon style={{ paddingRight: "5px" }} fontSize="small" />{errors.email}
                                </Grid>)}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography color="secondary"><Text tid="Password" /></Typography>
                            <OutlinedInput
                                fullWidth
                                label={null}
                                labelWidth={0}
                                name="password"
                                margin="dense"
                                color="secondary"
                                autoComplete="on"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                error={Boolean(touched.password && errors.password)}
                                type={form.showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setForm({ ...form, showPassword: !form.showPassword })}
                                        >
                                            {form.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText style={{ marginLeft: "14px", color: "red" }}>
                                {errors.password && <Grid container direction="row" alignItems="center">
                                    <CancelIcon style={{ paddingRight: "5px" }} fontSize="small" />{errors.password}
                                </Grid>}
                            </FormHelperText>
                        </FormControl>
                        <Grid container justify="space-between" alignItems="center">
                            <FormControlLabel
                                label={<Typography align="center" color="primary"><Text tid="Remember me" /></Typography>}
                                control={
                                    <Checkbox
                                        color="primary"
                                        className={classes.checkbox}
                                        value={values.termsConditon}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="termsConditon"
                                    />}
                            />
                            <Link to={`/forgot-password/${match.params.lang}`}>
                                <Typography className={classes.underlinedText}>
                                    <Text tid="Forgotten password?" />
                                </Typography>
                            </Link>
                        </Grid>

                        <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" className={classes.largeBtn}>
                            <Text tid="Log In" />
                        </Button>
                        <Typography align="center">
                            <Text tid="Don't Have An Account ?" />  <Link to={`/signup/${match.params.lang}`} className={classes.underlinedText}><Text tid="Sign Up" /></Link>
                        </Typography>
                    </form>
                )}

            </Formik>
        </>
    )
}

export default SignIn
