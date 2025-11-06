import { IconText } from "@/components/icon-text";
import {
  Archive,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

export const SlideNav = ({ lastSegment }: { lastSegment: string }) => {
  return (
    <div className="flex w-60 flex-col border p-4">
      <div className="flex flex-1 flex-col">
        <section className="flex flex-col gap-2 border-b py-4">
          <p className="mb-8 text-2xl font-bold text-blue-700">Admin Panel</p>
          <Link href={"/admin"}>
            <IconText
              text="Dashboard"
              icon={LayoutDashboard}
              active={lastSegment === "admin"}
            />
          </Link>

          <IconText text="Order Managment" icon={ListOrdered} active={false} />
        </section>
        <section className="flex flex-col gap-2 border-b py-4">
          <p className="font-medium text-gray-500">Calalog</p>
          <Link href={"/admin/products"}>
            <IconText
              text="รายการสินค้า"
              icon={Package}
              active={lastSegment === "products"}
            />
          </Link>

          <IconText
            text="สินค้าหมดสต็อก"
            icon={Archive}
            active={lastSegment === "out-of-stock"}
          />
        </section>
        <section className="flex flex-1 flex-col gap-2 border-b py-4">
          <p className="font-medium text-gray-500">Setting</p>
          <IconText text="การตั้งค่าระบบ" icon={Settings} active={false} />
          <IconText text="จัดการผู้ใช้งาน" icon={Users} active={false} />
        </section>
      </div>
      <div className="py-4">
        <IconText text="ออกจากระบบ" icon={LogOut} active={false} />
      </div>
    </div>
  );
};
