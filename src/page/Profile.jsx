import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import auth from "../firebase";
import { AuthContext } from "../provider/AuthProvider";

export default function Profile() {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Your profile update successful!");
        const updateUser = { ...auth.currentUser };
        setUser(updateUser);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Helmet>
        <title>My Profile | Career Compass</title>
      </Helmet>
      <div className=" bg-gray-100">
        <div className="w-11/12 m-auto">
          <div className="lg:py-24 py-12 px-6  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-20">
            <div className="lg:p-14 px-8 flex flex-col items-center gap-4  rounded-lg shadow-md">
              <div className="w-40 h-40 ">
                <img
                  className="w-full h-full rounded-full cursor-pointer"
                  src={user?.photoURL ? user?.photoURL : UserImage}
                  alt="User image"
                />
              </div>
              <p className="font-medium text-lg text-gray-600">
                {user?.displayName}
              </p>
              <p className="font-medium text-lg text-gray-600">{user?.email}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
              <form onSubmit={handleUpdateSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-bold text-2xl mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-gray-600 font-bold text-2xl mb-3"
                  >
                    Photo URL
                  </label>
                  <input
                    type="text"
                    id="photo"
                    name="photo"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="w-full px-8 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your photo"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full font-bold text-xl bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
