import Loading from "@/components/Loading"
import { lazy, Suspense } from "react"
import { Helmet } from "react-helmet-async"
const RegisterForm = lazy(() => import("@/components/RegisterForm"))

function Register() {

    return (
        <div>
            <Helmet>
                <title>Signup | Java Auth Learning</title>
                <meta
                    name="description"
                    content="Signup page connected to Java authentication backend."
                />
            </Helmet>
            <Suspense fallback={<Loading />}>

                <RegisterForm />
            </Suspense>
        </div>
    )
}

export default Register
