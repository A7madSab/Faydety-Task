import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import * as Yup from "yup"
import { Formik } from "formik"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"

import useIsMountedRef from "../hooks/useIsMountedRef"
import useSettings from "../hooks/useSettings"
import Text from "../components/Text"

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
        color: "#efefef",
    }
}))

const SignUp = ({ match }) => {
    const classes = styles()
    const isMountedRef = useIsMountedRef()
    const [form, setForm] = useState({ showPassword: false, showPasswordRepeat: false })
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
            <Typography variant="h1" color="secondary"><Text tid="Create Account" /></Typography>
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
                            <Typography color="secondary"><Text tid="Full Name" /></Typography>
                            <TextField
                                fullWidth
                                autoFocus
                                type="text"
                                size="small"
                                name="name"
                                margin="none"
                                variant="outlined"
                                color="secondary"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                helperText={touched.name && errors.name}
                                error={Boolean(touched.name && errors.name)}
                            />
                        </FormControl>

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
                                helperText={touched.email && errors.email}
                                error={Boolean(touched.email && errors.email)}
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
                                {touched.password && errors.password}
                            </FormHelperText>
                            <FormHelperText color="error" className={classes.formHelperText}>
                                <Text tid="Passwords must be at least 8 characters and include a capital letter, number and symbol." />
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <Typography color="secondary"><Text tid="Re-enter Password" /></Typography>
                            <OutlinedInput
                                fullWidth
                                label={null}
                                labelWidth={0}
                                name="rePassword"
                                margin="dense"
                                color="secondary"
                                autoComplete="on"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.rePassword}
                                error={Boolean(touched.rePassword && errors.rePassword)}
                                type={form.showPasswordRepeat ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setForm({ ...form, showPasswordRepeat: !form.showPasswordRepeat })}
                                        >
                                            {form.showPasswordRepeat ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText style={{ marginLeft: "14px", color: "red" }}>
                                {touched.password && errors.rePassword}
                            </FormHelperText>
                        </FormControl>

                        <FormControlLabel
                            label={<Typography align="center"><Text tid="I have read and agree the" /> {" "}
                                <Link className={classes.underlinedText} to="/terms">
                                    <Text tid="terms & conditions" />
                                </Link>
                            </Typography>}
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
                        <FormHelperText style={{ marginLeft: "14px", color: "red" }}>
                            {touched.termsConditon && errors.termsConditon}
                        </FormHelperText>

                        {errors.submit && <Box mt={3}>
                            <FormHelperText error>
                                {errors.submit}
                            </FormHelperText>
                        </Box>}

                        <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" className={classes.largeBtn}>
                            <Text tid="Create my Free Account" />
                        </Button>

                        <Typography align="center">
                            <Text tid="Already have an account?" /> <Link className={classes.underlinedText} to={`/signin/${match.params.lang}`}><Text tid="Login" /></Link>
                        </Typography>

                    </form>
                )}
            </Formik>
        </>
    )
}

export default SignUp
