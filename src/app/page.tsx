import { Advantages } from "@/components/advantages/advantages";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Arcticles } from "../components/arcticles/arcticles";
import { Footer } from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Arcticles />
      <Footer />
    </>
  );
}
