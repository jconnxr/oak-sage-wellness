/** Non-dismissible RUO strip — must remain visible in the first viewport. */
export function ComplianceBanner() {
  return (
    <div
      role="note"
      aria-label="Research use only notice"
      className="border-y border-amber-700/40 bg-amber-950/40 px-4 py-2.5 text-center"
    >
      <p className="text-xs tracking-wide text-amber-200 uppercase sm:text-sm">
        Research Use Only — Not for Human Consumption
      </p>
    </div>
  );
}
