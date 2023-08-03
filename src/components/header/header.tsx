import Image from "next/image";
import Link from "next/link";

import { Hamburguer } from "./hamburguer";

import Logo from "../../assets/logo.svg";

export function Header() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white py-5">
      <div className="container mx-auto flex items-center justify-between px-5">
        <div>
          <Image src={Logo} alt="Easybank logo" width={192} />
        </div>

        <nav className="hidden lg:block ">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="p-3 text-neutral-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="bg-gradient hidden rounded-full bg-black px-8 py-4 font-bold text-white lg:block">
          Request Invite
        </button>

        <Hamburguer links={links} />
      </div>
    </header>
  );
}
