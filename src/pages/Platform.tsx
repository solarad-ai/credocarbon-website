import Lifecycle from "../components/sections/Lifecycle";
import MRV from "../components/sections/MRV";
import AISection from "../components/sections/AISection";
import MarketOps from "../components/sections/MarketOps";
import Registries from "../components/sections/Registries";

export default function Platform() {
  return (
    <>
      <Lifecycle />
      <MRV />
      <Registries />
      <AISection />
      {/* <MarketOps /> */}
      
    </>
  );
}
