import { Be_Vietnam_Pro } from "next/font/google";
import "./adminbp.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export default function AdminBpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`adminbp-root ${beVietnam.variable} ${beVietnam.className}`}>{children}</div>;
}
