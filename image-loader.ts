const normalizeSrc = (src: string) => {
  // If it's already a full URL, return it as is
  if (src.startsWith('http')) {
    return src;
  }
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // If it's a local image or already a full URL, return as is
  if (src.startsWith("/") || src.startsWith("http")) {
    return src;
  }

  // Use the hardcoded URL
  const baseUrl = "https://pub-e1f3891360c64489aeae04e051dff80e.r2.dev";
  const normalizedSrc = normalizeSrc(src);

  return `${baseUrl}/${normalizedSrc}`;
}
