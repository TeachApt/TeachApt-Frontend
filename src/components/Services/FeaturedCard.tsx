
type FeaturedCardProps = {
    icon: string;
    title:string;
    description:string;
}
export default function FeaturedCard({icon, title, description}: FeaturedCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <img src={icon} alt={title} className="w-10 h-10 mb-4" />
      <h4 className="font-semibold text-orange-500 mb-2"> {title} </h4>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
