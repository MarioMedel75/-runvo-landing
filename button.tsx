export function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`rounded-xl px-6 py-2 font-semibold transition ${className}`}>
      {children}
    </button>
  );
}
