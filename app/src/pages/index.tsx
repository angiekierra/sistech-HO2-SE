import Image from "next/image";
import Hero from "./hero";
import JoinUs from "./join-us";
import AboutUs from "./about-us";
import Features from "./features";
import Courses from "./courses";
import Blog from "./blog";
import QNA from "./qna";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-0 bg-white"
    >
      <Hero></Hero>
      <JoinUs></JoinUs>
      <AboutUs></AboutUs>
      <Features></Features>
      <Courses></Courses>
      <Blog></Blog>
      <QNA></QNA>
    </main>
  );
}
