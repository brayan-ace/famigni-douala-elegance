import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/hotel";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href={waLink(t("wa.default"))}
      target="_blank"
      rel="noreferrer"
      aria-label={t("fab.aria")}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-bronze/40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-bronze text-ivory rounded-full pl-4 pr-5 py-3.5 shadow-[0_20px_40px_-10px_oklch(0.58_0.07_55_/_0.6)] hover:scale-105 transition-transform">
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline text-[12px] tracking-[0.22em] uppercase">{t("fab.book")}</span>
      </span>
    </a>
  );
}
