import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupForm } from "@/components/auth/signup/form";
import SigninPage from "@/components/auth/signin";

export default function IndexPage() {
  return (
    <>
      <div>
        <SigninPage />
      </div>
    </>
  );
}
