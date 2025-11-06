import { IconTextProps } from "@/types/beetle";
import { Button } from "./ui/button";

export const IconText = ({ text, icon, active }: IconTextProps) => {
  const IconComponent = icon;
  return (
    <Button
      variant="ghost"
      className={`flex w-full justify-start  ${active ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : "transition-colors hover:bg-gray-50"}`}
    >
      <IconComponent />
      {text}
    </Button>
  );
};
