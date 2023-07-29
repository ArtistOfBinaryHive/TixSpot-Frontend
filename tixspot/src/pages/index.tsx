import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { assets } from './images'
import Section2 from "@/components/section2/section2";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col-reverse items-center justify-around md:flex-row lg:flex-row">
        <div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Beautifully designed components <br className="hidden sm:inline" />
              built with Radix UI and Tailwind CSS.
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste
              into your apps. Free. Open Source. And Next.js 13 Ready.
            </p>
          </div>
          <div className="mt-5">
            <Input type="email" placeholder="Email" className="w-[30%]" />
          </div>
        </div>
        <div>
          <Image
            src={assets.section1}
            alt=""
            width={400}
            height={400}
            className="rounded-lg"
            objectFit="cover"
          />
        </div>
      </div>
      {/* image section */}
      <div className="overflow-hidden">
        <Section2 />
      </div>



      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
    </section >
  );
}
