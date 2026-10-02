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

export function AdminPricingEditor() {
  const { cms, setCms, save, saving, message } = useCmsEditor();

  if (!cms) {
    return (
      <AdminShell title="Bảng báo giá" hint="Đang tải…">
        <p>Đang tải dữ liệu CMS.</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Bảng báo giá" hint="Các gói báo giá trên /bang-bao-gia.">
      <div className="adminbp-form">
        <CardList
          title={`${cms.pricingCards.length} gói`}
          onAdd={() =>
            setCms({
              ...cms,
              pricingCards: [
                {
                  id: nid("price"),
                  title: "Gói mới",
                  href: `/bang-bao-gia/${slugifyTitle("goi-moi")}-${Date.now().toString(36)}`,
                  image: PLACEHOLDER,
                  summary: "",
                  highlights: [],
                },
                ...cms.pricingCards,
              ],
            })
          }
        >
          {cms.pricingCards.map((item, i) => (
            <article key={item.id} className="adminbp-item">
              <div className="adminbp-grid">
                <Field
                  label="Tiêu đề"
                  value={item.title}
                  onChange={(title) =>
                    setCms({
                      ...cms,
                      pricingCards: cms.pricingCards.map((x, idx) =>
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
                      pricingCards: cms.pricingCards.map((x, idx) =>
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
                      pricingCards: cms.pricingCards.map((x, idx) =>
                        idx === i ? { ...x, image } : x,
                      ),
                    })
                  }
                />
                <Field
                  label="Tóm tắt"
                  multiline
                  span2
                  value={item.summary}
                  onChange={(summary) =>
                    setCms({
                      ...cms,
                      pricingCards: cms.pricingCards.map((x, idx) =>
                        idx === i ? { ...x, summary } : x,
                      ),
                    })
                  }
                />
                <Field
                  label="Điểm nổi bật (mỗi dòng 1 ý)"
                  multiline
                  span2
                  value={item.highlights.join("\n")}
                  onChange={(text) =>
                    setCms({
                      ...cms,
                      pricingCards: cms.pricingCards.map((x, idx) =>
                        idx === i
                          ? {
                              ...x,
                              highlights: text
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
                onUp={() => setCms({ ...cms, pricingCards: moveItem(cms.pricingCards, i, -1) })}
                onDown={() => setCms({ ...cms, pricingCards: moveItem(cms.pricingCards, i, 1) })}
                onRemove={() =>
                  setCms({
                    ...cms,
                    pricingCards: cms.pricingCards.filter((_, idx) => idx !== i),
                  })
                }
              />
            </article>
          ))}
        </CardList>
        <SaveBar
          saving={saving}
          message={message}
          onSave={() => save({ pricingCards: cms.pricingCards })}
        />
      </div>
    </AdminShell>
  );
}
