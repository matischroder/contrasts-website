import { site } from "@/content/site";

const points = [
  { title: "Safe for sensitive skin", body: "Only products that are completely ammonia, sulphate and paraben free — environmentally friendly and safe for even the most sensitive of skin, without sacrificing results." },
  { title: "Cut, colour & style", body: "Quality cutting, colouring and styling — from a clipper cut to balayage, foils, perms and keratin smoothing." },
  { title: "Complimentary consultation", body: "All clients are provided with a complimentary consultation, and exact prices can be provided on application." },
  { title: "O&M treatments", body: "In-salon O&M (Original & Mineral) Smooth + Shine and Volume + Shine treatments." },
];

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-sage-soft/60 py-16 sm:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-sage-dark uppercase">Our approach</p>
          <h2 id="approach-title" className="mt-4 font-serif text-5xl leading-[1] font-medium text-balance sm:text-6xl">
            Your local organic salon in Grange.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            As a local Brisbane organic hair salon, {site.name} is committed to delivering an exceptional hair salon experience
            without endangering your health or the environment.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We pride ourselves on providing quality cutting, colouring and styling services and understand the desire to look our
            best.
          </p>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2">
          {points.map((p, i) => (
            <li key={p.title} className="bg-bone p-6 sm:p-7">
              <span className="font-serif text-2xl text-sage-dark italic">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
