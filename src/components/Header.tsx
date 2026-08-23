"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("mm-wrapper_opening", open);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mm-wrapper_opening");
    };
  }, [open]);

  return (
    <>
      <div id="header">
        <div className="center">
          <div className="marquee">
            <div className="marquee-text">
              {site.greeting}&nbsp;&nbsp;&nbsp;&nbsp;{site.greeting}
            </div>
          </div>
        </div>
      </div>

      <div id="menu" className={scrolled ? "shadow-md" : ""}>
        <div className="center menu-top">
          <div className="logo-menu">
            <Link href="/">
              <Image
                src="/brand/logo-menu-lg.png.webp"
                alt={site.shortName}
                width={58}
                height={60}
                priority
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/" className="transition active" title="Trang chủ">
                <i className="fa fa-home" aria-hidden />
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition" title={item.label}>
                  {item.label}{" "}
                  {item.children ? <i className="fas fa-sort-down" aria-hidden /> : null}
                </Link>
                {item.children ? (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="transition" title={child.label}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="btn-search">
              <a
                className="transition"
                href="#"
                title="Tìm kiếm"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchOpen((v) => !v);
                }}
              >
                <i className="fa fa-search" aria-hidden />
              </a>
              {searchOpen ? (
                <div className="search-drop">
                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Nhập từ khóa cần tìm..."
                    autoFocus
                  />
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </div>

      {/* Origin markup: hamburger | logo | search */}
      <div id="menu-mobile" className={scrolled ? "shadow-md" : ""}>
        <div className="menu-bar-res">
          <div className="menu-mobile-width">
            <a
              id="hamburger"
              href="#mmenu"
              title="Menu"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <span />
            </a>
          </div>
          <div className="logo-menu-mobile">
            <Link href="/">
              <Image
                src="/brand/logo-menu-lg.png.webp"
                alt={site.shortName}
                width={58}
                height={60}
                priority
              />
            </Link>
          </div>
          <div className="menu-mobile-width">
            <div className="btn-search">
              <a
                className="search search_open"
                href="#"
                title="Tìm kiếm"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchOpen((v) => !v);
                }}
              >
                <i className="fa fa-search" aria-hidden />
              </a>
              {searchOpen ? (
                <div className="search_box_hide open">
                  <div className="box_input_search">
                    <input
                      type="text"
                      placeholder="Nhập từ khóa cần tìm..."
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mmenu-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <nav id="mmenu" className={open ? "open" : ""} aria-hidden={!open}>
        <div className="mmenu-head">
          <Image src="/brand/logo-menu-lg.png.webp" alt="logo" width={48} height={48} />
          <button type="button" className="mmenu-close" onClick={() => setOpen(false)} aria-label="Đóng">
            <i className="fa fa-times" aria-hidden />
          </button>
        </div>
        <ul>
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Trang chủ
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <div className="mmenu-row">
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    type="button"
                    className="mmenu-toggle"
                    aria-label="Mở submenu"
                    onClick={() =>
                      setOpenSub(openSub === item.href ? null : item.href)
                    }
                  >
                    <i
                      className={`fas fa-sort-down${openSub === item.href ? " up" : ""}`}
                    />
                  </button>
                ) : null}
              </div>
              {item.children && openSub === item.href ? (
                <ul className="mmenu-sub">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
