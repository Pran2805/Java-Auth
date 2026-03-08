import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeClosed, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"


function LoginForm() {
    const [eye, setEye] = useState(true);
    return (
        <div className="center-component bg-linear-to-br from-violet-500 to-indigo-300">
            <Card className="w-full max-w-sm shadow-2xl ">
                <CardHeader
                    className="space-y-1 pb-6">
                    <CardTitle
                        className="auth-card-title gradient">
                        Welcome Back
                    </CardTitle>

                    <CardDescription
                        className="text-center">
                        Enter your email below to login to your account
                    </CardDescription>

                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label
                                    htmlFor="email"
                                    className="text-gray-600">
                                    Email Address
                                </Label>
                                <div className="group relative">
                                    <Mail
                                        className="auth-icon-focus border-r-2 pr-1" />
                                    <Input
                                        className="h-10 pl-10 group"
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required

                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="password"
                                        className="text-gray-600">
                                        Password
                                    </Label>

                                    <Link
                                        to="#"
                                        className="text-xs  text-indigo-600 hover:text-indigo-800 hover:underline transition-all"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="auth-icon-focus border-r-2 pr-1" />

                                    <Input
                                        className="h-10 pl-10"
                                        type={eye ? "text" : "password"}
                                        placeholder="**********"
                                        required />
                                    {eye ?
                                        <Eye
                                            className="auth-icon-focus  left-auto! right-2!"
                                            onClick={() => setEye(prev => !prev)} /> :
                                        <EyeClosed
                                            className="auth-icon-focus  left-auto! right-2!"
                                            onClick={() => setEye(prev => !prev)} />}
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full gradient h-11 hover:scale-105 duration-400 active:bg-primary/90" size="lg" >
                        Login
                    </Button>

                    <div className="">
                        <Link
                            to="/register"
                            className=""
                        >
                            <div className="text-xs text-gray-600">

                                Create an Account ? - <span
                                    className="text-blue-800 hover:underline hover:text-violet-700">
                                    Signup
                                </span>
                            </div>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginForm