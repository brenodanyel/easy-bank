import Image from "next/image";

import IconFacebook from "@/assets/icon-facebook.svg";
import IconInstagram from "@/assets/icon-instagram.svg";
import IconPinterest from "@/assets/icon-pinterest.svg";
import IconTwitter from "@/assets/icon-twitter.svg";
import IconYoutube from "@/assets/icon-youtube.svg";

export function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto p-8 md:p-12">
        <div className="space-y-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-4 lg:items-start">
            <div className="space-y-6">
              <p className="text-center text-3xl font-bold lg:text-left">
                easybank
              </p>

              <div className="flex justify-center space-x-4 lg:justify-start">
                <a href="#" className="duration-200 hover:scale-110">
                  <Image
                    src={IconFacebook}
                    alt="Facebook"
                    className="mx-auto md:mx-0"
                  />
                </a>
                <a href="#" className="duration-200 hover:scale-110">
                  <Image
                    src={IconYoutube}
                    alt="Youtube"
                    className="mx-auto md:mx-0"
                  />
                </a>
                <a href="#" className="duration-200 hover:scale-110">
                  <Image
                    src={IconTwitter}
                    alt="Twitter"
                    className="mx-auto md:mx-0"
                  />
                </a>
                <a href="#" className="duration-200 hover:scale-110">
                  <Image
                    src={IconPinterest}
                    alt="Pinterest"
                    className="mx-auto md:mx-0"
                  />
                </a>
                <a href="#" className="duration-200 hover:scale-110">
                  <Image
                    src={IconInstagram}
                    alt="Instagram"
                    className="mx-auto md:mx-0"
                  />
                </a>
              </div>
            </div>

            <div>
              <ul className="space-y-3 text-center lg:text-left">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3 text-center lg:text-left">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center space-y-6 lg:items-end">
              <button className="bg-gradient rounded-full bg-black px-6 py-2 font-bold text-white">
                Request Invite
              </button>
              <p className="text-center md:text-right">
                © Easybank. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
