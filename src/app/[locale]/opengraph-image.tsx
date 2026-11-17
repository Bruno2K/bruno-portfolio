import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getSocialImageAlt } from "@/i18n/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({ params }: { params: { locale: string } }) {
  return [
    {
      id: "default",
      alt: getSocialImageAlt(params.locale),
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({
  params,
  id,
}: {
  params: Promise<{ locale: string }>;
  id: Promise<string>;
}) {
  await id;
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const statement =
    locale === "pt-br"
      ? "Sistemas confiáveis. Trade-offs explícitos. Evidências acima de afirmações."
      : "Reliable systems. Explicit trade-offs. Evidence over claims.";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafafa",
        color: "#111111",
        padding: 72,
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#777777",
        }}
      >
        {dictionary.site.name} · {dictionary.site.role}
      </div>
      <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 920, fontWeight: 500 }}>
        {statement}
      </div>
    </div>,
    size,
  );
}
