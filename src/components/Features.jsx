import { Palette, Diamond, Handshake } from './Icons.jsx'

const items = [
  {
    Icon: Palette,
    title: 'Ceramic Artistry',
    text: 'Thoughtful layering and lifelike detail.',
  },
  {
    Icon: Diamond,
    title: 'Esthetic Precision',
    text: 'Attention to shade, form, and translucency.',
  },
  {
    Icon: Handshake,
    title: 'Personal Service',
    text: 'Direct collaboration with dental professionals.',
  },
]

export default function Features() {
  return (
    <section className="border-y border-gold/25 bg-ink-3">
      <div className="mx-auto grid max-w-[1024px] gap-6 px-6 py-[18px] md:grid-cols-3 md:gap-0 lg:px-12">
        {items.map(({ Icon, title, text }, i) => (
          <div
            key={title}
            className={`flex items-center gap-4 md:justify-center ${
              i > 0 ? 'md:border-l md:border-gold/45' : ''
            } md:py-1`}
          >
            <Icon className="h-[46px] w-[50px] shrink-0 text-gold" />
            <div>
              <h3 className="font-display text-[18px] font-medium text-white">{title}</h3>
              <p className="mt-0.5 text-[11.5px] text-white/85">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
