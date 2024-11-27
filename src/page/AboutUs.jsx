import { Helmet } from "react-helmet";
import T1 from "../assets/testimonials/t1.jpeg";
import T2 from "../assets/testimonials/t2.jpeg";
import T3 from "../assets/testimonials/t3.jpeg";
import T4 from "../assets/testimonials/t4.jpeg";
import T5 from "../assets/testimonials/t5.jpeg";
import T6 from "../assets/testimonials/t6.jpeg";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Career Compass</title>
      </Helmet>
      <div className="bg-gray-100 lg:py-24 py-12 px-6">
        <div className="w-11/12 m-auto ">
          <div>
            <h2 className="text-2xl font-bold border-b border-dotted border-gray-400 pb-2">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 font-medium">
              We are the leading provider of career consulting services in
              United States/Hong Kong. We offer unparalleled services to
              students and professionals from all walks of life who need help on
              their career selection, job interviews, or work environment.
            </p>
            <p className="mt-4 text-gray-600 font-medium">
              Our team of high-caliber career coaches have extensive experience
              and are committed to optimizing the potentials of our clients,
              helping them embark on a fulfilling career.
            </p>
            <div className=" py-10">
              <div className="container mx-auto ">
                <h2 className="text-2xl font-bold  border-b border-dotted border-gray-400 pb-2">
                  Testimonials
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="flex space-x-4">
                    <img
                      src={T1}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <img
                      src={T2}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <img
                      src={T3}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <img
                      src={T4}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <img
                      src={T5}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <img
                      src={T6}
                      alt="Boy Doctor"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-gray-600 font-medium">
                      We are the leading provider of career consulting services
                      in United States/Hong Kong. We offer unparalleled services
                      to students and professionals from all walks of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
