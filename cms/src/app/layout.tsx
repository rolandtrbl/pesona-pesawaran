import "./globals.css";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

export const metadata = {
  title: "Admin Pesona Pesawaran",
  description: "Dashboard admin layanan booking open trip Pesona Pesawaran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-100">
        <Sidebar />
        <div className="ml-64 flex flex-col min-h-screen">
          <Topbar />
          <main className="p-6 mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}