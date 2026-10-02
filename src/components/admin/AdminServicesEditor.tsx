"use client";

import {
  AdminShell,
  CardList,
  Field,
  ImageField,
  ItemActions,
  SaveBar,
} from "@/components/admin/AdminUi";
import { useCmsEditor } from "@/components/admin/useCmsEditor";
import { moveItem, nid, slugifyTitle } from "@/lib/cms/ids";
import type { CmsServiceItem } from "@/lib/cms/types";

const PLACEHOLDER = "/brand/logo-menu-lg.png.webp";

export function AdminServicesEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Dịch vụ" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  const store = cms;

  function listEditor(
    key: "serviceList" | "servicesDetail",
    title: string,
    prefix: string,
  ) {
    const items = store[key];
    const setItems = (next: CmsServiceItem[]) => setCms({ ...store, [key]: next });
    return (
      <CardList
        title={title}
        onAdd={() =>
          setItems([
            {
              id: nid(key),
              title: "Dịch vụ mới",
              href: `${prefix}/${slugifyTitle("dich-vu-moi")}-${Date.now().toString(36)}`,
              image: PLACEHOLDER,
              summary: "",
              body: "",
            },
            ...items,
          ])
        }
      >
        {items.map((item, i) => (
          <article key={item.id} className="adminbp-item">
            <div className="adminbp-grid">
              <Field
                label="Tiêu đề"
                value={item.title}
                onChange={(title) =>
                  setItems(items.map((x, idx) => (idx === i ? { ...x, title } : x)))
                }
              />
              <Field
                label="Đường dẫn"
                value={item.href}
                onChange={(href) =>
                  setItems(items.map((x, idx) => (idx === i ? { ...x, href } : x)))
                }
              />
              <ImageField
                label="Ảnh"
                value={item.image}
                onChange={(image) =>
                  setItems(items.map((x, idx) => (idx === i ? { ...x, image } : x)))
                }
              />
              <Field
                label="Tóm tắt"
                multiline
                span2
                value={item.summary || ""}
                onChange={(summary) =>
                  setItems(items.map((x, idx) => (idx === i ? { ...x, summary } : x)))
                }
              />
              <Field
                label="Nội dung thêm (## tiêu đề, - ý)"
                multiline
                rows={5}
                span2
                value={item.body || ""}
                onChange={(body) =>
                  setItems(items.map((x, idx) => (idx === i ? { ...x, body } : x)))
                }
              />
            </div>
            <ItemActions
              onUp={() => setItems(moveItem(items, i, -1))}
              onDown={() => setItems(moveItem(items, i, 1))}
              onRemove={() => setItems(items.filter((_, idx) => idx !== i))}
            />
          </article>
        ))}
      </CardList>
    );
  }

  return (
    <AdminShell title="Dịch vụ" hint="Danh mục /dich-vu và trang chi tiết lĩnh vực.">
      <div className="adminbp-form">
        {listEditor("serviceList", "Danh mục dịch vụ", "/dich-vu")}
        {listEditor("servicesDetail", "Trang chi tiết lĩnh vực", "/dich-vu")}
        <SaveBar
          saving={saving}
          message={message}
          onSave={() =>
            save({ serviceList: cms.serviceList, servicesDetail: cms.servicesDetail })
          }
        />
      </div>
    </AdminShell>
  );
}
