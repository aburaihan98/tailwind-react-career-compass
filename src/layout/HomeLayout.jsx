import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ServicesCard from "../components/home/ServicesCard";
import Slider from "../components/home/Slider";
import WhoWhatWhy from "../components/home/WhoWhatWhy";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function HomeLayout() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <>
      {/* Slider section  */}
      <Slider />
      <WhoWhatWhy />
      {/* Services section  */}
      <div className="bg-gray-100 pb-12 mt-6">
        <div className="w-11/12 m-auto">
          <h2 className="font-bold text-[40px] lg:mb-12 mb-6 text-center">
            Our Services
          </h2>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {services?.slice(0, 9).map((service) => (
              <ServicesCard key={service?.id} service={service}></ServicesCard>
            ))}
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </>
  );
}
