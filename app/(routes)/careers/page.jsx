import Careers from "@/app/_components/careers/Careers";

export const metadata = {
  title: "Job Board",
  description:
    "We're hiring builders under an ownership model — hybrid work, full-stack, AI-native, data-driven. Apply with your portfolio.",
  openGraph: {
    title: "Job Board | Build Bout",
    description:
      "We're hiring builders under an ownership model — hybrid work, full-stack, AI-native, data-driven. Apply with your portfolio.",
    type: "website",
    images: [{ url: "/og-build-bout.png", alt: "Build Bout" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Board | Build Bout",
    description:
      "We're hiring builders under an ownership model — hybrid work, full-stack, AI-native, data-driven.",
    images: ["/og-build-bout.png"],
  },
};

export default function CareersPage() {
  return <Careers />;
}
