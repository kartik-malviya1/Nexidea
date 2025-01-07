/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff } from "lucide-react"
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp"

// type Props = {
//   code: string
//   setCode: React.Dispatch<React.SetStateAction<string>>
// }

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  if (!isLoaded) {
    return null
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })

      setPendingVerification(true)
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      setError(err.errors[0].message)
    }
  }

  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault()
    if (!isLoaded) {
      return
    }
    router.push("/welcome")
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2))
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/dashboard")
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      setError(err.errors[0].message)
    }
  }

  return (
    <div className="flex items-center justify-center translate-y-1/2 bg-background">
      <Card className="w-full max-w-md -mb-28">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign Up for <span className="text-purple-600">Nexidea</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!pendingVerification ? (
            <form onSubmit={submit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800"
              >
                Sign Up
              </Button>
            </form>
          ) : (
            <form onSubmit={onPressVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <InputOTP
                  id="code"
                  value={code}
                  onChange={(code) => setCode(code)}
                  placeholder="Enter verification code"
                  required
                  maxLength={6}
                >
                  <div className="flex gap-3">
                    <div>
                      <InputOTPSlot index={0} />
                    </div>
                    <div>
                      <InputOTPSlot index={1} />
                    </div>
                    <div>
                      <InputOTPSlot index={2} />
                    </div>
                    <div>
                      <InputOTPSlot index={3} />
                    </div>
                    <div>
                      <InputOTPSlot index={4} />
                    </div>
                    <div>
                      <InputOTPSlot index={5} />
                    </div>
                  </div>
                </InputOTP>
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Verify Email
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-primary hover:underline hover:text-purple-600"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
