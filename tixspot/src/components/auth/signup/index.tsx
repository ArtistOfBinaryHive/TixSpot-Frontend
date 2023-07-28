import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignupForm } from "./form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignupPage() {
  return (
    <>
      <div className="container relative hidden h-[calc(100vh-65px)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex rounded-r-3xl">
          <div className="absolute inset-0 bg-slate-900 rounded-r-3xl" />
          <Image
            src="/signup-bg2.jpg"
            alt="background image"
            fill
            className="rounded-r-3xl opacity-50 "
          />
          <div className="relative z-20 mt-32 space-y-6 pl-48 pr-24">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
              Register Your Account
            </h1>

            {/* TODO: change sub title */}
            <blockquote className="space-y-2">
              <h2 className="text-4xl tracking-tight">
                Display your creation and get projects
              </h2>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-8">
              <h2 className="text-5xl font-bold tracking-tight">Sign Up</h2>
              {/* <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p> */}
            </div>
            <SignupForm />
            {/* TODO: add href for the T&C */}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
