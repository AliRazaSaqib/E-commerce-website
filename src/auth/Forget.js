/** @format */

import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div className="h-screen">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forget Your Password
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only">
                  Register Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Register Email Address"
                />
              </div>
              <div className="!mt-4">
                <label for="password" className="sr-only">
                  Your New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your New Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div class="flex items-center ml-auto">
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900 cursor-pointer border-b"
                >
                  <Link to="/register">Login Here!</Link>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#e4853f] hover:bg-black focus:outline-none"
              >
                Forget
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
