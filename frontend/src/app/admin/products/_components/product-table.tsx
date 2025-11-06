import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { SquarePen, Trash2 } from "lucide-react";
import { Products } from "../_types/products";

export const ProductTable = ({ products }: { products: Products[] }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Out of Stock":
        return "bg-red-100 text-red-700";
      case "Draft":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <p className="text-2xl font-semibold">จัดการสินค้า</p>
        <Button className="bg-blue-600 hover:bg-blue-500">เพิ่มสินค้าใหม่</Button>
      </section>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                ID
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                ชื่อสินค้า
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                ราคา
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                คงเหลือ
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                สถานะ
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="transition-colors hover:bg-gray-50"
              >
                <TableCell className="px-6 py-4 text-sm font-medium">
                  {product.id}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  {product.name}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  {product.price.toLocaleString("th-TH")} บาท
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  {product.stock}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  <Badge className={`${getStatusClass(product.status)}`}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full p-2 text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-900"
                  >
                    <SquarePen size={16} />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full p-2 text-red-600 transition hover:bg-red-50 hover:text-red-900"
                  >
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
