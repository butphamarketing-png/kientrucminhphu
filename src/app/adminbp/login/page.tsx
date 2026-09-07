import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { AdminLoginPromo } from "@/components/admin/AdminLoginPromo";
import { IconShield, IconStar } from "@/components/admin/AdminLoginIcons";
import { BP_LOGIN } from "@/lib/cms/bp-login";

export const metadata = {
  title: { absolute: "Admin · Kiến Trúc Minh Phú" },
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="login-screen">
      <div className="login-layout">
        <section className="login-panel">
          <div className="login-panel-main">
            <div className="login-panel-head">
              <div className="login-logo-row">
                <img
                  className="login-bp-logo"
                  src="/adminbp/bp-logo.png"
                  alt="Bứt Phá Marketing"
                  width={44}
                  height={44}
                />
                <div>
                  <strong className="login-bp-name">BỨT PHÁ MARKETING</strong>
                  <small>CMS KHÁCH HÀNG</small>
                </div>
              </div>
              <p className="login-kicker">
                <IconStar />
                KHU VỰC QUẢN TRỊ HỆ THỐNG
              </p>
              <h1>Đăng nhập CMS</h1>
              <p className="login-desc">
                {BP_LOGIN.formDescriptionBefore}{" "}
                <strong>{BP_LOGIN.clientName}</strong> {BP_LOGIN.formDescriptionAfter}
              </p>
            </div>

            <Suspense fallback={<p className="login-desc">Đang tải…</p>}>
              <AdminLoginForm />
            </Suspense>
          </div>

          <p className="login-copy">
            <IconShield />
            <span>
              © Bứt Phá Marketing · {BP_LOGIN.clientName}
            </span>
          </p>
        </section>

        <AdminLoginPromo />
      </div>
    </div>
  );
}
