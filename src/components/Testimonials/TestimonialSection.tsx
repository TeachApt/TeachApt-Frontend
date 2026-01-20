"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mike John",
    role: "Secondary School Student",
    title: "TeachAPT transformed my career!",
    text:
      "I am truly grateful for the support I received while learning how to code. The lessons were well-structured and easy to follow, which made the entire process less overwhelming.",
    image: "/testimonials/girl1.jpg",
  },
  {
    name: "Sarah James",
    role: "UI/UX Student",
    title: "Learning became enjoyable",
    text:
      "The tutors explained concepts clearly and guided me step by step. I gained confidence and started building real projects.",
    image: "/testimonials/girl2.jpg",
  },
  {
    name: "Daniel Peters",
    role: "Science Student",
    title: "Highly recommended",
    text:
      "The learning experience was smooth and engaging. I loved the flexibility and support from the tutors.",
    image: "/testimonials/man1.jpg",
  },
  {
    name: "Amaka Grace",
    role: "Biology Student",
    title: "Great learning platform",
    text:
      "TeachAPT helped me understand complex topics easily. The tutors are patient and very knowledgeable.",
    image: "/testimonials/girl3.jpg",
  },
  {
    name: "John Samuel",
    role: "Mathematics Student",
    title: "Confidence boosted",
    text:
      "I improved significantly in my studies and now feel more confident approaching difficult problems.",
    image: "/testimonials/man2.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);
  const total = testimonials.length;

  // Infinite looping helpers
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

   /* ----- Avatar Size Logic ----- */
  const getAvatarSize = (index: number) => {
    const diff = Math.abs(index - activeIndex);
    const circularDiff = Math.min(diff, total - diff);

    if (circularDiff === 0) return "lg";
    if (circularDiff === 1) return "md";
    return "sm";
  };

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-30 h-30",
    lg: "w-40 h-40",
  };
  // Optional autoplay (can remove if you don't want it)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Hear From Our Happy Learners
        </h2>
        <p className="text-gray-600 mb-14">
          Thousands trust TeachAPT for personalized and flexible learning
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-blue-600 text-white rounded-xl px-8 py-8 max-w-2xl mx-auto mb-24">
          <h3 className="font-semibold text-lg">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm opacity-90 mb-4">
            {testimonials[activeIndex].role}
          </p>

          <p className="font-semibold mb-3">
            {testimonials[activeIndex].title}
          </p>

          <p className="text-sm leading-relaxed">
            {testimonials[activeIndex].text}
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mt-4 text-yellow-300">
            ★ ★ ★ ★ ★
          </div>

          {/* Speech bubble arrow */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-[20px] border-l-transparent
            border-r-[20px] border-r-transparent
            border-t-[20px] border-t-blue-600"
          />
        </div>

        {/* Avatars */}
        <div className="flex justify-center items-end gap-20 mb-10">
          {testimonials.map((item, index) => {
            const size = getAvatarSize(index);
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 
                   ${sizeClasses[size]}
                    ${ isActive
                    ? "w-24 h-24 ring-4 ring-blue-600"
                    : "w-14 h-14 ring-2 ring-blue-300 opacity-70"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
            />
          ))}
        </div>

        {/* Controls */}
        {/* <div className="flex justify-center gap-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded-md border text-sm"
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-md border text-sm"
          >
            Next →
          </button>
        </div> */}

      </div>
    </section>
  );
}
