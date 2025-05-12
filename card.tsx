export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
