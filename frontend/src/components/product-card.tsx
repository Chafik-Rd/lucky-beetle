import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { MessageSquare, SquareArrowOutUpRight } from "lucide-react";
import { Beetle } from "@/types/beetle";
import { pageUrl } from "@/data/beetle-data";

interface ProductCardProps {
  dataBeetle: Beetle;
}

export const ProductCard = ({ dataBeetle }: ProductCardProps) => {
  return (
    <Card className="h-fit min-w-65 p-0 pb-6 transition-transform duration-200 hover:shadow-lg">
      <div className="relative h-44">
        <Image
          src="/hero-page.jpg"
          alt="hero-page"
          fill
          className="rounded-t-xl object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl">
          {dataBeetle.name}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {dataBeetle.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>
            <span className="text-xl font-medium">
              {dataBeetle.price.toLocaleString()}
            </span>{" "}
            บาท
          </p>
          <Badge
            className={`bg-green-200 text-emerald-800 ${dataBeetle.stock === 0 && "bg-gray-200 text-gray-600"}`}
          >
            {dataBeetle.stock === 0
              ? "สินค้าหมด"
              : `เหลือ ${dataBeetle.stock} ตัว`}
          </Badge>
        </div>
        {dataBeetle.stock !== 0 ? (
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              <MessageSquare />
              สนใจสินค้า/สั่งซื้อผ่านแชท
              <SquareArrowOutUpRight />
            </Button>
          </a>
        ) : (
          <Button
            className="w-full bg-gray-400 hover:bg-gray-400"
            disabled={true}
          >
            <MessageSquare />
            สินค้าหมด
            <SquareArrowOutUpRight />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
