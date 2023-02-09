import Navbar from "./components/Navbar/page";
import HeroSection from "./components/Herosection/page";
import Member from "./components/Member/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Member />
    </div>
  );
}