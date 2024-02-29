import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {Theme} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import {AppBar} from "@/components/appBar";
import {Provider} from "jotai"

const inter = Poppins({weight:['500','600','700','800'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectroMart",
  description: "Get latest nd used electronics of your favouirate brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-sage1 `} suppressHydrationWarning>
      <Theme>
        <Provider>
          <AppBar/>
          {children}
        </Provider>
      </Theme>
      </body>
    </html>
  );
}
