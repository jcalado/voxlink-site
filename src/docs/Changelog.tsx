import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, RefreshCw, Wrench, Tag, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

type Kind = "new" | "changed" | "fixed" | "other";

type Category = { kind: Kind; label: string; html: string; count: number };
type Release = { version: string; categories: Category[]; total: number };

// Section headings are localized, so map both EN and pt-PT labels to a kind.
const KIND_BY_LABEL: Record<string, Kind> = {
  new: "new",
  novidades: "new",
  changed: "changed",
  alterado: "changed",
  fixed: "fixed",
  corrigido: "fixed",
};

const KIND_STYLE: Record<Kind, { Icon: LucideIcon; text: string; dot: string }> = {
  new: { Icon: Sparkles, text: "text-emerald-400", dot: "bg-emerald-400" },
  changed: { Icon: RefreshCw, text: "text-vibrant-blue", dot: "bg-vibrant-blue" },
  fixed: { Icon: Wrench, text: "text-vibrant-orange", dot: "bg-vibrant-orange" },
  other: { Icon: Tag, text: "text-on-surface-muted", dot: "bg-slate-400" },
};

// The changelog is authored as Markdown and arrives here already rendered to
// HTML. Rather than special-case the Markdown, we walk the generated DOM and
// group it into releases (h2) → categories (h3) → list HTML.
function parseChangelog(html: string): { title: string; releases: Release[] } {
  const doc = new DOMParser().parseFromString(html, "text/html");
  let title = "Changelog";
  const releases: Release[] = [];
  let release: Release | null = null;
  let category: Category | null = null;

  for (const node of Array.from(doc.body.children)) {
    const tag = node.tagName;
    if (tag === "H1") {
      title = node.textContent?.trim() || title;
    } else if (tag === "H2") {
      release = { version: node.textContent?.trim() ?? "", categories: [], total: 0 };
      releases.push(release);
      category = null;
    } else if (tag === "H3" && release) {
      const label = node.textContent?.trim() ?? "";
      category = { kind: KIND_BY_LABEL[label.toLowerCase()] ?? "other", label, html: "", count: 0 };
      release.categories.push(category);
    } else if (release) {
      if (!category) {
        category = { kind: "other", label: "", html: "", count: 0 };
        release.categories.push(category);
      }
      category.html += (node as HTMLElement).outerHTML;
      if (tag === "UL" || tag === "OL") {
        category.count += node.querySelectorAll(":scope > li").length;
      }
    }
  }

  for (const r of releases) r.total = r.categories.reduce((s, c) => s + c.count, 0);
  return { title, releases };
}

function releaseId(version: string) {
  return `release-${version.replace(/[^\w.]+/g, "-")}`;
}

export function Changelog({ html }: { html: string }) {
  const { t } = useLanguage();
  const { title, releases } = useMemo(() => parseChangelog(html), [html]);

  // Version numbers are language-independent, so this open-set survives a
  // language switch. Latest release starts expanded.
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(releases.slice(0, 1).map((r) => r.version)),
  );

  const toggle = (version: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(version) ? next.delete(version) : next.add(version);
      return next;
    });

  const jump = (version: string) => {
    setOpen((prev) => new Set(prev).add(version));
    // Let the card expand before scrolling to it.
    requestAnimationFrame(() => {
      document.getElementById(releaseId(version))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-headline font-bold text-white mb-2">{title}</h1>
      <p className="text-on-surface-muted mb-8">{t("changelog.subtitle")}</p>

      {/* Quick-jump version rail */}
      <div className="flex flex-wrap gap-2 mb-10">
        {releases.map((r, i) => (
          <button
            key={r.version}
            type="button"
            onClick={() => jump(r.version)}
            className={`btn-press rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              i === 0
                ? "bg-vibrant-blue text-community-bg"
                : "bg-surface-raised/50 text-on-surface-muted hover:bg-surface-raised hover:text-white"
            }`}
          >
            {r.version}
            {i === 0 && (
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wide opacity-80">
                {t("changelog.latest")}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {releases.map((r, i) => {
          const isOpen = open.has(r.version);
          return (
            <section
              key={r.version}
              id={releaseId(r.version)}
              className="scroll-mt-24 rounded-3xl border border-border bg-surface-raised/30 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(r.version)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl font-headline font-bold text-white">{r.version}</span>
                  {i === 0 && (
                    <span className="rounded-full bg-vibrant-blue/15 text-vibrant-blue text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                      {t("changelog.latest")}
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-3">
                  {!isOpen && (
                    <span className="hidden sm:flex items-center gap-2.5">
                      {r.categories
                        .filter((c) => c.count > 0)
                        .map((c) => (
                          <span key={c.label} className="flex items-center gap-1.5 text-xs text-on-surface-muted">
                            <span className={`h-1.5 w-1.5 rounded-full ${KIND_STYLE[c.kind].dot}`} />
                            {c.count}
                          </span>
                        ))}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-5 h-5 text-on-surface-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 pt-1 space-y-6">
                  {r.categories.map((c, ci) => {
                    const style = KIND_STYLE[c.kind];
                    return (
                      <div key={c.label || ci}>
                        {c.label && (
                          <div
                            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 ${style.text}`}
                          >
                            <style.Icon className="w-4 h-4" />
                            {c.label}
                          </div>
                        )}
                        <div className="prose" dangerouslySetInnerHTML={{ __html: c.html }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
