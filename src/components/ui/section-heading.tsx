import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  index?: string;
  title: string;
  as?: "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  index,
  title,
  as: Tag = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cx("flex max-w-[780px] flex-col gap-5", className)}>
      {index ? <p className="text-eyebrow">{index}</p> : null}
      <Tag className={cx(Tag === "h2" ? "text-h2" : "text-h3", titleClassName)}>
        {title}
      </Tag>
    </div>
  );
}
