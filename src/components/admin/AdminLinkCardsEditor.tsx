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
import type { CmsServiceItem, CmsStore } from "@/lib/cms/types";

const PLACEHOLDER = "/brand/logo-menu-lg.png.webp";

export function AdminLinkCardsEditor({
  title,
  hint,
  field,
  hrefPrefix,
  withCopy,
}: {
  title: string;
  hint: string;
  field: "serviceList" | "architectureList" | "servicesDetail";
  hrefPrefix: string;
  withCopy?: boolean;
}) {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title={title} hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  const items = cms[field];

  function setItems(next: CmsServiceItem[]) {
    setCms({ ...cms, [field]: next } as CmsStore);
  }

  return (
    <AdminShell title={title} hint={hint}>
      <div className="adminbp-form">
        <CardList
          title={`${items.length} mục`}
          onAdd={() =>
            setItems([
              {
                id: nid(field),
                title: "Mục mới",
                href: `${hrefPrefix}/${slugifyTitle("muc-moi")}-${Date.now().toString(36)}`,
                image: PLACEHOLDER,
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
                {withCopy ? (
                  <>
                    <Field
                      label="Tóm tắt trang chi tiết"
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
                      rows={6}
                      span2
                      value={item.body || ""}
                      onChange={(body) =>
                        setItems(items.map((x, idx) => (idx === i ? { ...x, body } : x)))
                      }
                    />
                  </>
                ) : null}
              </div>
              <ItemActions
                onUp={() => setItems(moveItem(items, i, -1))}
                onDown={() => setItems(moveItem(items, i, 1))}
                onRemove={() => setItems(items.filter((_, idx) => idx !== i))}
              />
            </article>
          ))}
        </CardList>
        <SaveBar saving={saving} message={message} onSave={() => save({ [field]: items })} />
      </div>
    </AdminShell>
  );
}
