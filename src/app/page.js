import Cards from "@/components/cards";
import Slider from "@/components/slider";
import { wait } from "./about/page";
import { fetchServices } from "@/hepler/helper";
import { urlFor } from "@/components/imageUrlBuilder";
export default async function Home() {
  await wait(1000);

  const services = await fetchServices();
  //console.log("Services", services);
  return (
    <>
      {/* Banner image Start */}
      <Slider />
      {/* Banner Image End */}

      {/* Card items Start */}
      <Cards services={services} />

      {/* Card Items End */}
    </>
  );
}
