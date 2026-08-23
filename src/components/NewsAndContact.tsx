"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/Icons";
import { news } from "@/data/site";

export function NewsAndContact() {
  const [sent, setSent] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="news-newsletter">
      <div className="center1366np">
        <div className="news-newsletter">
          <div className="news">
            <h2 className="news-title">Tin tức</h2>

            <div className="news-top relative">
              <div
                ref={scroller}
                className="d-flex"
                style={{ gap: 24, overflowX: "auto", scrollBehavior: "smooth" }}
              >
                {news.map((item) => (
                  <div
                    key={item.href}
                    className="news-item"
                    style={{ minWidth: "46%", flex: "0 0 46%" }}
                  >
                    <div className="news-img">
                      <Link
                        href={item.href}
                        className="text-decoration-none scale-img btn-hover-img"
                        title={item.title}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={308}
                          height={151}
                          className="w-full h-auto object-cover"
                        />
                      </Link>
                    </div>
                    <div className="news-desc">
                      <h3 className="news-name">
                        <Link
                          href={item.href}
                          className="text-split text-split-2"
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <p className="news-info text-split text-split-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex" style={{ gap: 8, marginTop: 16 }}>
                <button
                  type="button"
                  aria-label="Trước"
                  onClick={() =>
                    scroller.current?.scrollBy({ left: -300, behavior: "smooth" })
                  }
                  className="control-style"
                >
                  <IconChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Sau"
                  onClick={() =>
                    scroller.current?.scrollBy({ left: 300, behavior: "smooth" })
                  }
                  className="control-style"
                >
                  <IconChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="newsletter">
            <div className="title-main title-main-white">
              <h2>Đăng ký tư vấn</h2>
            </div>
            {sent ? (
              <p style={{ textAlign: "center", padding: "40px 0", margin: 0 }}>
                Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ sớm nhất!
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="form-contact-index row"
              >
                <div className="input-contact-index col-sm-6 mb-3">
                  <label htmlFor="ten">Họ và tên</label>
                  <div className="input-contact-box">
                    <input
                      required
                      id="ten"
                      name="ten"
                      placeholder="Nhập họ và tên"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input-contact-index col-sm-6 mb-3">
                  <label htmlFor="dienthoai">Số điện thoại</label>
                  <div className="input-contact-box input-contact-box2">
                    <input
                      required
                      id="dienthoai"
                      name="dienthoai"
                      inputMode="numeric"
                      placeholder="Nhập số điện thoại"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input-contact-index col-sm-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <div className="input-contact-box input-contact-box3">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Nhập email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input-contact-index col-sm-6 mb-3">
                  <label htmlFor="diachi">Địa chỉ</label>
                  <div className="input-contact-box input-contact-box4">
                    <input
                      required
                      id="diachi"
                      name="diachi"
                      placeholder="Nhập địa chỉ"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input-contact-index col-12 mb-3">
                  <label htmlFor="noidung">Nội dung</label>
                  <div className="input-contact-box input-contact-box5">
                    <textarea
                      required
                      id="noidung"
                      name="noidung"
                      rows={5}
                      placeholder="Nhập nội dung"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button type="submit" className="btn-contact-index">
                    Gửi ngay
                    <Image
                      src="/media/assets/img/icon-dk.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
