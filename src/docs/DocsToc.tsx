import { useEffect } from "react";
import tocbot from "tocbot";
import { useLanguage } from "../i18n/LanguageContext";

export function DocsToc({ slug, hasContent }: { slug: string; hasContent: boolean }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!hasContent) return;
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h2, h3",
      hasInnerContainers: true,
      scrollSmooth: true,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: -80,
      headingsOffset: 80,
      activeLinkClass: "is-active-link",
      listClass: "toc-list",
      linkClass: "toc-link",
      collapseDepth: 6,
    });
    return () => {
      tocbot.destroy();
    };
  }, [slug, hasContent]);

  return (
    <aside className="hidden xl:block flex-shrink-0 sticky top-14 self-start w-56 h-[calc(100vh-3.5rem)] overflow-y-auto py-10 pr-6">
      <div className="text-[10px] font-bold uppercase tracking-widest text-vibrant-orange mb-3">
        {t("docs.onThisPage")}
      </div>
      <nav className="js-toc" />
    </aside>
  );
}
