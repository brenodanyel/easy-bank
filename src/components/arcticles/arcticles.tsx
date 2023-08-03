import Image from "next/image";

import ImageConfetti from "@/assets/image-confetti.jpg";
import ImageCurrency from "@/assets/image-currency.jpg";
import ImagePlane from "@/assets/image-plane.jpg";
import ImageRestaurant from "@/assets/image-restaurant.jpg";

export function Arcticles() {
  const advantages = [
    {
      by: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
      icon: ImageCurrency,
    },
    {
      by: "By Wilson Hutton",
      title: "Threat your self without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending  and set realistic limits each month. That means you ...",
      icon: ImageRestaurant,
    },
    {
      by: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
      icon: ImagePlane,
    },
    {
      by: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      icon: ImageConfetti,
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto p-8 lg:p-36">
        <div className="space-y-10">
          <span className="text-3xl text-slate-700">Latest Articles</span>

          <div className="grid grid-cols-1 items-center gap-10 md:items-start lg:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage) => (
              <a
                key={advantage.title}
                className="group overflow-hidden rounded-md border bg-white shadow-sm duration-300 hover:scale-105"
                href="#"
              >
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  className="mx-auto h-56 w-full object-cover duration-200 group-hover:scale-105 md:mx-0"
                />
                <div className="space-y-3 p-5">
                  <p className="text-neutral-500">{advantage.by}</p>

                  <p className="text-center text-xl text-slate-700 md:text-left">
                    {advantage.title}
                  </p>

                  <p className="text-center text-neutral-500 md:text-left">
                    {advantage.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
