import React from "react";
import StepCardProps from "./StepCard";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section className="pb-10 max-w-full ">
      <div className="mx-auto px-8 text-black">
        <h2 className="text-3xl font-bold mb-2">How It Works</h2>
        <p className=" mb-10">Get started with TeachApt in just few simple steps</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            icon="/search.png"
            title="Find a tutor"
            description="Discover the right tutor for your needs, whether you’re learning a new skill or improving in a school subject. 
                        Our platform connects you with experienced tutors."
          />
          <StepCard
            icon="/booksession.png"
            title="Book a session"
            description="Book a session to get personalized support, clear guidance, and solutions tailored to your needs. Your growth begins with one click."
          />

          <StepCard
            icon="/start_learning.png"
            title="Start Learning"
            description="Whether you prefer online learning or a dedicated home tutor, we’ve got you covered. Start now and learn at your own pace."
          />
        </div>
      </div>
    </section>
  );
}
