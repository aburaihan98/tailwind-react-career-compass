import React from "react";

export default function WhyChooseUsCard({ item }) {
  return (
    <div className="bg-primaryColor border border-gray-300 p-6 rounded-md shadow-md text-center hover:shadow-lg transition">
      <img
        src={item.icon}
        alt={item.title}
        className="mx-auto mb-4 w-12 h-12 rounded-full"
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-100">{item.title}</h3>
      <p className="text-gray-100 text-sm">{item.description}</p>
    </div>
  );
}
