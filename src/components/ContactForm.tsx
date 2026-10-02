"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setPending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.get("ten"),
          phone: form.get("dienthoai"),
          email: form.get("email"),
          address: form.get("diachi"),
          message: form.get("noidung"),
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Không gửi được. Vui lòng gọi hotline.");
        return;
      }
      setSent(true);
    } catch {
      setError("Không gửi được. Vui lòng gọi hotline.");
    } finally {
      setPending(false);
    }
  }

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
      {error ? <p className="m-0 text-[14px] text-[#b42318]">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="bg-[var(--color-main)] text-white py-3 rounded-lg font-bold uppercase hover:bg-[#0e7ab3] transition disabled:opacity-60"
      >
        {pending ? "Đang gửi…" : "Gửi liên hệ"}
      </button>
    </form>
  );
}
