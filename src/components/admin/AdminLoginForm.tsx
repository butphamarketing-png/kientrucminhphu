"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BP_LOGIN } from "@/lib/cms/bp-login";
import {
  IconArrow,
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
} from "@/components/admin/AdminLoginIcons";

export function AdminLoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState(BP_LOGIN.emailPlaceholder);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/adminbp/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Đăng nhập thất bại");
        setLoading(false);
        return;
      }
      const next = search.get("next") || "/adminbp";
      router.replace(next);
      router.refresh();
    } catch {
      setError("Không kết nối được máy chủ");
      setLoading(false);
    }
  }

  return (
    <form className="login-form" id="loginForm" onSubmit={onSubmit}>
      <label className="field-label" htmlFor="loginEmail">
        Email quản trị
      </label>
      <div className="field-wrap">
        <span className="field-icon" aria-hidden>
          <IconMail />
        </span>
        <input
          id="loginEmail"
          type="email"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={BP_LOGIN.emailPlaceholder}
          autoComplete="username"
          required
        />
      </div>

      <label className="field-label" htmlFor="loginPassword">
        Mật khẩu
      </label>
      <div className="field-wrap">
        <span className="field-icon" aria-hidden>
          <IconLock />
        </span>
        <input
          id="loginPassword"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <button
          type="button"
          className="field-toggle"
          aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? <IconEyeOff /> : <IconEye />}
        </button>
      </div>

      {error ? (
        <p className="login-error" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn-login" disabled={loading}>
        <span>{loading ? "Đang đăng nhập…" : "Đăng nhập CMS"}</span>
        <span className="btn-login-arrow" aria-hidden>
          <IconArrow />
        </span>
      </button>
    </form>
  );
}
