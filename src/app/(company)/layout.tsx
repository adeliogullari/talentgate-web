import "@/app/globals.css";
import Topbar from "./_components/navigation/Topbar";
import Sidebar from "./_components/navigation/Sidebar";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="lg:hidden">
        <p>Please switch to Desktop for the optimal experience.</p>
      </div>

      <div className="hidden lg:grid grid-cols-[15dvw_85dvw] overflow-hidden">
        <Sidebar />
        <div className="grid grid-rows-[7dvh_93dvh] overflow-hidden">
          <Topbar />
          <div className="overflow-y-auto">{children}</div>
        </div>
      </div>
    </main>
  );
}
