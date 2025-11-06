import { Archive, ListOrdered, Package } from "lucide-react";
import { Products } from "./_types/products";
import { SummaryCard } from "./_components/summary-card";
import { ProductTable } from "./_components/product-table";

const MOCK_PRODUCTS: Products[] = [
  {
    id: "RCP-001",
    name: "ชุดเซ็ตเครื่องเทศทำผัดไทยโบราณ",
    price: 289,
    stock: 50,
    status: "Active",
    dateAdded: "2024-10-01",
  },
  {
    id: "RCP-002",
    name: "พริกแกงเขียวหวานสูตรแม่ย่า (พรีเมียม)",
    price: 199,
    stock: 0,
    status: "Out of Stock",
    dateAdded: "2024-09-15",
  },
  {
    id: "RCP-003",
    name: "ซอสผัดกะเพราพร้อมผงปรุงรส",
    price: 120,
    stock: 15,
    status: "Active",
    dateAdded: "2024-11-04",
  },
];

export default function ViewAdminProducts() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SummaryCard
          title="จำนวนสินค้าทั้งหมด"
          value={5}
          icon={Package}
          colorClass="text-red-600"
        />
        <SummaryCard
          title="ยอดสต็อกรวม"
          value={5}
          icon={ListOrdered}
          colorClass="text-indigo-600"
        />
        <SummaryCard
          title="สินค้าที่หมดสต็อก"
          value={5}
          icon={Archive}
          colorClass="text-orange-600"
        />
      </div>
      <ProductTable products={MOCK_PRODUCTS} />
    </>
  );
}
