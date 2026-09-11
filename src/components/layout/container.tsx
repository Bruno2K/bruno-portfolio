import { cx } from "@/lib/cx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cx("container-shell", className)}>{children}</Tag>;
}
