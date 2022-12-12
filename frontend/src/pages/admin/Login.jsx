import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();


async function LoginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/admins/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();
    console.log(content);
    if (content.token) {
      localStorage.setItem("token", content.token);
      navigate("/dashboard");
    }
}
  return (
    <div
      className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-white dark:text-gray-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-white">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={LoginUser}
        novalidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-50 dark:bg-white dark:text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-white dark:bg-white dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-white"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="/register"
              className="hover:underline dark:text-violet-400"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
