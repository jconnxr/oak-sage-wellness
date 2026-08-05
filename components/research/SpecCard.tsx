type SpecCardProps = {
  value: string;
  label: string;
};

export function SpecCard({ value, label }: SpecCardProps) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-6 text-center sm:px-6 sm:py-8">
      <p className="font-mono text-2xl font-medium tracking-tight text-sky-400 sm:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-neutral-400 uppercase sm:text-xs">
        {label}
      </p>
    </div>
  );
}
