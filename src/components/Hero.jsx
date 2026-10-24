import Button from './Button.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Photo, anchored right, fading into the dark background */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <img
          src="/images/hero.jpg"
          alt="Hand-layered ceramic anterior restorations on a model with a ceramic brush"
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent md:via-transparent md:from-ink md:[background:linear-gradient(90deg,#141210_0%,rgba(20,18,16,0.55)_10%,rgba(20,18,16,0)_30%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1024px] items-center px-6 pb-9 pt-[118px] lg:px-12">
        <div className="max-w-[370px]">
          <h1 className="font-display text-[46px] font-medium leading-[1.08] text-white sm:text-[50px]">
            Where Ceramic <em className="font-normal text-gold">Artistry</em> Meets
            Esthetic Dentistry
          </h1>
          <p className="mt-6 max-w-[325px] text-[15px] leading-[1.35] text-white/90">
            STEPBAE is a private dental laboratory dedicated to esthetic
            restorations, thoughtful craftsmanship, and personalized service
            for dental professionals.
          </p>
          <Button className="mt-7 h-10 px-[25px]">Partner With Us</Button>
        </div>
      </div>
    </section>
  )
}
