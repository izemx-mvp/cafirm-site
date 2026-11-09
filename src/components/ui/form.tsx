/** Styles et helpers partagés des formulaires. */

export const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-navy";

export const errorCls = "mt-1.5 text-xs text-[#B4433A]";

export function inputCls(hasError: boolean) {
  return `w-full rounded-[2px] border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold ${
    hasError ? "border-[#B4433A]" : "border-line"
  }`;
}

export function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p role="alert" className={errorCls}>
      {error}
    </p>
  );
}
