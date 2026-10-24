import Button from './Button.jsx'

export default function MeetStep() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream text-ink">
      <div className="absolute inset-y-0 right-0 hidden w-[62%] md:block">
        <img
          src="/images/founder.jpg"
          alt="Step, founder of STEPBAE, working under loupes"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 [background:linear-gradient(90deg,#f4ede3_0%,rgba(244,237,227,0.6)_6%,rgba(244,237,227,0)_18%)]" />
      </div>

      <div className="relative mx-auto max-w-[1024px] px-6 py-[30px] lg:px-[54px]">
        <div className="max-w-[330px]">
          <h2 className="font-display text-[36px] font-medium leading-tight">Meet Step</h2>
          <p className="mt-3 text-[13.5px] leading-[1.35] text-ink/90">
            As the founder of STEPBAE, Step is a dental laboratory professional
            with a passion for ceramic artistry, esthetic restorations, and the
            details that make a difference in clinical outcomes. Through our
            laboratory, we create restorations that combine precision,
            craftsmanship, and natural esthetics.
          </p>
          <Button variant="outline" className="mt-5 h-[32px] px-5 !text-[12px]">
            About Step
          </Button>
        </div>
      </div>

      <img
        src="/images/founder.jpg"
        alt=""
        aria-hidden="true"
        className="h-64 w-full object-cover object-right md:hidden"
      />
    </section>
  )
}
