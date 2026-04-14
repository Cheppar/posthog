import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/next"
// import WhatsAppWidget from "./_components/widget/Whatsapp";

const outfitRegular = localFont({
  src: "./fonts/supabasefont/CustomFont-Black.woff2",
  variable: "--font-sohne", // Define the variable for the Outfit font
  weight: "100 900", // Define weight range
});

const outfitBold = localFont({
  src: "./fonts/supabasefont/CustomFont-Bold.woff2",
  variable: "--font-outfit-bold", // Variable for bold font
  weight: "700", // Bold weight
});

const outfitLight = localFont({
  src: "./fonts/supabasefont/CustomFont-medium.woff2",
  variable: "--font-outfit-light", // Variable for light font
  weight: "200 900", // Light weight
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://buildbout.co.ke";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Build Bout",
    template: "%s | Build Bout",
  },
  description:
    "Co-working incubator for builders in Nakuru — community, accountability, and shipping together.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Build Bout",
    title: "Build Bout",
    description:
      "Co-working incubator for builders in Nakuru — community, accountability, and shipping together.",
    images: [
      {
        url: "/og-build-bout.png",
        alt: "Build Bout — torn paper logo on black",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Bout",
    description:
      "Co-working incubator for builders in Nakuru — community, accountability, and shipping together.",
    images: ["/og-build-bout.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={`${outfitRegular.variable} ${outfitBold.variable} ${outfitLight.variable} antialiased`}
        >
          <PostHogProvider>
            <Provider> 
              {children}
              {/* <WhatsAppWidget/> */}
            </Provider>
          </PostHogProvider>
          <Analytics />
      </body>
    </html>
  );
}
