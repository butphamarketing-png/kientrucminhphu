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

const PLACEHOLDER = "/brand/logo-menu-lg.png.webp";

export function AdminProjectsEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Công trình" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Công trình tiêu biểu" hint="Danh sách công trình trên trang chủ và /cong-trinh-tieu-bieu.">
      <div className="adminbp-form">
        <CardList
          title={`${cms.projects.length} công trình`}
          onAdd={() => {
            const slug = slugifyTitle("cong-trinh-moi");
            setCms({
              ...cms,
              projects: [
                {
                  id: nid("project"),
                  title: "Công trình mới",
                  href: `/cong-trinh-tieu-bieu/${slug}-${Date.now().toString(36)}`,
                  image: PLACEHOLDER,
                  owner: "",
                  location: "",
                  scale: "",
                  description: "",
                },
                ...cms.projects,
              ],
            });
          }}
        >
          {cms.projects.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tên công trình"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, title } : x)),
                    })
                  }
                />
                <Field
                  label="Đường dẫn"
                  value={item.href}
                  onChange={(href) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, href } : x)),
                    })
                  }
                />
                <Field
                  label="Chủ đầu tư"
                  value={item.owner}
                  onChange={(owner) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, owner } : x)),
                    })
                  }
                />
                <Field
                  label="Địa điểm"
                  value={item.location}
                  onChange={(location) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, location } : x)),
                    })
                  }
                />
                <Field
                  label="Quy mô"
                  value={item.scale}
                  onChange={(scale) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, scale } : x)),
                    })
                  }
                />
                <ImageField
                  label="Ảnh"
                  value={item.image}
                  onChange={(image) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) => (idx === i ? { ...x, image } : x)),
                    })
                  }
                />
                <Field
                  label="Mô tả trang chi tiết"
                  multiline
                  span2
                  value={item.description || ""}
                  onChange={(description) =>
                    setCms({
                      ...cms,
                      projects: cms.projects.map((x, idx) =>
                        idx === i ? { ...x, description } : x,
                      ),
                    })
                  }
                />
              </div>
              <ItemActions
                onUp={() => setCms({ ...cms, projects: moveItem(cms.projects, i, -1) })}
                onDown={() => setCms({ ...cms, projects: moveItem(cms.projects, i, 1) })}
                onRemove={() =>
                  setCms({ ...cms, projects: cms.projects.filter((_, idx) => idx !== i) })
                }
              />
            </article>
          ))}
        </CardList>
        <SaveBar saving={saving} message={message} onSave={() => save({ projects: cms.projects })} />
      </div>
    </AdminShell>
  );
}
