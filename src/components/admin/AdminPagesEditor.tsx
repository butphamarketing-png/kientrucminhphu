"use client";

import { AdminShell, Field, SaveBar } from "@/components/admin/AdminUi";
import { useCmsEditor } from "@/components/admin/useCmsEditor";
import { nid } from "@/lib/cms/ids";
import type { CmsContentPage } from "@/lib/cms/types";

export function AdminPagesEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Trang nội dung" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  const store = cms;

  function patch(i: number, next: CmsContentPage) {
    setCms({ ...store, pages: store.pages.map((p, idx) => (idx === i ? next : p)) });
  }

  return (
    <AdminShell
      title="Trang nội dung"
      hint="Sứ mệnh, tuyển dụng, chính sách. Dùng ## tiêu đề, - danh sách, **in đậm**."
    >
      <div className="adminbp-form">
        <div className="adminbp-item-actions">
          <button
            type="button"
            className="adminbp-save"
            onClick={() =>
              setCms({
                ...cms,
                pages: [
                  ...cms.pages,
                  {
                    id: nid("page"),
                    path: "/trang-moi",
                    title: "Trang mới",
                    description: "",
                    body: "",
                  },
                ],
              })
            }
          >
            + Thêm trang
          </button>
        </div>
        {cms.pages.map((page, i) => (
          <article key={page.id} className="adminbp-item">
            <div className="adminbp-grid">
              <Field label="Tiêu đề" value={page.title} onChange={(title) => patch(i, { ...page, title })} />
              <Field label="Đường dẫn" value={page.path} onChange={(path) => patch(i, { ...page, path })} />
              <Field
                label="Mô tả SEO"
                span2
                value={page.description}
                onChange={(description) => patch(i, { ...page, description })}
              />
              <Field
                label="Nội dung"
                multiline
                rows={12}
                span2
                value={page.body}
                onChange={(body) => patch(i, { ...page, body })}
              />
            </div>
            <div className="adminbp-item-actions">
              <button
                type="button"
                className="danger"
                onClick={() => setCms({ ...cms, pages: cms.pages.filter((_, idx) => idx !== i) })}
              >
                Xóa trang
              </button>
            </div>
          </article>
        ))}
        <SaveBar saving={saving} message={message} onSave={() => save({ pages: cms.pages })} />
      </div>
    </AdminShell>
  );
}
