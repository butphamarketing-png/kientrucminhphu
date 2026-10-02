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

export function AdminGalleryEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Thư viện ảnh" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Thư viện ảnh" hint="Album trên /thu-vien. Ảnh trong album: mỗi dòng 1 URL.">
      <div className="adminbp-form">
        <CardList
          title={`${cms.galleryAlbums.length} album`}
          onAdd={() =>
            setCms({
              ...cms,
              galleryAlbums: [
                {
                  id: nid("album"),
                  title: "Album mới",
                  href: `/thu-vien/${slugifyTitle("album-moi")}-${Date.now().toString(36)}`,
                  image: PLACEHOLDER,
                  images: [],
                },
                ...cms.galleryAlbums,
              ],
            })
          }
        >
          {cms.galleryAlbums.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tên album"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      galleryAlbums: cms.galleryAlbums.map((x, idx) =>
                        idx === i ? { ...x, title } : x,
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
                      galleryAlbums: cms.galleryAlbums.map((x, idx) =>
                        idx === i ? { ...x, href } : x,
                      ),
                    })
                  }
                />
                <ImageField
                  label="Ảnh bìa"
                  value={item.image}
                  onChange={(image) =>
                    setCms({
                      ...cms,
                      galleryAlbums: cms.galleryAlbums.map((x, idx) =>
                        idx === i ? { ...x, image } : x,
                      ),
                    })
                  }
                />
                <Field
                  label="Ảnh trong album (mỗi dòng 1 URL)"
                  multiline
                  rows={6}
                  span2
                  value={(item.images || []).join("\n")}
                  onChange={(text) =>
                    setCms({
                      ...cms,
                      galleryAlbums: cms.galleryAlbums.map((x, idx) =>
                        idx === i
                          ? {
                              ...x,
                              images: text
                                .split("\n")
                                .map((l) => l.trim())
                                .filter(Boolean),
                            }
                          : x,
                      ),
                    })
                  }
                />
              </div>
              <ItemActions
                onUp={() => setCms({ ...cms, galleryAlbums: moveItem(cms.galleryAlbums, i, -1) })}
                onDown={() => setCms({ ...cms, galleryAlbums: moveItem(cms.galleryAlbums, i, 1) })}
                onRemove={() =>
                  setCms({
                    ...cms,
                    galleryAlbums: cms.galleryAlbums.filter((_, idx) => idx !== i),
                  })
                }
              />
            </article>
          ))}
        </CardList>
        <SaveBar
          saving={saving}
          message={message}
          onSave={() => save({ galleryAlbums: cms.galleryAlbums })}
        />
      </div>
    </AdminShell>
  );
}
