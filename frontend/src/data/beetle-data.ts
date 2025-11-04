import { Beetle } from "@/types/beetle";

export const beetleDatas: Beetle[] = [
  {
    id: "1",
    name: "ด้วงคีมเขียว (Green Stag Beetle)",
    scientificName: "Prosopocoilus inclinatus",
    description:
      "ด้วงคีมเขียวเป็นด้วงที่มีขนาดใหญ่และมีสีเขียวมันวาว มีเขาคล้ายคีมที่หัว ใช้ในการต่อสู้เพื่อแย่งชิงตัวเมีย",
    imageUrl: "/beetles/green-stag-beetle.jpg",
    price: 1500,
    stock: 0,
    origin: "ญี่ปุ่น",
    rarity: "rare",
    size: "ใหญ่",
    details:
      "ด้วงคีมเขียวชอบอาศัยอยู่ในป่าไม้ที่มีความชื้นสูง และมักจะพบในช่วงฤดูร้อน",
  },
  {
    id: "2",
    name: "ด้วงแมลงปีกแข็งทองคำ (Golden Jewel Beetle)",
    scientificName: "Chrysochroa fulgidissima",
    description:
      "ด้วงแมลงปีกแข็งทองคำมีลำตัวที่มีสีทองสวยงามและมันวาว เป็นที่นิยมในหมู่นักสะสมด้วง",
    imageUrl: "/beetles/golden-jewel-beetle.jpg",
    price: 2000,
    stock: 5,
    origin: "ไทย",
    rarity: "legendary",
    size: "กลาง",
    details: "ด้วงแมลงปีกแข็งทองคำมักจะพบในป่าเขตร้อนและชอบกินน้ำหวานจากดอกไม้",
  },
  {
    id: "3",
    name: "ด้วงเต่าทอง (Ladybug Beetle)",
    scientificName: "Coccinellidae",
    description:
      "ด้วงเต่าทองเป็นด้วงขนาดเล็กที่มีสีสันสดใส มักจะมีจุดดำบนปีกสีแดงหรือเหลือง",
    imageUrl: "/beetles/ladybug-beetle.jpg",
    price: 300,
    stock: 50,
    origin: "ทั่วโลก",
    rarity: "common",
    size: "เล็ก",
    details:
      "ด้วงเต่าทองเป็นประโยชน์ต่อการเกษตรเนื่องจากมันกินเพลี้ยและแมลงศัตรูพืชอื่นๆ",
  },
  {
    id: "4",
    name: "ด้วงหนวดยาว (Longhorn Beetle)",
    scientificName: "Cerambycidae",
    description:
      "ด้วงหนวดยาวมีลำตัวที่ยาวและหนวดที่ยาวกว่าลำตัว มักจะมีสีสันหลากหลายและลวดลายที่สวยงาม",
    imageUrl: "/beetles/longhorn-beetle.jpg",
    price: 1200,
    stock: 15,
    origin: "แอฟริกา",
    rarity: "rare",
    size: "ใหญ่",
    details: "ด้วงหนวดยาวมักจะอาศัยอยู่ในป่าไม้และกินเนื้อไม้เป็นอาหารหลัก",
  },
];

export const pageUrl = "https://www.facebook.com/profile.php?id=61582723150489";