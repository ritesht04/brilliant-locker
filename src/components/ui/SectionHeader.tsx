import clsx from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-light">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}