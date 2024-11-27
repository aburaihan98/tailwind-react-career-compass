import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithGoogle, loginUser } = useContext(AuthContext);
  const [showButton, setShowButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // email password  login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    loginUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Your login successful");
      })
      .catch(() => toast.error("Your email or password is incorrect!"));
  };

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success(" Your login successful by Google");
      })
      .catch(() => {
        toast.error("Enter your valid email");
      });
  };

  // handle Show Password
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowButton(!showButton);
  };

  // handle Forgot Password
  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <>
      <Helmet>
        <title>Login | Career Compass</title>
      </Helmet>
      <div className="lg:py-24 py-12 px-6 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
            Login your account
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-bold text-2xl mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-600 mb-1 font-bold text-2xl"
              >
                Password
              </label>
              <input
                type={showButton ? "text" : "password"}
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Enter your password"
                required
              />
              <button onClick={handleShowPassword}>
                {showButton ? (
                  <FaEye className=" absolute  text-2xl  top-1/2 right-3 transform translate-y-1/2" />
                ) : (
                  <FaEyeSlash className=" absolute  text-2xl  top-1/2 right-3 transform translate-y-1/2" />
                )}
              </button>
            </div>
            <label className="">
              <button
                onClick={handleForgotPassword}
                className="font-bold text-xl text-gray-600"
              >
                <div className="my-1">Forgot password?</div>
              </button>
            </label>
            <div>
              <button
                type="submit"
                className="w-full font-bold text-xl bg-primaryColor text-white py-4 rounded-lg "
              >
                Login
              </button>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="w-full p-3 mt-4 border border-primaryColor rounded-md flex items-center justify-center gap-2 text-primaryColor font-semibold text-xl mb-2"
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center text-gray-600 mt-8 font-bold text-2xl">
            Don't have an account?{" "}
            <Link to="/register" className="text-primaryColor hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
