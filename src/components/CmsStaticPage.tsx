import { SimpleContentPage } from "@/components/SimpleContentPage";
import { CmsBody } from "@/components/CmsBody";
import { readCms } from "@/lib/cms/store";
import { pageMeta } from "@/lib/seo";

export async function cmsPageMeta(
  path: string,
  fallback: { title: string; description: string },
) {
  const cms = await readCms();
  const page = cms.pages.find((p) => p.path === path);
  return pageMeta({
    title: page?.title || fallback.title,
    description: page?.description || fallback.description,
    path,
  });
}

export async function CmsStaticPage({
  path,
  fallbackTitle,
}: {
  path: string;
  fallbackTitle: string;
}) {
  const cms = await readCms();
  const page = cms.pages.find((p) => p.path === path);
  const title = page?.title || fallbackTitle;
  const { settings } = cms;

  return (
    <SimpleContentPage title={title} path={path} settings={settings}>
      {page?.body ? <CmsBody text={page.body} /> : null}
      {path === "/tuyen-dung" ? (
        <p>
          Ứng viên gửi hồ sơ về email{" "}
          <a className="text-[var(--color-main)] font-semibold" href={`mailto:${settings.email}`}>
            {settings.email}
          </a>{" "}
          hoặc hotline{" "}
          <a className="text-[var(--color-main)] font-semibold" href={`tel:${settings.phoneRaw}`}>
            {settings.phone}
          </a>
          .
        </p>
      ) : null}
    </SimpleContentPage>
  );
}
