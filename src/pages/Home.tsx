import Hero from "../components/sections/Hero";
import WhatWeAre from "../components/sections/WhatWeAre";
import ExploreDashboard from "../components/sections/ExploreDashboard";
import Roles from "../components/sections/Roles";
import Trust from "../components/sections/Trust";
import CallToAction from "../components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <ExploreDashboard />
      <Roles />
      <Trust />
      <CallToAction />
    </>
  );
}
