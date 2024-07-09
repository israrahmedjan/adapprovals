import Cards from "@/components/cards";
import Slider from "@/components/slider";
import { wait } from "./about/page";
export default async function Home() {
  await wait(1000);
  return (
    <>
      {/* Banner image Start */}
      <Slider />
      {/* Banner Image End */}

      {/* Card items Start */}
      <Cards />

      {/* Card Items End */}
    </>
  );
}
