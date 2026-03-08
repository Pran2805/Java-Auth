import Loading from "@/components/Loading"
import { lazy, Suspense } from "react"
import { Helmet } from "react-helmet-async"
const LoginForm = lazy(() => import("@/components/LoginForm"))

function Login() {
    return (
        <div>
            <Helmet>
                <title>Login | Java Auth Learning</title>
                <meta
                    name="description"
                    content="Login page connected to Java authentication backend."
                />
            </Helmet>

            <Suspense fallback={<Loading />}>
                <LoginForm />
            </Suspense>
        </div>
    )
}

export default Login
