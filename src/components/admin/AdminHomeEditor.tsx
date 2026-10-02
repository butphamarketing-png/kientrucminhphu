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

export function AdminHomeEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Trang chủ" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Trang chủ" hint="Slideshow, giới thiệu, lợi ích, lĩnh vực và mẫu nhà.">
      <div className="adminbp-form">
        <div className="adminbp-item">
          <h2 style={{ margin: 0, fontSize: 16 }}>Khối giới thiệu</h2>
          <div className="adminbp-grid">
            <Field
              label="Tiêu đề"
              value={cms.intro.title}
              onChange={(title) => setCms({ ...cms, intro: { ...cms.intro, title } })}
            />
            <Field
              label="Nút xem thêm"
              value={cms.intro.href}
              onChange={(href) => setCms({ ...cms, intro: { ...cms.intro, href } })}
            />
            <ImageField
              label="Ảnh giới thiệu"
              value={cms.intro.image}
              onChange={(image) => setCms({ ...cms, intro: { ...cms.intro, image } })}
            />
            <Field
              label="Các đoạn văn (mỗi đoạn 1 dòng trống)"
              multiline
              rows={8}
              span2
              value={cms.intro.paragraphs.join("\n\n")}
              onChange={(text) =>
                setCms({
                  ...cms,
                  intro: {
                    ...cms.intro,
                    paragraphs: text
                      .split(/\n\s*\n/)
                      .map((p) => p.trim())
                      .filter(Boolean),
                  },
                })
              }
            />
            <Field
              label="Nội dung trang /gioi-thieu (## tiêu đề, - ý)"
              multiline
              rows={10}
              span2
              value={cms.intro.extra || ""}
              onChange={(extra) =>
                setCms({ ...cms, intro: { ...cms.intro, extra } })
              }
            />
          </div>
        </div>

        <CardList
          title="Slideshow"
          onAdd={() =>
            setCms({
              ...cms,
              slides: [
                ...cms.slides,
                { id: nid("slide"), src: PLACEHOLDER, alt: "Slide mới" },
              ],
            })
          }
        >
          {cms.slides.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <ImageField
                label="Ảnh slide"
                value={item.src}
                onChange={(src) =>
                  setCms({
                    ...cms,
                    slides: cms.slides.map((x, idx) => (idx === i ? { ...x, src } : x)),
                  })
                }
              />
              <Field
                label="Alt SEO"
                value={item.alt}
                onChange={(alt) =>
                  setCms({
                    ...cms,
                    slides: cms.slides.map((x, idx) => (idx === i ? { ...x, alt } : x)),
                  })
                }
              />
              <ItemActions
                onUp={() => setCms({ ...cms, slides: moveItem(cms.slides, i, -1) })}
                onDown={() => setCms({ ...cms, slides: moveItem(cms.slides, i, 1) })}
                onRemove={() =>
                  setCms({ ...cms, slides: cms.slides.filter((_, idx) => idx !== i) })
                }
              />
            </article>
          ))}
        </CardList>

        <CardList
          title="Lợi ích"
          onAdd={() =>
            setCms({
              ...cms,
              benefits: [
                ...cms.benefits,
                { id: nid("benefit"), title: "Lợi ích mới", desc: "", icon: PLACEHOLDER },
              ],
            })
          }
        >
          {cms.benefits.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tiêu đề"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      benefits: cms.benefits.map((x, idx) => (idx === i ? { ...x, title } : x)),
                    })
                  }
                />
                <ImageField
                  label="Icon"
                  value={item.icon}
                  onChange={(icon) =>
                    setCms({
                      ...cms,
                      benefits: cms.benefits.map((x, idx) => (idx === i ? { ...x, icon } : x)),
                    })
                  }
                />
                <Field
                  label="Mô tả"
                  value={item.desc}
                  span2
                  onChange={(desc) =>
                    setCms({
                      ...cms,
                      benefits: cms.benefits.map((x, idx) => (idx === i ? { ...x, desc } : x)),
                    })
                  }
                />
              </div>
              <ItemActions
                onUp={() => setCms({ ...cms, benefits: moveItem(cms.benefits, i, -1) })}
                onDown={() => setCms({ ...cms, benefits: moveItem(cms.benefits, i, 1) })}
                onRemove={() =>
                  setCms({ ...cms, benefits: cms.benefits.filter((_, idx) => idx !== i) })
                }
              />
            </article>
          ))}
        </CardList>

        <CardList
          title="Lĩnh vực hoạt động"
          onAdd={() =>
            setCms({
              ...cms,
              fields: [
                ...cms.fields,
                {
                  id: nid("field"),
                  title: "Lĩnh vực mới",
                  href: `/dich-vu/${slugifyTitle("linh-vuc-moi")}`,
                  image: PLACEHOLDER,
                },
              ],
            })
          }
        >
          {cms.fields.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tiêu đề"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      fields: cms.fields.map((x, idx) => (idx === i ? { ...x, title } : x)),
                    })
                  }
                />
                <Field
                  label="Đường dẫn"
                  value={item.href}
                  onChange={(href) =>
                    setCms({
                      ...cms,
                      fields: cms.fields.map((x, idx) => (idx === i ? { ...x, href } : x)),
                    })
                  }
                />
                <ImageField
                  label="Ảnh"
                  value={item.image}
                  onChange={(image) =>
                    setCms({
                      ...cms,
                      fields: cms.fields.map((x, idx) => (idx === i ? { ...x, image } : x)),
                    })
                  }
                />
              </div>
              <ItemActions
                onUp={() => setCms({ ...cms, fields: moveItem(cms.fields, i, -1) })}
                onDown={() => setCms({ ...cms, fields: moveItem(cms.fields, i, 1) })}
                onRemove={() =>
                  setCms({ ...cms, fields: cms.fields.filter((_, idx) => idx !== i) })
                }
              />
            </article>
          ))}
        </CardList>

        <CardList
          title="Mẫu nhà phố / biệt thự"
          onAdd={() =>
            setCms({
              ...cms,
              houseDesigns: [
                ...cms.houseDesigns,
                {
                  id: nid("house"),
                  title: "Mẫu nhà mới",
                  href: `/kien-truc/${slugifyTitle("mau-nha-moi")}`,
                  image: PLACEHOLDER,
                  tabs: ["all"],
                  summary: "",
                },
              ],
            })
          }
        >
          {cms.houseDesigns.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tiêu đề"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      houseDesigns: cms.houseDesigns.map((x, idx) =>
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
                      houseDesigns: cms.houseDesigns.map((x, idx) =>
                        idx === i ? { ...x, href } : x,
                      ),
                    })
                  }
                />
                <ImageField
                  label="Ảnh"
                  value={item.image}
                  onChange={(image) =>
                    setCms({
                      ...cms,
                      houseDesigns: cms.houseDesigns.map((x, idx) =>
                        idx === i ? { ...x, image } : x,
                      ),
                    })
                  }
                />
                <Field
                  label="Tab (all, ba-tang, biet-thu, nha-pho)"
                  value={item.tabs.join(", ")}
                  onChange={(text) =>
                    setCms({
                      ...cms,
                      houseDesigns: cms.houseDesigns.map((x, idx) =>
                        idx === i
                          ? {
                              ...x,
                              tabs: text
                                .split(",")
                                .map((t) => t.trim())
                                .filter(Boolean),
                            }
                          : x,
                      ),
                    })
                  }
                />
                <Field
                  label="Tóm tắt trang chi tiết"
                  multiline
                  span2
                  value={item.summary || ""}
                  onChange={(summary) =>
                    setCms({
                      ...cms,
                      houseDesigns: cms.houseDesigns.map((x, idx) =>
                        idx === i ? { ...x, summary } : x,
                      ),
                    })
                  }
                />
              </div>
              <ItemActions
                onUp={() => setCms({ ...cms, houseDesigns: moveItem(cms.houseDesigns, i, -1) })}
                onDown={() => setCms({ ...cms, houseDesigns: moveItem(cms.houseDesigns, i, 1) })}
                onRemove={() =>
                  setCms({
                    ...cms,
                    houseDesigns: cms.houseDesigns.filter((_, idx) => idx !== i),
                  })
                }
              />
            </article>
          ))}
        </CardList>

        <SaveBar
          saving={saving}
          message={message}
          onSave={() =>
            save({
              intro: cms.intro,
              slides: cms.slides,
              benefits: cms.benefits,
              fields: cms.fields,
              houseDesigns: cms.houseDesigns,
            })
          }
        />
      </div>
    </AdminShell>
  );
}
