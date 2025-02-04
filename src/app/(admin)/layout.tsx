import { Navbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Providers } from "./Providers";
import { IoMdChatbubbles } from "react-icons/io";

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
          <div className="absolute bottom-[50px] right-[15px] flex flex-col justify-center items-center gap-1">
            <div className="w-[80px] h-[80px] rounded-full bg-backgroundSecondary shadow-md shadow-white flex justify-center items-center cursor-pointer">
              <IoMdChatbubbles size={40} />
            </div>
            <p>Nexus AI</p>
          </div>
    </div>
  );
}
