import Image from "next/image";

import IntroDesktop from "@/assets/bg-intro-desktop.svg";
import IntroMobile from "@/assets/bg-intro-mobile.svg";
import ImagesMockup from "@/assets/image-mockups.png";

export function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-between overflow-hidden bg-gray-50">
      <div className="container mx-auto p-8 lg:p-36">
        <div className="flex flex-col gap-6 md:w-1/2">
          <span className="text-5xl text-slate-700">
            Next generation digital banking
          </span>
          <span className="text-neutral-500">
            Take your financial life inline. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </span>
          <button className="bg-gradient self-start rounded-full bg-black px-6 py-2 font-bold text-white">
            Request Invite
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center lg:self-start">
        <Image
          src={IntroDesktop}
          alt="Intro Desktop"
          className="absolute right-0 top-24 hidden w-[50vw] lg:block"
        />

        <Image
          src={IntroMobile}
          alt="Intro Mobile"
          priority
          className="w-screen object-cover lg:hidden"
        />

        <Image
          src={ImagesMockup}
          alt="Images Mockup"
          className="absolute top-0 lg:right-24 lg:w-[40vw] "
        />
      </div>
    </section>
  );
}
