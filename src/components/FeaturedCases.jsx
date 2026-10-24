import { ArrowRight } from './Icons.jsx'

const cases = [
  { src: '/images/case-1.jpg', alt: 'Anterior veneers, smile view' },
  { src: '/images/case-2.jpg', alt: 'Single posterior ceramic crown' },
  { src: '/images/case-3.jpg', alt: 'Upper anterior restorations, close-up' },
  { src: '/images/case-4.jpg', alt: 'Crown seated on stone model' },
]

export default function FeaturedCases() {
  return (
    <section id="work" className="bg-cream text-ink">
      <div className="mx-auto max-w-[1024px] px-6 pb-[33px] pt-[22px] lg:px-12">
        <div className="flex items-center gap-5">
          <h2 className="font-display text-[33px] font-medium leading-none whitespace-nowrap">
            Featured Cases
          </h2>
          <span className="hidden h-px flex-1 bg-gold-dark/50 sm:block" />
          <a
            href="#work"
            className="ml-auto inline-flex items-center gap-2 pl-10 text-[14px] font-medium text-gold-dark hover:text-ink sm:ml-0"
          >
            View Our Work <ArrowRight />
          </a>
        </div>

        <div className="mt-[14px] grid grid-cols-2 gap-[10px] md:grid-cols-4">
          {cases.map((c) => (
            <a
              key={c.src}
              href="#work"
              className="group block aspect-[225/144] overflow-hidden rounded-[2px] bg-ink"
            >
              <img
                src={c.src}
                alt={c.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
