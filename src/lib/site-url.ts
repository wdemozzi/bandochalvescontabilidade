/**
 * URL pública do site. Na Vercel, defina a variável de ambiente
 * VITE_SITE_URL (ex: https://bandochalves.com.br) em
 * Project Settings → Environment Variables. Sem ela, usa o fallback abaixo.
 */
const raw = import.meta.env["VITE_SITE_URL"] as string | undefined;

export const SITE_URL =
  (raw && raw.replace(/\/+$/, "")) || "https://www.bandochalvescontabilidade.com.br";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
