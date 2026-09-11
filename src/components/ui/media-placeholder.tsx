import { cx } from "@/lib/cx";

type Accent = "blue" | "ink" | "wash" | "line";

const accents: Record<Accent, string> = {
  blue: "from-[#2b4bf2]/18 via-[#ececec] to-[#f5f5f5]",
  ink: "from-[#111111]/12 via-[#ececec] to-[#fafafa]",
  wash: "from-[#9a9a9a]/20 via-[#f5f5f5] to-[#ececec]",
  line: "from-[#777777]/16 via-[#fafafa] to-[#ececec]",
};

type MediaPlaceholderProps = {
  title: string;
  category?: string;
  accent?: Accent;
  className?: string;
  ratio?: "portrait" | "landscape" | "wide";
};

export function MediaPlaceholder({
  title,
  category,
  accent = "wash",
  className,
  ratio = "landscape",
}: MediaPlaceholderProps) {
  const ratioClass =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "wide"
        ? "aspect-[16/8]"
        : "aspect-[16/10]";

  return (
    <div
      className={cx(
        "bg-wash relative overflow-hidden rounded-[var(--radius-media)]",
        ratioClass,
        className,
      )}
      aria-hidden="true"
    >
      <div className={cx("absolute inset-0 bg-linear-to-br", accents[accent])} />
      <div className="absolute inset-6 rounded-[14px] border border-white/50" />
      <div className="absolute right-[12%] bottom-[16%] left-[12%]">
        {category ? <p className="text-eyebrow text-ink/60 mb-3">{category}</p> : null}
        <p className="text-h4 max-w-[16ch]">{title}</p>
      </div>
    </div>
  );
}
