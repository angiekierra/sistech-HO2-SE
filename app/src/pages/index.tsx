import Image from "next/image";
import Hero from "./hero";
import JoinUs from "./join-us";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-0 bg-white"
    >
      <Hero></Hero>
      <JoinUs></JoinUs>
    </main>
  );
}
