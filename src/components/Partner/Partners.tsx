import Image from "next/image";

const partners = [
  { name: "Oscar", logo: "/partners/Oscar.svg" },
  { name: "Galileo", logo: "/partners/galileo.svg" },
  { name: "PayPal", logo: "/partners/paypal.svg" },
  { name: "Qapital", logo: "/partners/qapital.svg" },
  { name: "Amazon", logo: "/partners/amazon.svg" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-12">Our Partners</h2>

        <div className="flex flex-wrap justify-center items-center gap-20 opacity-60">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className="object-contain grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
