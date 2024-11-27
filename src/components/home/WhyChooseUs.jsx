import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/whyChooseUs.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => toast.error(error.message));
  }, []);
  return (
    <div className="w-11/12 m-auto py-10 lg:pb-20 pb-10">
      <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
        {items.map((item) => (
          <WhyChooseUsCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}
