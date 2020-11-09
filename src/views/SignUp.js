import { useState } from "react"
import { Link } from "react-router-dom"

import * as Yup from "yup"
import { Formik } from "formik"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { AiOutlineGoogle } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

import useIsMountedRef from "../hooks/useIsMountedRef"
import BackImg from "../assets/logo.png"

const styles = makeStyles((theme) => ({
    btnContainer: {
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "80%"
    },
    btnIcon: {
        width: "300px",
        margin: "10px",
        padding: "5px",
        borderRadius: "25px"
    }
}))


const SignUp = () => {
    const classes = styles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    const isMountedRef = useIsMountedRef()
    const [form, setForm] = useState({ showPassword: false, showPasswordRepeat: false })

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

    return (
        <Container style={{ height: "100%" }}>
            <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100%" }}>
                <Grid item md={5} container direction="column" justify="center">
                    <Typography variant="h1" color="secondary">Create Account</Typography>
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
                            name: Yup.string().max(255).required("Name is required."),
                            email: Yup.string().email("Must be a valid email.").max(255).required("Email is required."),
                            password: Yup.string().max(255).required("Password is required."),
                            rePassword: Yup.string().max(255).required("Re-Password is required.").oneOf([Yup.ref("password"), null], "Passwords must match"),
                            termsConditon: Yup.boolean().oneOf([true], "Must Accept Terms of Service"),
                        })}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <FormControl fullWidth>
                                    <Typography color="secondary">Full Name</Typography>
                                    <TextField
                                        fullWidth
                                        autoFocus
                                        type="text"
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
                                    <Typography color="secondary">Email</Typography>
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
                                    <Typography>Password</Typography>
                                    <OutlinedInput
                                        fullWidth
                                        label={null}
                                        labelWidth={0}
                                        name="password"
                                        margin="none"
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
                                    <FormHelperText color="error">
                                        Passwords must be at least 8 characters and include a capital letter, number and symbol.
                                    </FormHelperText>
                                </FormControl>

                                <FormControl fullWidth>
                                    <Typography>Re-enter Password</Typography>
                                    <OutlinedInput
                                        fullWidth
                                        label={null}
                                        labelWidth={0}
                                        name="rePassword"
                                        margin="none"
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
                                    label={<Typography align="center">I have read and agree the <Link to="/terms">
                                        <span style={{ color: "green" }}>
                                            terms & conditions
                                        </span>
                                    </Link>
                                    </Typography>}
                                    control={
                                        <Checkbox
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

                                <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                    Create my Free Account
                        </Button>

                                <Typography align="center">
                                    Already have an account? <Link to="/signin">Login</Link>
                                </Typography>

                            </form>
                        )}
                    </Formik>
                </Grid>
                {matches
                    ? <Grid item md={1} container direction="column" justify="center" alignItems="center">
                        <hr style={{ height: "18vh" }} />
                        <Typography color="primary" align="center">OR</Typography>
                        <hr style={{ height: "18vh" }} />
                    </Grid>
                    : <Grid item md={1} container direction="row" justify="center" alignItems="center">
                        <hr style={{ width: "26vw" }} />
                        <Typography color="primary" align="center">OR</Typography>
                        <hr style={{ width: "26vw" }} />
                    </Grid>
                }
                <Grid style={{ height: "100%" }} item md={6} container direction="column" justify="center" alignItems="center" className={classes.btnContainer}>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<AiOutlineGoogle />}
                            className={classes.btnIcon}
                        >
                            Login w/ Google
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<FaFacebookF />}
                            className={classes.btnIcon}
                        >
                            Login w/ Facebook
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUp

// < Container >
// <Grid container direction="row" justify="center" alignItems="center">
//     <Grid item xs={6}>
//         left
//             </Grid>
//     <Grid item xs={6}>
//         right
//             </Grid>
// </Grid>
//     </Container >

// {/* <Input
// style={{ border: "1px", borderStyle: "solid", padding: "10px", borderRadius:"5px" }}
// fullWidth
// autoComplete="on"
// value={form.old}
// type={form.showPasswordOld ? "text" : "password"}
// onChange={e => setForm({ ...form, old: e.target.value })}
// endAdornment={
//     <InputAdornment>
//         <IconButton
//             aria-label="toggle password visibility"
//             onClick={() => setForm({ ...form, showPasswordOld: !form.showPasswordOld })}
//         >
//             {form.showPasswordOld ? <Visibility /> : <VisibilityOff />}
//         </IconButton>
//     </InputAdornment>
// }
// labelWidth={70}
// /> */}



// {/* <Typography>Re-Enter Password</Typography>
// <TextField
//     error={Boolean(touched.rePassword && errors.rePassword)}
//     fullWidth
//     helperText={touched.rePassword && errors.rePassword}
//     margin="normal"
//     name="subject"
//     onBlur={handleBlur}
//     onChange={handleChange}
//     type="Text"
//     value={values.rePassword}
//     variant="outlined"
// /> */}








// {/* <Typography>Email</Typography>
// <TextField
//     error={Boolean(touched.email && errors.email)}
//     fullWidth
//     autoFocus
//     helperText={touched.email && errors.email}
//     margin="normal"
//     name="email"
//     onBlur={handleBlur}
//     onChange={handleChange}
//     type="email"
//     value={values.email}
//     variant="outlined"
// />
// <Typography>Password</Typography>
// <TextField
//     error={Boolean(touched.password && errors.password)}
//     fullWidth
//     helperText={touched.password && errors.password}
//     margin="normal"
//     name="subject"
//     onBlur={handleBlur}
//     onChange={handleChange}
//     type="Text"
//     value={values.password}
//     variant="outlined"
//     helperText="Passwords must be at least 8 characters and include a capital letter, number and symbol."
// />

// <FormControl fullWidth>
//     <Typography>Re-Enter Password</Typography>
//     <OutlinedInput
//         error={Boolean(touched.rePassword && errors.rePassword)}
//         fullWidth
//         label="Re-Enter Password"
//         autoComplete="on"
//         labelWidth={0}
//         label={null}
//         value={values.rePassword}
//         type={form.showPasswordOld ? "text" : "password"}
//         onChange={e => setForm({ ...form, old: e.target.value })}
//         endAdornment={
//             <InputAdornment>
//                 <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={() => setForm({ ...form, showPasswordOld: !form.showPasswordOld })}
//                 >
//                     {form.showPasswordOld ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//             </InputAdornment>
//         }
//     />
//     <FormHelperText>
//         {touched.rePassword
//             ? errors.rePassword
//             : "Passwords must be at least 8 characters and include a capital letter, number and symbol."}
//     </FormHelperText>
// </FormControl> */}