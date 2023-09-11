export function encodeToBase64(input: string): string {
  const buffer = Buffer.from(input, "utf-8");
  const base64Encoded = buffer.toString("base64");
  return base64Encoded;
}
