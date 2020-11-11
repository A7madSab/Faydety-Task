import { useEffect } from "react"

import * as Yup from "yup"
import { Formik } from "formik"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
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
        color: "#efefef"
    }
}))

const ForgotPassword = ({ match }) => {
    const classes = styles()
    const isMountedRef = useIsMountedRef()
    const { saveSettings } = useSettings()

    useEffect(() => {
        console.log("match.params.langmatch.params.langmatch.params.lang", match.params.lang)
        match.params.lang.toLowerCase() === "en"
            ? saveSettings({ direction: "ltr", language: "English" })
            : saveSettings({ direction: "rtl", language: "Arabic" })
    }, [])

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
        <>
            <Typography variant="h1" color="secondary"><Text tid="Forget Your Password" /></Typography>
            <Formik
                onSubmit={onFormSubmit}
                initialValues={{
                    email: "",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email(<Text tid="Must be a valid email." />).max(255).required(<Text tid="Email is required." />),
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
                                helperText={touched.email && errors.email}
                                error={Boolean(touched.email && errors.email)}
                            />
                        </FormControl>
                        <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" className={classes.largeBtn}>
                            <Text tid="Send Reset Link" />
                        </Button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ForgotPassword
