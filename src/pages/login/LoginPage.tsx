import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-4xl font-bold mb-1 text-center text-gray-800">
          Sign In
        </h2>

        <div className="mb-4 space-x-3 flex items-center justify-center">
          <span className="text-base text-secondary">New to Our Product?</span>
          <Link to="/register" className="text-base text-primary">
            Create Account
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

          <div className="flex items-center space-x-2 mb-4">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="remember" className="text-sm text-secondary">
              Keep me signed in
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-blue-900 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
