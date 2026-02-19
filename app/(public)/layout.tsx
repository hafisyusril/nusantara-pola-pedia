import Navbar from "@/components/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4">{children}</main>
    </>
  );
}
