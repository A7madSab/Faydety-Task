import { Suspense, Fragment, lazy } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import LoadingScreen from "../screens/LoadingScreen"
import AuthLayout from "../Layout/AuthLayout"

export const renderRoutes = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Switch>
                {routes.map((route, key) => {
                    const Guard = route.guard || Fragment
                    const Layout = route.layout || Fragment
                    const Component = route.component

                    return (
                        <Route
                            key={key}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        <Component {...props} />
                                    </Layout>
                                </Guard>
                            )}
                        />
                    )
                })}
            </Switch>
        </Suspense>
    )
}

const routes = [
    {
        exact: true,
        path: "/",
        component: lazy(() => import("../views/Home"))
    },
    {
        exact: true,
        path: "/signin/:lang",
        layout: AuthLayout,
        component: lazy(() => import("../views/SignIn"))
    },
    {
        exact: true,
        path: "/signup/:lang",
        layout: AuthLayout,
        component: lazy(() => import("../views/SignUp"))
    },
    {
        exact: true,
        path: "/forgot-password/:lang",
        layout: AuthLayout,
        component: lazy(() => import("../views/ForgotPassword"))
    },
    {
        exact: true,
        path: "/reset-password",
        component: lazy(() => import("../views/ResetPassword"))
    },
    {
        exact: true,
        path: "/404",
        component: lazy(() => import("../views/NotFound"))
    },
    {
        component: () => <Redirect to="/404" />
    }
]

export default routes