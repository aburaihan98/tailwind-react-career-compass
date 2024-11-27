import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import UserImage from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";

export default function NavBar() {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.warning("Your logout successful");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="w-11/12 m-auto navbar px-0 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" bg-primaryColor space-y-1 font-medium text-lg text-[#706F6F] menu menu-sm dropdown-content  rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn bg-white" : "btn bg-primaryColor"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "btn bg-white" : "btn bg-primaryColor"
              }
            >
              <li>About Us</li>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn bg-white" : "btn bg-primaryColor"
              }
            >
              <li>Register</li>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "btn bg-white" : "btn bg-primaryColor"
              }
            >
              <li>My Profile</li>
            </NavLink>
          </ul>
        </div>
        <Link to="/">
          <button className="font-bold lg:text-3xl">
            <h2>Career Compass</h2>
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 menu menu-horizontal px-1 font-semibold text-lg text-[#706F6F]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn bg-white" : "btn bg-primaryColor text-white"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "btn bg-white" : "btn bg-primaryColor text-white"
            }
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "btn bg-white" : "btn bg-primaryColor text-white"
            }
          >
            <li>My Profile</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-12 h-12  relative group">
          <img
            className="w-full h-full rounded-full cursor-pointer"
            src={user?.photoURL ? user?.photoURL : UserImage}
            alt="User image"
          />
          <p
            id="displayName"
            className="absolute top-1/2 -translate-y-1/2 right-16  whitespace-nowrap hidden group-hover:block font-medium text-lg text-white "
          >
            {user?.displayName}
          </p>
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-primaryColor text-white hover:bg-white hover:text-primaryColor ml-2.5"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="ml-2.5">
            <button className="btn bg-primaryColor text-white hover:bg-white hover:text-primaryColor">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
