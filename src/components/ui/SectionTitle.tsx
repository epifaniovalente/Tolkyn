interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  description,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} mb-14`}>
      {label && (
        <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
          <div className="w-8 h-px bg-[var(--color-primary-500)]"></div>
          <span className={`text-sm font-medium tracking-widest uppercase ${light ? 'text-[var(--color-primary-300)]' : 'text-[var(--color-primary-500)]'}`}>
            {label}
          </span>
          {center && <div className="w-8 h-px bg-[var(--color-primary-500)]"></div>}
        </div>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight ${light ? 'text-white' : 'text-[var(--color-primary-900)]'}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/70' : 'text-[var(--color-text-muted)]'}`}>
          {description}
        </p>
      )}
    </div>
  )
}