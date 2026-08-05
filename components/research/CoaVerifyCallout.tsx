/** Verification callout for the COA / trust section on /research. */
export function CoaVerifyCallout() {
  return (
    <aside
      className="rounded-lg border border-sky-400/50 bg-sky-400/5 px-5 py-5 sm:px-6 sm:py-6"
      aria-label="Certificate verification"
    >
      <p className="text-base font-medium tracking-tight text-neutral-100 sm:text-lg">
        Verify it yourself.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300 sm:text-[0.9375rem]">
        Certificates are searchable by accession number at{" "}
        <a
          href="https://freedomdiagnosticstesting.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify certificates at Freedom Diagnostics Testing"
          className="font-medium text-sky-400 underline-offset-4 hover:underline"
        >
          FreedomDiagnosticsTesting.com
        </a>{" "}
        — analysis performed by an independent US laboratory, not by us.
      </p>
    </aside>
  );
}
