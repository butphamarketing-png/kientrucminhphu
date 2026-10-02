function has(name: string) {
  return Boolean(process.env[name]?.trim());
}

export function required(names: string[]) {
  return names.every((name) => has(name));
}

export function env(name: string, fallback = "") {
  return process.env[name]?.trim() || fallback;
}
