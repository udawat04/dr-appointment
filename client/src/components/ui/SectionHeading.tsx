type SectionHeadingProps = {
  badge?: string
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${
            light
              ? 'glass text-white/90'
              : 'bg-primary-100 text-primary-800 border border-primary-200/60'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-850'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-white/75' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
