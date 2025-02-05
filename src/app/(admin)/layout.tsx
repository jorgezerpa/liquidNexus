import { Navbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Providers } from "./Providers";
import { AIChat } from "@/components/dashboard/AIChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden relative">
          <Navbar />
          <div className="flex flex-row-reverse justify-start items-start">
              <div className="h-screen w-full overflow-hidden pt-[80px]">
                <div className="overflow-y-scroll h-full styled-scrollbar">
                  <Providers>
                    <div className="">
                      { children }
                    </div>
                  </Providers>
                </div>
              </div>
              <div className="h-screen pt-[80px]">
                  <Sidebar isAdmin />
              </div>
          </div>
          <AIChat />
    </div>
  );
}
