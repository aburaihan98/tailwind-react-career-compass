export default function WhoWhatWhy() {
  return (
    <div className="w-11/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8">
      {/* Who We Are */}
      <div className="text-center  border p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">
          <i className="fas fa-users"></i>
        </div>
        <h3 className="text-xl font-bold mb-4">Who We Are?</h3>
        <p className="text-gray-600 mb-6">
          We are the leading provider of career consulting services in United
          States/Hong Kong. We offer unparalleled services to students and
          professionals from all walks of life who need help on their career
          selection.
        </p>
      </div>

      {/* What We Do */}
      <div className="text-center  border p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">
          <i className="fas fa-briefcase"></i>
        </div>
        <h3 className="text-xl font-bold mb-4">What We Do?</h3>
        <p className="text-gray-600 mb-6">
          With CareerPath Solutions, we provide holistic, flexible, and personal
          career counseling to empower individuals in their career choices and
          work setting. We help people find success in their career and
          well-being.
        </p>
      </div>

      {/* Why Should You Choose Us? */}
      <div className="text-center  border p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">
          <i className="fas fa-handshake"></i>
        </div>
        <h3 className="text-xl font-bold mb-4">Why Should You Choose Us?</h3>
        <p className="text-gray-600 mb-6">
          With Pathfinder Careers, our expert coaches have helped thousands
          achieve success in their careers and well-being. We offer personalized
          guidance for career transitions, job interviews, and workplace
          challenges.
        </p>
      </div>
    </div>
  );
}
