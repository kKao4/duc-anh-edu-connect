interface PopperProps {
  children: React.ReactNode,
  title: string
}

export default function Popper({ children, title }: PopperProps) {
  return (
    <div className="absolute top-0 right-0 translate-x-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-500 z-20">
      <span className="absolute top-3 translate-y-1/2 left-1.5 w-3 h-3 bg-white z-30 rotate-45 border-1 border border-primary-10 border-t-transparent border-r-transparent opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-500" />
      <div className="ml-3 w-[17.5rem] px-6 py-4 bg-white z-20 outline-1 rounded outline outline-primary-10">
        <p className="text-1 font-semibold leading-1.2 text-secondary-50 mb-4">{title}</p>
        <ul className="flex flex-col">
          {children}
        </ul>
      </div>
    </div>
  )
}