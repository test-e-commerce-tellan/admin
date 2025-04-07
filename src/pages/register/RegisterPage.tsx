import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-4xl font-bold mb-1 text-center text-gray-800">
          Create an Account
        </h2>

        <div className="mb-4 space-x-3 flex items-center justify-center">
          <span className="text-base text-secondary">Have an Account?</span>
          <Link to="/login" className="text-base text-primary">
            Sign In
          </Link>
        </div>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-secondary"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-blue-900 transition duration-200"
          >
            Create Account
          </button>
          <div className="mx-10 flex justify-center">
            <span className="text-center text-sm text-gray-600">
              By creating account, you agree to our{" "}
              <Link to="#" className="text-primary">
                Terms of Service
              </Link>
            </span>
          </div>
          <div className="border-b border-gray-400"></div>
          <div className="flex justify-center">
            <span className="text-center text-sm text-gray-600">
              Or create an account using:
            </span>
          </div>

          <div className="space-y-3 mt-4">
            <button className="w-full border border-gray-300 text-primary py-2 rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2">
              <img
                src="/images/google-icon.png"
                alt="Google Icon"
                className="h-5 w-5"
              />
              <span>Continue with Google</span>
            </button>

            <button className="w-full border border-gray-300 text-primary py-2 rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2">
              <FaFacebook className="h-5 w-5 text-blue-600" />
              <span>Continue with Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
