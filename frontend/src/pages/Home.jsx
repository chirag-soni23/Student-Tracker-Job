import {
  Search,
  Code,
  PenTool,
  BarChart2,
  MonitorSmartphone,
} from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import heroImage from "../assets/HeroImage.jpg"

const Home = () => {
  return (
    <div className="w-full">
      {/* hero Section */}
      <div className="w-full relative">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-[80vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Student Job Tracker
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Track all your job applications, filter by role, and monitor your
            progress easily.
          </p>
        </div>
      </div>

      {/* search job */}
      <div className="px-4 sm:px-6 md:px-10 py-10 flex flex-col items-center gap-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Find Your Next Job
        </h2>

        <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl gap-3 sm:gap-0">
          <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-[46px] rounded-full w-full">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full h-full outline-none text-sm text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 w-full sm:w-28 h-11 rounded-full text-sm text-white mt-2 sm:mt-0 sm:ml-3 hover:bg-indigo-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* categories */}
      <div className="px-4 sm:px-6 md:px-10 pb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Explore Our Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Developer */}
          <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
            <Code size={36} className="text-indigo-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              Web Development
            </h3>
            <p className="text-sm text-gray-500">
              Front-end and back-end development roles
            </p>
          </div>

          {/* App Development */}
          <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
            <MonitorSmartphone size={36} className="text-green-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              App Development
            </h3>
            <p className="text-sm text-gray-500">
              iOS, Android, and cross-platform app roles
            </p>
          </div>

          {/* Data Science */}
          <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
            <BarChart2 size={36} className="text-yellow-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              Data Science
            </h3>
            <p className="text-sm text-gray-500">
              ML, AI, and data analysis positions
            </p>
          </div>

          {/* ui ux design */}
          <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
            <PenTool size={36} className="text-pink-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              UI/UX Design
            </h3>
            <p className="text-sm text-gray-500">
              Design user-friendly and beautiful interfaces
            </p>
          </div>
        </div>
      </div>

      {/* student workers */}
      <div className="px-4 sm:px-6 md:px-10 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
          500+ Student Workers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
              alt="Professional Network"
              className="rounded-xl h-64 w-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">
              Build a professional network
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1603574670812-d24560880210?w=600"
              alt="Gain Experience"
              className="rounded-xl h-64 w-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">
              Gain real-world experience early
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600"
              alt="Shape Your Career"
              className="rounded-xl h-64 w-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">
              Shape your career path with clarity
            </p>
          </div>
        </div>
      </div>

      {/* subscribe */}
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Stay Updated on Your Job Hunt
        </h1>
        <p className="md:text-lg text-gray-500/70 pb-8">
          Get alerts on new job opportunities, tips, and industry insights
          delivered to your inbox
        </p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
