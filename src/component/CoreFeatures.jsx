import React, { useState } from 'react';

const features = [
  {
    title: "Persona Matcher",
    desc: "Automate prospecting, engagement, and follow-ups with a sales agent that never sleeps. Reduce manual effort and focus on closing more deals.",
  },
  {
    title: "Smart Insights",
    desc: "Gain actionable analytics and recommendations tailored to your workflow, helping you make data-driven decisions faster.",
  },
  {
    title: "Workflow Automation",
    desc: "Streamline repetitive tasks and integrate your favorite tools for seamless, end-to-end automation.",
  },
  {
    title: "Continuous Learning",
    desc: "Your AI agent evolves with your business, learning from every interaction to deliver smarter results over time.",
  },
];

function CoreFeatures() {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (idx) => setCurrent(idx);

  return (
    <div className="w-full min-h-[100vh] bg-black text-white flex flex-col items-start justify-center px-16 py-20 relative overflow-x-hidden">
      <h2 className="mb-10 text-5xl font-medium md:text-3xl">Our Core Features</h2>
      <div className="flex flex-row gap-8 items-center w-full">
        {/* Feature Card */}
        <div className="relative bg-gradient-to-br from-[#232323]/80 to-[#232323]/60 rounded-xl shadow-lg p-7 w-[350px] min-h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-2xl font-semibold">{features[current].title}</h3>
            <p className="text-sm text-[#e0e0e0]">{features[current].desc}</p>
          </div>
          {/* Dots */}
          <div className="flex gap-2 items-center mt-6">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Show feature ${idx + 1}`}
                className={`w-6 h-2 rounded-full transition-all duration-200 ${
                  idx === current
                    ? "bg-[#e0e0e0] opacity-100"
                    : "bg-[#e0e0e0]/40 opacity-60"
                }`}
                style={{
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
        {/* Placeholder Cards */}
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-80 w-[340px] min-h-[220px]" />
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-60 w-[340px] min-h-[220px]" />
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-80 w-[340px] min-h-[220px]" />
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-60 w-[340px] min-h-[220px]" />
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-80 w-[340px] min-h-[220px]" />
        <div className="rounded-xl bg-gradient-to-br from-[#eaeaea] to-[#cfcfcf] opacity-60 w-[340px] min-h-[220px]" />
      </div>
      {/* Explore all Products link */}
      <a
        href="#"
        className="absolute right-16 bottom-10 text-[#bdbdbd] text-sm underline flex items-center gap-1 hover:text-white transition-colors"
        style={{ letterSpacing: 0.1 }}
      >
        Explore all Products
      </a>
    </div>
  );
}

export default CoreFeatures;