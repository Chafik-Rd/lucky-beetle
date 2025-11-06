import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const title: Record<string, string> = {
  products: "รายการสินค้าทั้งหมด",
  "out-of-stock": "สินค้าหมดสต็อก",
  admin: "Dashboard",
};
export const TopNavAdmin = ({ lastSegment }: { lastSegment: string }) => {
  const pageTitle = title[lastSegment];
  return (
    <Card className="flex w-full flex-row items-center justify-between p-4">
      <p className="text-3xl font-bold">{pageTitle}</p>
      <div className="flex items-center gap-4">
        <p>สวัสดี, chafik</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Card>
  );
};
