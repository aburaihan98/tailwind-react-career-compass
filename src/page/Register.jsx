import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { createNewUser, loginWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // register submit
  const handleRegisterSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one Uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one Lowercase letter");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must contain at least one six characters");
      return;
    }

    createNewUser(email, password)
      .then(() => {
        toast.success("Your register successful");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/login");
      })
      .catch(() => toast.error("Enter your valid email!"));
  };

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
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

  return (
    <>
      <Helmet>
        <title>Register | Career Compass</title>
      </Helmet>
      <div className="lg:py-24 py-12 px-6 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
            Register your account
          </h2>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-bold text-2xl mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-gray-600 font-bold text-2xl mb-1"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your photo"
                required
              />
            </div>
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
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            <div>
              <button
                type="submit"
                className="w-full mt-4 font-bold text-xl bg-primaryColor text-white py-4 rounded-lg "
              >
                Register
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
            Allready Have An Account ?{" "}
            <Link to="/login" className="text-primaryColor hover:underline">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
