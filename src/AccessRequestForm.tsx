import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Radio, CheckCircle2, AlertCircle, Upload } from "lucide-react";
import { useLanguage } from "./i18n/LanguageContext";

const ENDPOINT = "https://dash.hamtetra.pt/request-access.php";
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED = ["application/pdf", "image/jpeg", "image/png"];
const CALLSIGN_RE = /^[A-Z0-9]{3,7}(\/[A-Z0-9]{1,4})?$/;

type Status = "idle" | "submitting" | "success" | "error";

export function AccessRequestForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const callsign = String(data.get("callsign") ?? "").trim().toUpperCase();
    const email = String(data.get("email") ?? "").trim();
    const license = data.get("license") as File | null;

    if (!CALLSIGN_RE.test(callsign)) {
      setError(t("hamtetra.form.error.callsign"));
      return;
    }
    if (!email || !email.includes("@")) {
      setError(t("hamtetra.form.error.email"));
      return;
    }
    if (!license || license.size === 0) {
      setError(t("hamtetra.form.error.fileMissing"));
      return;
    }
    if (!ACCEPTED.includes(license.type)) {
      setError(t("hamtetra.form.error.fileType"));
      return;
    }
    if (license.size > MAX_FILE_BYTES) {
      setError(t("hamtetra.form.error.fileSize"));
      return;
    }

    data.set("callsign", callsign);

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
      setFileName(null);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t("hamtetra.form.error.network"));
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-surface-raised/40 border border-border rounded-3xl p-10 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-status-online mx-auto mb-6" />
        <h3 className="font-headline font-bold text-3xl text-white mb-3">{t("hamtetra.form.successTitle")}</h3>
        <p className="text-on-surface-muted leading-relaxed">
          {t("hamtetra.form.successBody")}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-surface-raised/40 border border-border rounded-3xl p-8 lg:p-12 space-y-6"
      encType="multipart/form-data"
      noValidate
    >
      <div className="flex items-center gap-3 mb-2">
        <Radio className="w-6 h-6 text-vibrant-blue" />
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-muted">
          {t("hamtetra.form.label")}
        </span>
      </div>

      <div className="space-y-2">
        <label htmlFor="callsign" className="block text-sm font-semibold text-white">
          {t("hamtetra.form.callsign")}
        </label>
        <input
          id="callsign"
          name="callsign"
          type="text"
          required
          autoComplete="off"
          spellCheck={false}
          maxLength={12}
          placeholder="CT1ABC"
          className="w-full bg-community-bg border border-border rounded-2xl px-5 py-3.5 text-white placeholder:text-on-surface-muted/60 focus:outline-none focus:border-vibrant-blue uppercase tracking-wider font-mono"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-white">
          {t("hamtetra.form.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full bg-community-bg border border-border rounded-2xl px-5 py-3.5 text-white placeholder:text-on-surface-muted/60 focus:outline-none focus:border-vibrant-blue"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-semibold text-white">
          {t("hamtetra.form.notes")} <span className="text-on-surface-muted font-normal">{t("hamtetra.form.notesOptional")}</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          maxLength={500}
          placeholder={t("hamtetra.form.notesPlaceholder")}
          className="w-full bg-community-bg border border-border rounded-2xl px-5 py-3.5 text-white placeholder:text-on-surface-muted/60 focus:outline-none focus:border-vibrant-blue resize-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="license" className="block text-sm font-semibold text-white">
          {t("hamtetra.form.license")} <span className="text-on-surface-muted font-normal">{t("hamtetra.form.licenseHint")}</span>
        </label>
        <label
          htmlFor="license"
          className="flex items-center gap-3 bg-community-bg border border-dashed border-border hover:border-vibrant-blue rounded-2xl px-5 py-4 cursor-pointer transition-colors"
        >
          <Upload className="w-5 h-5 text-vibrant-blue shrink-0" />
          <span className="text-on-surface-muted truncate">
            {fileName ?? t("hamtetra.form.licenseCta")}
          </span>
        </label>
        <input
          id="license"
          name="license"
          type="file"
          required
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          className="sr-only"
          onChange={(e) => setFileName(e.currentTarget.files?.[0]?.name ?? null)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-on-surface-muted">
        <input type="checkbox" name="consent" required className="mt-1 accent-vibrant-blue" />
        <span>{t("hamtetra.form.consent")}</span>
      </label>

      {error && (
        <div className="flex items-start gap-3 bg-vibrant-red/10 border border-vibrant-red/30 rounded-2xl px-5 py-3 text-sm text-white">
          <AlertCircle className="w-5 h-5 text-vibrant-red shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-press w-full bg-vibrant-red hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5"
      >
        {status === "submitting" ? t("hamtetra.form.submitting") : t("hamtetra.form.submit")}
      </button>
    </motion.form>
  );
}
