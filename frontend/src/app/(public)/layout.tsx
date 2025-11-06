import { Footer } from "./_components/footer";
import { TopNav } from "./_components/topnav";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
