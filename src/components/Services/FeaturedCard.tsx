type FeaturedCardProps = {
  icon: string;
  title: string;
  description: string;
};
export default function FeaturedCard({ icon, title, description }: FeaturedCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-r-xl p-4 shadow-sm hover:shadow-lg transition">
      <img src={icon} alt={title} className="w-8 h-8 mb-4 bg-blue-500 p-2 rounded-sm " />
      <h4 className="font-semibold text-orange-500 mb-2"> {title} </h4>

      <p className="text-sm max-w-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
