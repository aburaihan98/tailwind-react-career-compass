import { useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineFeedback } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Details() {
  // hooks and state
  const { serviceId } = useParams();
  const data = useLoaderData();
  const [feedbacks, setFeedbacks] = useState([]);

  // details item find
  const serviceDetails = data.find(
    (service) => service?.id === parseInt(serviceId)
  );

  // handle Feedback
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    setFeedbacks([...feedbacks, feedback]);
    toast.success("Your feedback has been added!");
  };

  const {
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
  } = serviceDetails || {};

  return (
    <>
      <Helmet>
        <title>Details | MindMap Hospital</title>
      </Helmet>
      <div className="w-11/12  max-w-[800px] my-10 m-auto">
        <div className="p-6 rounded-3xl border text-gray-600">
          <div className="mb-6 m-auto">
            <img
              className=" w-full h-full rounded-2xl"
              src={image}
              alt={serviceName}
            />
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-3 ">{serviceName}</h3>
            <p className="font-semibold text-xl mb-2 ">Category: {category}</p>
            <p className="font-semibold text-xl mb-2 ">{description}</p>
            <p className="font-semibold text-xl mb-2 ">Price: ${pricing}</p>
            <p className="font-semibold text-xl mb-2 ">Duration: {duration}</p>
            <p className="font-semibold text-xl mb-2 ">
              Counselor: {counselor}
            </p>
            <div className="flex items-center gap-4 ">
              <p className="font-bold text-lg">Rating:</p>
              <div className="flex gap-3">
                <ReactStars
                  count={5}
                  size={24}
                  value={rating}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-3xl border text-gray-600 mt-6">
          <form onSubmit={handleFeedbackSubmit}>
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <input
                type="text"
                id="feedback"
                name="feedback"
                className="w-full  px-8 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Enter your feedback"
                required
              />
              <button
                type="submit"
                className="btn flex items-center gap-4 rounded-3xl bg-primaryColor text-white font-extrabold text-lg"
              >
                <MdOutlineFeedback className="text-2xl" />
                Feedback
              </button>
            </div>
            <label
              htmlFor="feedback"
              className="block text-center text-gray-600 font-bold text-2xl my-5"
            >
              Your feedback
            </label>
            <div className=" space-y-3">
              {feedbacks?.map((feedback, index) => (
                <p
                  key={index}
                  className="p-3 border rounded-md font-semibold text-lg"
                >
                  {feedback}
                </p>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
