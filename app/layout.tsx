import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ibrahim Quaizar | AI & Full-Stack Engineer",
  description:
    "Computer Engineering student at Stony Brook building AI-powered systems, full-stack products, and scalable tools.",
  openGraph: {
    title: "Ibrahim Quaizar | AI & Full-Stack Engineer",
    description:
      "AI-powered systems, full-stack products, and product-driven engineering.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <Script id="chatbase-loader" strategy="afterInteractive">
          {`
            (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="A4-UnJ2VKFo00lCabI6ik";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
          `}
        </Script>
      </body>
    </html>
  );
}
