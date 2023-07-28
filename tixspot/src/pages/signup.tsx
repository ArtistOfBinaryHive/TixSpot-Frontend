import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupForm } from "@/components/auth/signup/form";
import SignupPage from "@/components/auth/signup";

export default function IndexPage() {
  return (
    <>
      <div>
        <SignupPage />
      </div>
    </>
  );
}
