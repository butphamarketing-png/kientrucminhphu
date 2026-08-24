"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <p className="text-[15px] leading-7">
        Đã nhận thông tin. Cảm ơn bạn đã liên hệ Kiến trúc Minh Phú!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        required
        name="ten"
        placeholder="Họ và tên"
        className="border border-[var(--color-main)] rounded-lg px-3 py-3 outline-none"
      />
      <input
        required
        name="dienthoai"
        placeholder="Số điện thoại"
        className="border border-[var(--color-main)] rounded-lg px-3 py-3 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-[var(--color-main)] rounded-lg px-3 py-3 outline-none"
      />
      <input
        name="diachi"
        placeholder="Địa chỉ"
        className="border border-[var(--color-main)] rounded-lg px-3 py-3 outline-none"
      />
      <textarea
        required
        name="noidung"
        rows={5}
        placeholder="Nội dung"
        className="border border-[var(--color-main)] rounded-lg px-3 py-3 outline-none resize-y"
      />
      <button
        type="submit"
        className="bg-[var(--color-main)] text-white py-3 rounded-lg font-bold uppercase hover:bg-[#0e7ab3] transition"
      >
        Gửi liên hệ
      </button>
    </form>
  );
}
