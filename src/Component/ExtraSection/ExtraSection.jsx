
import React from "react";

// ------------ Provider Data ------------
const topProviders = [
  {
    id: 1,
    name: "Alex Martin",
    skill: "Guitar Instructor",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Sara Hossain",
    skill: "English Trainer",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "David Kim",
    skill: "JavaScript Mentor",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=700&q=80",
  },
  
];

// ------------ How it works data ------------
const steps = [
  {
    id: 1,
    title: "Browse Skills",
    description:
      "Explore thousands of skills from expert trainers across different categories.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Connect & Book",
    description:
      "Chat instantly and book sessions with the provider that fits your needs.",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Start Learning",
    description:
      "Join live or offline sessions and grow your skill step by step.",
    icon: "🚀",
  },
];

const ExtraSections = () => {
  return (
    <div className="w-full">

      {/* -------------------- TOP PROVIDERS -------------------- */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
            ⭐ Top Rated Providers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {topProviders.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
                  <p className="text-gray-500">{p.skill}</p>

                  <div className="mt-3 text-yellow-500 font-semibold text-lg">
                    ⭐ {p.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* -------------------- HOW IT WORKS -------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
            🔍 How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="p-8 bg-gradient-to-br from-indigo-50 to-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{step.icon}</div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;
