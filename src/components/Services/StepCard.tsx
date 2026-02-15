type StepCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-blue-500 p-3 rounded-lg">
        <img src={icon} alt={title} className="w-6 h-6 max-w-sm" />
      </div>

      <div>
        <h4 className="font-semibold text-orange-500 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed max-w-lg text-justify">{description}</p>
      </div>
    </div>
  );
}
