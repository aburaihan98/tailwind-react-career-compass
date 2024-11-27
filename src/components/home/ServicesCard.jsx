import { Link } from "react-router-dom";

export default function ServicesCard({ service }) {
  const { id, image, serviceName, category, pricing, counselor } =
    service || {};

  return (
    <div className=" p-5 border rounded-2xl bg-white text-gray-600">
      <div className="mb-6 h-[181px]">
        <img className="w-full h-full rounded-xl" src={image} alt="image" />
      </div>
      <h3 className="font-semibold text-2xl mb-3">{serviceName}</h3>
      <p className="font-medium text-xl mb-2">Category: {category}</p>
      <p className="font-medium text-xl mb-2">Price: {pricing}</p>
      <p className="font-medium text-xl mb-4">Counselor: {counselor}</p>
      <Link to={`/serviceDetails/${id}`}>
        <button className="py-[13px] px-[22px] border border-primaryColor rounded-[32px]  text-primaryColor font-extrabold text-lg hover:bg-primaryColor hover:text-white">
          Learn More
        </button>
      </Link>
    </div>
  );
}
