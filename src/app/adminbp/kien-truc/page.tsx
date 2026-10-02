import { AdminLinkCardsEditor } from "@/components/admin/AdminLinkCardsEditor";

export const metadata = {
  title: { absolute: "Kiến trúc · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminLinkCardsEditor
      title="Kiến trúc"
      hint="Danh mục trên /kien-truc."
      field="architectureList"
      hrefPrefix="/kien-truc"
      withCopy
    />
  );
}
