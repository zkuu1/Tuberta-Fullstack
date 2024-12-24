import { Navigate, Link } from "react-router-dom";

export default function Signup () {

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="bg-MAIN h-screen flex items-center justify-center">
          <div className="flex flex-col items-center p-6 w-1/3 bg-white rounded-lg shadow-lg">
            <p className="text-PrimFont font-lexend text-3xl mb-6 ">Sign up to Tuberta</p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 w-full"
            >
                <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
                required
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-6 bg-PrimFont text-black rounded-md hover:bg-HOVER focus:outline-none"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-gray-600 text-sm">
              Already Registered?{" "}
              <Link to="/login" className="text-[#FFCC00] underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      );
}