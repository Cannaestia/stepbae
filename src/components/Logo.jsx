export default function Logo({ className = '' }) {
  return (
    <a href="#" className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-[34px] font-medium tracking-[0.18em] text-white">
        STEPBAE
      </span>
      <span className="mt-1.5 text-[11.5px] font-semibold tracking-[0.3em] text-gold">
        DENTAL LABORATORY
      </span>
    </a>
  )
}
