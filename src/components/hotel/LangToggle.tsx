import { useI18n, type Lang } from "@/lib/i18n";

export function LangToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useI18n();
  const base = tone === "light" ? "text-ivory/70 border-ivory/20" : "text-charcoal/70 border-border";
  const active = tone === "light" ? "bg-bronze text-ivory border-bronze" : "bg-charcoal text-ivory border-charcoal";

  const Btn = ({ value, label }: { value: Lang; label: string }) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={`px-2.5 py-1 text-[11px] tracking-[0.22em] uppercase transition-colors ${
        lang === value ? active : base
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className={`inline-flex items-center border ${tone === "light" ? "border-ivory/20" : "border-border"}`}>
      <Btn value="fr" label="FR" />
      <Btn value="en" label="EN" />
    </div>
  );
}
