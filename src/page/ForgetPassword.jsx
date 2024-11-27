import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function ForgetPassword() {
  const { passwordReset } = useContext(AuthContext);
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email);

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    passwordReset(email)
      .then(() => {
        toast.success("Password reset successful");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Forgot password | Career Compass</title>
      </Helmet>
      <div className="lg:py-24 py-12 px-6 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
            Forgot password
          </h2>
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-bold text-2xl mb-3"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full font-bold text-xl bg-primaryColor text-white py-4 rounded-lg "
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
