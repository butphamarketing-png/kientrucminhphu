"use client";

import { AdminShell, Field, ImageField, SaveBar } from "@/components/admin/AdminUi";
import { useCmsEditor } from "@/components/admin/useCmsEditor";
import { digitsPhone, nid } from "@/lib/cms/ids";
import type { CmsFooterLink, CmsNavItem, SiteSettings } from "@/lib/cms/types";

const SETTING_FIELDS: { key: keyof SiteSettings; label: string; multiline?: boolean }[] = [
  { key: "name", label: "Tên công ty" },
  { key: "shortName", label: "Tên ngắn" },
  { key: "tagline", label: "Tagline" },
  { key: "slogan1", label: "Slogan 1" },
  { key: "slogan2", label: "Slogan 2" },
  { key: "greeting", label: "Dòng chạy header" },
  { key: "phone", label: "Hotline hiển thị" },
  { key: "phoneRaw", label: "Hotline tel: (số)" },
  { key: "email", label: "Email" },
  { key: "website", label: "Website" },
  { key: "address1Label", label: "Nhãn địa chỉ 1" },
  { key: "address1", label: "Địa chỉ 1" },
  { key: "address2Label", label: "Nhãn địa chỉ 2" },
  { key: "address2", label: "Địa chỉ 2" },
  { key: "zalo", label: "Link Zalo" },
  { key: "facebook", label: "Link Facebook" },
  { key: "messenger", label: "Link Messenger" },
  { key: "mapEmbed", label: "Google Map embed URL" },
  { key: "mapDirections", label: "Google Map chỉ đường" },
  { key: "headerColor", label: "Màu header" },
  { key: "seoDescription", label: "Mô tả SEO (để trống = tự ghép hotline)", multiline: true },
];

export function AdminSettingsEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Cài đặt website" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  const store = cms;

  function patchSetting(key: keyof SiteSettings, value: string) {
    setCms({
      ...store,
      settings: {
        ...store.settings,
        [key]: value,
        ...(key === "phone" ? { phoneRaw: digitsPhone(value) || store.settings.phoneRaw } : {}),
      },
    });
  }

  function patchNav(index: number, next: CmsNavItem) {
    setCms({ ...store, nav: store.nav.map((item, i) => (i === index ? next : item)) });
  }

  return (
    <AdminShell
      title="Cài đặt website"
      hint="Tên, hotline, địa chỉ, mạng xã hội, menu và footer — hiện trên toàn site."
    >
      <div className="adminbp-form">
        <div className="adminbp-grid">
          {SETTING_FIELDS.map((field) => (
            <Field
              key={field.key}
              label={field.label}
              value={cms.settings[field.key]}
              onChange={(v) => patchSetting(field.key, v)}
              type={field.key === "headerColor" ? "color" : "text"}
              multiline={field.multiline}
              span2={
                field.multiline ||
                field.key === "address1" ||
                field.key === "address2" ||
                field.key.startsWith("map")
              }
            />
          ))}
          <ImageField
            label="Logo menu"
            value={cms.settings.logo}
            onChange={(logo) => patchSetting("logo", logo)}
          />
          <ImageField
            label="Favicon"
            value={cms.settings.favicon}
            onChange={(favicon) => patchSetting("favicon", favicon)}
          />
        </div>

        <section className="adminbp-cardlist">
          <header>
            <h2>Menu chính</h2>
            <button
              type="button"
              onClick={() =>
                setCms({
                  ...cms,
                  nav: [
                    ...cms.nav,
                    { id: nid("nav"), label: "Mục mới", href: "/" },
                  ],
                })
              }
            >
              + Thêm mục
            </button>
          </header>
          <div className="adminbp-cards">
            {cms.nav.map((item, i) => (
              <article key={item.id} className="adminbp-item">
                <div className="adminbp-grid">
                  <Field label="Nhãn" value={item.label} onChange={(label) => patchNav(i, { ...item, label })} />
                  <Field label="Đường dẫn" value={item.href} onChange={(href) => patchNav(i, { ...item, href })} />
                </div>
                <Field
                  label="Menu con (mỗi dòng: Nhãn | /duong-dan)"
                  multiline
                  value={(item.children || [])
                    .map((c) => `${c.label} | ${c.href}`)
                    .join("\n")}
                  onChange={(text) =>
                    patchNav(i, {
                      ...item,
                      children: text
                        .split("\n")
                        .map((line) => line.trim())
                        .filter(Boolean)
                        .map((line) => {
                          const [label, href] = line.split("|").map((s) => s.trim());
                          return { id: nid("navc"), label: label || "Mục", href: href || "/" };
                        }),
                    })
                  }
                />
                <div className="adminbp-item-actions">
                  <button
                    type="button"
                    className="danger"
                    onClick={() => setCms({ ...cms, nav: cms.nav.filter((_, idx) => idx !== i) })}
                  >
                    Xóa mục
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="adminbp-cardlist">
          <header>
            <h2>Footer — hỗ trợ khách hàng</h2>
            <button
              type="button"
              onClick={() =>
                setCms({
                  ...cms,
                  footerSupport: [
                    ...cms.footerSupport,
                    { id: nid("footer"), label: "Liên kết mới", href: "/" } satisfies CmsFooterLink,
                  ],
                })
              }
            >
              + Thêm
            </button>
          </header>
          <div className="adminbp-cards">
            {cms.footerSupport.map((item, i) => (
              <article key={item.id} className="adminbp-item">
                <div className="adminbp-grid">
                  <Field
                    label="Nhãn"
                    value={item.label}
                    onChange={(label) =>
                      setCms({
                        ...cms,
                        footerSupport: cms.footerSupport.map((x, idx) =>
                          idx === i ? { ...x, label } : x,
                        ),
                      })
                    }
                  />
                  <Field
                    label="Đường dẫn"
                    value={item.href}
                    onChange={(href) =>
                      setCms({
                        ...cms,
                        footerSupport: cms.footerSupport.map((x, idx) =>
                          idx === i ? { ...x, href } : x,
                        ),
                      })
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <SaveBar
          saving={saving}
          message={message}
          onSave={() =>
            save({
              settings: cms.settings,
              nav: cms.nav,
              footerSupport: cms.footerSupport,
            })
          }
        />
      </div>
    </AdminShell>
  );
}
