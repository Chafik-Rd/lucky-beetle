import { Card } from "@/components/ui/card";
import { SummaryCardProps } from "@/types/beetle";

export const SummaryCard = ({
  title,
  value,
  icon,
  colorClass,
}: SummaryCardProps) => {
  const IconComponent = icon;
  if (!IconComponent) return null;
  return (
    <Card className="hadow-md flex flex-row items-center justify-between p-6 transition-shadow duration-300 hover:shadow-lg">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
      </div>
      <IconComponent className={`h-8 w-8 ${colorClass} opacity-60`} />
    </Card>
  );
};
