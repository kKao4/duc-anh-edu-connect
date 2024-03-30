interface MobileBadgeProps {
  children: React.ReactNode
}

export default function MobileBadge({ children }: MobileBadgeProps) {
  return (
    <div className="flex-none px-6 py-3 text-primary-40 text-1.25 leading-1.5 font-semibold -tracking-0.0125 rounded-full" style={{ backgroundColor: "rgba(192, 222, 250, 0.50)" }}>
      {children}
    </div>
  )
}