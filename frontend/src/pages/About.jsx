import React from "react";
import Footer from "../components/Footer";
import heroImage from "../assets/AboutImage.jpg";

const About = () => {
  return (
    <div className="w-full">
      {/* hero section */}
      <div className="w-full relative">
        <img
          src={heroImage}
          alt="About Hero"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About JobTracker
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mt-4">
            Empowering students to track, apply, and succeed in their job search
            journey.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          JobTracker is a platform built for students and freshers to manage
          their job applications smartly. We help you organize opportunities,
          stay updated on statuses, and land the job you dream of.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-20">
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lvbnxlbnwwfDB8MHx8fDA%3D"
            alt="Our Mission"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To simplify the job search process for students and streamline
              tracking applications in one place.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600 text-sm">
              A passionate group of developers, designers, and mentors focused
              on empowering students and building careers.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://plus.unsplash.com/premium_photo-1682309586073-902b5c4905b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlzaW9ufGVufDB8MHwwfHx8MA%3D%3D"
            alt="Our Vision"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become the #1 job tracking platform for students and early
              professionals worldwide.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
