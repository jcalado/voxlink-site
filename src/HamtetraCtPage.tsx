import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { useLanguage } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./i18n/LanguageSwitcher";
import { AccessRequestForm } from "./AccessRequestForm";

export default function HamtetraCtPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-community-bg text-on-surface font-sans">
      <nav className="w-full top-0 sticky z-50 bg-slate-950/80 backdrop-blur-xl h-24 flex items-center border-b border-border">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <Link to="/" className="flex items-center gap-4 lg:gap-5">
            <Logo size="md" className="shadow-lg shadow-black/40" />
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white font-headline">VoxLink</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-vibrant-blue mb-4">
            {t("hamtetra.eyebrow")}
          </span>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-white mb-6 tracking-tight">
            {t("hamtetra.title")}
          </h1>
          <p className="text-on-surface-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {t("hamtetra.intro")}
          </p>
        </motion.div>

        <AccessRequestForm />

        <div className="mt-12 text-center text-sm text-on-surface-muted">
          <Link to="/" className="hover:text-vibrant-red transition-colors">{t("hamtetra.back")}</Link>
        </div>
      </main>
    </div>
  );
}
