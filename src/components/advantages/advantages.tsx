import Image from "next/image";

import IconApi from "@/assets/icon-api.svg";
import IconBudgeting from "@/assets/icon-budgeting.svg";
import IconOnboarding from "@/assets/icon-onboarding.svg";
import IconOnline from "@/assets/icon-online.svg";

export function Advantages() {
  const advantages = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: IconOnline,
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: IconBudgeting,
    },
    {
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: IconOnboarding,
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: IconApi,
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto p-8 lg:p-36">
        <div className="space-y-20">
          <div className="space-y-6">
            <span className="text-3xl text-slate-700">
              Why choose Easybank?
            </span>
            <div>
              <p className="text-neutral-500">
                We leverage Open Banking to turn your bank account into your
                financial hub.
              </p>
              <p className="text-neutral-500">
                Control your finances like never before.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:items-start lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="space-y-6">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  className="mx-auto md:mx-0"
                />

                <p className="text-center text-xl text-slate-700 md:text-left">
                  {advantage.title}
                </p>

                <p className="text-center text-neutral-500 md:text-left">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
