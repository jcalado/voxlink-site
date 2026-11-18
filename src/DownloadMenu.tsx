import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  Download,
  Laptop,
  Smartphone,
  Monitor,
  Terminal,
} from "lucide-react";
import { useLanguage } from "./i18n/LanguageContext";

type DownloadItem = {
  key: string;
  labelKey: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

// Lucide's `Apple` icon is a piece of fruit, so the App Store row uses the
// real brand glyph instead. The path is drawn on a 24×24 grid it fills edge to
// edge; the padded viewBox shrinks it to ~13.3px inside a 16px box, matching
// the content height of the lucide icons beside it. A solid mark reads heavier
// than their 2px strokes, so it stops a touch short of their full 20/24 box.
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-2.5 -2.5 29 29"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

// Store listings (Google Play, App Store) plus direct, version-pinned download
// assets. Every self-hosted build — Android APK plus the macOS .dmg / Windows
// installer / AppImage / .deb — is published to the voxlink-site repo's
// releases. Bump the version in these URLs on each release. iOS ships through
// the App Store only, so it has no direct download.
const DOWNLOADS: DownloadItem[] = [
  {
    key: "playStore",
    labelKey: "download.playStore",
    href: "https://play.google.com/store/apps/details?id=com.jcalado.voxlink",
    Icon: Smartphone,
    external: true,
  },
  {
    key: "appStore",
    labelKey: "download.appStore",
    href: "https://apps.apple.com/us/app/voxlink-ptt-for-svxlink/id6819157055",
    Icon: AppleIcon,
    external: true,
  },
  {
    key: "apk",
    labelKey: "download.apk",
    href: "https://github.com/jcalado/voxlink-site/releases/download/v1.8.0/voxlink-1.8.0.apk",
    Icon: Download,
  },
  {
    key: "macos",
    labelKey: "download.macos",
    href: "https://github.com/jcalado/voxlink-site/releases/download/v1.8.0/VoxLink-1.8.0.dmg",
    Icon: Laptop,
    external: true,
  },
  {
    key: "windows",
    labelKey: "download.windows",
    href: "https://github.com/jcalado/voxlink-site/releases/download/v1.8.0/VoxLink-1.8.0-setup.exe",
    Icon: Monitor,
    external: true,
  },
  {
    key: "linuxAppImage",
    labelKey: "download.linuxAppImage",
    href: "https://github.com/jcalado/voxlink-site/releases/download/v1.8.0/VoxLink-1.8.0-x86_64.AppImage",
    Icon: Terminal,
    external: true,
  },
  {
    key: "linuxDeb",
    labelKey: "download.linuxDeb",
    href: "https://github.com/jcalado/voxlink-site/releases/download/v1.8.0/voxlink_1.8.0_amd64.deb",
    Icon: Terminal,
    external: true,
  },
];

type DownloadMenuProps = {
  /** Classes for the trigger button so it can match each call site's CTA style. */
  triggerClassName: string;
  /** Wrapper classes — used to inherit sizing (e.g. `w-full sm:w-auto`). */
  className?: string;
  /** Which edge the menu aligns to. */
  align?: "left" | "right";
};

export function DownloadMenu({
  triggerClassName,
  className,
  align = "left",
}: DownloadMenuProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const MENU_WIDTH = 256; // matches w-64

  // The menu is portaled to <body> so no `overflow-hidden` ancestor (e.g. the
  // hero header) can clip it. Position it as a fixed box anchored to the
  // trigger, re-measuring on scroll/resize while open.
  useLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const el = triggerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const rawLeft = align === "right" ? r.right - MENU_WIDTH : r.left;
      const left = Math.max(
        8,
        Math.min(rawLeft, window.innerWidth - MENU_WIDTH - 8),
      );
      setCoords({ top: r.bottom + 8, left });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, align]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={triggerClassName}
      >
        <Download className="w-5 h-5" />
        {t("download.label")}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ top: coords.top, left: coords.left, width: MENU_WIDTH }}
            className="fixed z-[60] origin-top rounded-2xl border border-border bg-slate-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {DOWNLOADS.map(({ key, labelKey, href, Icon, external }) => (
              <a
                key={key}
                href={href}
                role="menuitem"
                onClick={() => setOpen(false)}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-on-surface transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="w-4 h-4 shrink-0 text-vibrant-blue" />
                {t(labelKey)}
              </a>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
}
