import { getJson, isR2Configured, putJson } from "./r2";

const CONTACTS_KEY = "cms/contacts.json";
const MAX_ITEMS = 200;

export type ContactMessage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  createdAt: string;
};

function normalize(raw: unknown): ContactMessage[] {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((row) => {
    if (!row || typeof row !== "object") return [];
    const item = row as Partial<ContactMessage>;
    if (!item.id || !item.name || !item.message) return [];
    return [
      {
        id: String(item.id),
        name: String(item.name),
        phone: String(item.phone || ""),
        email: String(item.email || ""),
        address: String(item.address || ""),
        message: String(item.message),
        createdAt: String(item.createdAt || ""),
      },
    ];
  });
}

export async function listContacts(): Promise<ContactMessage[]> {
  if (!isR2Configured()) return [];
  return normalize(await getJson<unknown>(CONTACTS_KEY));
}

export async function addContact(input: {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  message: string;
}) {
  if (!isR2Configured()) {
    return { ok: false as const, error: "Kho lưu liên hệ chưa sẵn sàng." };
  }
  const name = input.name.trim().slice(0, 120);
  const phone = input.phone.trim().slice(0, 30);
  const message = input.message.trim().slice(0, 4000);
  if (!name || !phone || !message) {
    return { ok: false as const, error: "Vui lòng nhập họ tên, số điện thoại và nội dung." };
  }
  const list = await listContacts();
  const next: ContactMessage = {
    id: `lh-${Date.now().toString(36)}`,
    name,
    phone,
    email: (input.email || "").trim().slice(0, 160),
    address: (input.address || "").trim().slice(0, 240),
    message,
    createdAt: new Date().toISOString(),
  };
  await putJson(CONTACTS_KEY, [next, ...list].slice(0, MAX_ITEMS));
  return { ok: true as const };
}

export async function deleteContact(id: string) {
  if (!isR2Configured() || !id) return { ok: false as const };
  const list = await listContacts();
  await putJson(
    CONTACTS_KEY,
    list.filter((row) => row.id !== id),
  );
  return { ok: true as const };
}
