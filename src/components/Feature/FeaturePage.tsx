import Image from "next/image";

const features = [
  {
    text: "Allow Teachers to monetize their knowledge. Experience seamless learning with cutting edge features designed to keep you engaged and motivated.",
  },
  {
    text: "Allow Teachers to monetize their knowledge beyond traditional school walls.",
  },
  {
    text: "Connect with tutors and peers through seamless communication and collaborative features.",
  },
  {
    text: "Unlock interactive tools that make every lesson simple, enjoyable, and easy to follow.",
  },
];

export default function FeaturePage() {
  return (
    <section className="w-full bg-blue-200 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-xl mb-12 text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Features that set{" "}
            <span className="text-blue-600">TeachApt</span> apart
          </h2>

          <p className="text-sm md:text-base">
            We empower seamless learning by connecting students with the right tutors in both skills and academic subjects.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start md:items-center md:justify-center">

          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-md md:max-w-[600px]">
              <Image
                src="/teacher&stud.png"
                alt="teacher and student learning"
                width={600}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="relative space-y-6 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg px-6 py-6 max-w-lg text-black
                  ${index % 2 !== 0 ? "md:ml-20" : ""}
                `}
              >
                <p className="text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
