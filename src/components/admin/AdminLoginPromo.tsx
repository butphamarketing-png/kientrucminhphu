import { BP_LOGIN } from "@/lib/cms/bp-login";
import { IconSpark, promoIcons } from "@/components/admin/AdminLoginIcons";

export function AdminLoginPromo() {
  return (
    <aside className="login-promo">
      <div className="login-promo-blobs" aria-hidden>
        <span className="login-blob login-blob--violet" />
        <span className="login-blob login-blob--indigo" />
      </div>
      <div className="login-promo-inner">
        <div className="promo-brand">
          <img src="/adminbp/bp-logo.png" alt="" width={44} height={44} />
          <div>
            <strong>BỨT PHÁ MARKETING</strong>
            <small>DÀNH CHO KHÁCH HÀNG</small>
          </div>
        </div>
        <h2>
          {BP_LOGIN.heroLines[0]}
          <br />
          {BP_LOGIN.heroLines[1]}
        </h2>
        <p className="promo-lead">{BP_LOGIN.heroLead}</p>

        <div className="promo-contacts">
          {BP_LOGIN.contacts.map((c) => {
            const Icon = promoIcons[c.icon];
            return (
              <a
                key={c.key}
                className="promo-chip"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="promo-chip-ico" aria-hidden>
                  <Icon />
                </span>
                <span>
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </span>
              </a>
            );
          })}
        </div>

        <p className="promo-section-title">DỊCH VỤ CỦA CHÚNG TÔI</p>
        <div className="promo-services">
          {BP_LOGIN.services.map((s) => {
            const Icon = promoIcons[s.icon];
            return (
              <a
                key={s.title}
                className="promo-service"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="promo-service-ico" aria-hidden>
                  <Icon />
                </span>
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.desc}</small>
                </span>
              </a>
            );
          })}
        </div>

        <footer className="promo-footer">
          <span className="promo-powered">
            <IconSpark />
            Powered by Bứt Phá Marketing
          </span>
          <span className="promo-version">{BP_LOGIN.version}</span>
        </footer>
      </div>
    </aside>
  );
}
