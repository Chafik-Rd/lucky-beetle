import { ProductCard } from "@/components/product-card";
import { beetleDatas } from "@/data/beetle-data";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <section>
        <h1 className="mb-8 text-4xl font-bold">
          ยินดีต้อนรับสู่ Lucky Beetle!
          <br />
          อาณาจักรแห่งด้วงนำเข้า: ความงามที่ธรรมชาติรังสรรค์
        </h1>
        <p className="mb-4 text-lg">
          เราคัดสรรด้วงสวยงามและสายพันธุ์หายากจากทั่วโลก ด้วยมาตรฐานสูงสุด
          เพื่อส่งมอบสัตว์เลี้ยงและของสะสมที่สมบูรณ์แบบถึงมือคุณ
        </p>
      </section>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {beetleDatas.length > 0 ? (
          beetleDatas.map((beetle) => (
            <ProductCard key={beetle.id} dataBeetle={beetle} />
          ))
        ) : (
          <p>dddd</p>
        )}
      </section>
    </div>
  );
}
