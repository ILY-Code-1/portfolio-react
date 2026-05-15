/**
 * Format tanggal ISO (YYYY-MM-DD) → "15 Januari 2025" (locale id-ID).
 */
export const formatDateID = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/**
 * Normalisasi nomor WhatsApp:
 *  - hapus semua non-digit
 *  - prefix 0 → 62
 *  - validasi panjang 9–15 digit
 */
export const normalizeWhatsapp = (raw) => {
  let digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "62" + digits.slice(1);
  return digits;
};

export const isValidWhatsapp = (digits) =>
  /^[0-9]+$/.test(digits) && digits.length >= 9 && digits.length <= 15;

export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email ?? "").trim());
