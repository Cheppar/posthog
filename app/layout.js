import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
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

export const metadata = {
  title: "Build Bout",
  description:
    "Co-working incubator for builders in Nakuru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={`${outfitRegular.variable} ${outfitBold.variable} ${outfitLight.variable} antialiased`}
        >
          <Provider> 
        {children}
        {/* <WhatsAppWidget/> */}
        </Provider>
      </body>
    </html>
  );
}
