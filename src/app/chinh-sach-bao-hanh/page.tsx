import type { Metadata } from "next";
import { SimpleContentPage } from "@/components/SimpleContentPage";

export const metadata: Metadata = { title: "Chính sách bảo hành" };
export default function Page() {
  return <SimpleContentPage title="Chính sách bảo hành" />;
}
