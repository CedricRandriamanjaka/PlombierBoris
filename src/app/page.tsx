"use client";

import Image from "next/image";
import { Phone, Wrench, Star, Check, Droplets, Zap, Droplet, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const IMG = {
  plombier1:
    "https://www.plombierboris.fr/wp-content/uploads/2022/09/plumber-install-a-sink-in-kitchen-of-plumber-repai-2022-08-01-04-00-07-utc-1024x683.jpg",
  plombier2:
    "https://www.plombierboris.fr/wp-content/uploads/2022/09/repair-in-plumber-installing-assemble-new-mixer-ta-2022-08-01-04-00-20-utc-1024x683.jpg",
  plombier3:
    "https://www.plombierboris.fr/wp-content/uploads/2022/09/cropped-shot-of-male-plumber-using-plunger-and-cle-2021-08-30-01-25-54-utc-1024x683.jpg",
  plombier4:
    "https://www.plombierboris.fr/wp-content/uploads/2022/09/plumber-fixing-a-sink-at-home-2021-09-02-16-30-58-utc-1024x683.jpg",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <main>
      <section id="urgence" className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-navy">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />

        <div className="container relative py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* TEXTE HERO */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/40">
                  <Wrench className="text-white" size={28} />
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Depuis plus de 15 ans
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
                Urgence Plomberie
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-3 text-lg font-extrabold text-white/95">
                2 plombiers à proximité : Intervention rapide 7J/7 et 24H/24
              </motion.p>

              <motion.p variants={fadeUp} className="mt-6 text-lg text-white/95">
                Besoin d’un plombier en urgence ? Notre service vous met en relation avec un plombier{" "}
                <span className="font-extrabold">partenaire indépendant</span> intervenant dans votre secteur, selon les disponibilités.
              </motion.p>

              <motion.a
                variants={fadeUp}
                className="btn btn-cta mt-6 inline-flex text-lg"
                href="tel:+33661315907"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={22} /> 06 61 31 59 07
              </motion.a>
            </motion.div>

            {/* IMAGE HERO */}
            <motion.div
              className="relative hidden h-80 md:block"
              initial="hidden"
              animate="visible"
              variants={fadeRight}
            >
              <div className="img-organic absolute right-0 top-0 h-64 w-72 overflow-hidden shadow-xl">
                <Image src={IMG.plombier1} alt="" fill className="object-cover opacity-95" sizes="288px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION CONFIANCE */}
      <section className="bg-white">
        <motion.div
          className="container py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
            Faites appel à un plombier de confiance chez vous
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-3">
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">Diagnostic complet</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">Intervention rapide</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">Devis gratuit sur place</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">Interlocuteur unique</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">Proche de chez vous</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="uppercase">7J/7 – 24H/24 (y compris dimanche et jours fériés)</span>
                </motion.li>
              </motion.ul>

              <motion.a
                className="btn btn-cta mt-8"
                href="tel:+33661315907"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} /> APPELER MAINTENANT
              </motion.a>
            </motion.div>

            {/* COLLAGE */}
            <motion.div
              className="relative h-56 md:h-64"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
            >
              <div className="collage-img collage-1">
                <Image src={IMG.plombier1} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="collage-img collage-2">
                <Image src={IMG.plombier2} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="collage-img collage-3">
                <Image src={IMG.plombier3} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="collage-img collage-4">
                <Image src={IMG.plombier4} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION PARTENAIRE */}
      <section className="bg-brand-primary">
        <div className="container py-0">
          <div className="grid md:grid-cols-2 md:items-stretch">
            <motion.div
              className="relative order-2 md:order-1 md:-ml-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
            >
              <div className="img-plumber absolute bottom-0 left-0 right-0 top-0 overflow-hidden shadow-2xl md:relative md:top-4 md:left-0 md:h-[320px] md:w-[90%]">
                <Image src={IMG.plombier1} alt="Plombier" fill className="object-cover" sizes="(max-width: 768px) 100vw, 90vw" />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center px-4 py-14 md:order-2 md:py-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
            >
              <h2 className="text-3xl font-extrabold text-white">Un plombier expérimenté</h2>
              <p className="mt-4 text-white/95">
                Monsieur Boris intervient <span className="font-extrabold">en un temps record à votre adresse 7J/7 et 24H/24</span> (dimanche et jours fériés inclus).
              </p>
              <p className="mt-2 text-white/90">2 plombiers Monsieur Boris à proximité maintenant</p>

              <motion.a
                className="btn btn-cta mt-8"
                href="tel:+33661315907"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} /> APPELER MAINTENANT
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis" className="bg-white">
        <motion.div
          className="container py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-sky">Satisfaction client 5/5</p>
              <h2 className="mt-1 text-3xl font-extrabold text-brand-navy">Plus de 1860 clients satisfaits par an</h2>
              <br />
              <p className="text-slate-700">
                Besoin d’un plombier en urgence ? Mise en relation avec un plombier{" "}
                <span className="font-bold">partenaire indépendant</span> intervenant dans votre secteur, selon les disponibilités.
              </p>
              <motion.a
                className="btn btn-cta mt-8"
                href="tel:+33661315907"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                APPEL IMMÉDIAT ET GRATUIT
              </motion.a>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
            >
              <div className="overflow-hidden rounded-lg shadow-md relative h-40 w-full">
                <Image src={IMG.plombier2} alt="Plombier Monsieur Boris" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="mt-2 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-5 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { author: "Mireille P.", text: "J'avais une fuite à l'évier de ma cuisine et elle a été réparée très rapidement. Un plombier Monsieur Boris était près de chez moi et il est intervenu en quelques minutes seulement.", rating: 5 },
                { author: "Boutique - Opérateur téléphonique", text: "Grâce à l'intervention rapide de ce plombier, nous avons pu rouvrir notre boutique très vite : La fuite a été réparée aussitôt. Merci pour l'efficacité !", rating: 5 },
                { author: "Agence immobilière", text: "Réparation en urgence dans nos bureaux. Discrétion et professionnalisme. Super plombier !", rating: 5 },
                { author: "Jean-Claude T.", text: "Intervention rapide un dimanche. Travail soigné et tarif raisonnable", rating: 5 },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="card p-4"
                >
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{t.text}</p>
                  <p className="mt-2 text-xs font-semibold text-brand-navy">{t.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <motion.div
          className="container py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-sky">Nos services</p>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-navy">Toutes réparations en plomberie</h2>

          <motion.div
            className="service-strip mt-8 rounded-r-lg bg-white p-6 shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <Wrench className="shrink-0 text-brand-primary" size={20} />
                <span className="font-semibold text-brand-navy">Recherche et réparation de fuite d&apos;eau</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="shrink-0 text-brand-primary" size={20} />
                <span className="font-semibold text-brand-navy">Installation de plomberie</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="shrink-0 text-brand-primary" size={20} />
                <span className="font-semibold text-brand-navy">Débouchage de canalisations</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="shrink-0 text-brand-primary" size={20} />
                <span className="font-semibold text-brand-navy">Réparation ou changement chauffe eau</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="shrink-0 text-brand-primary" size={20} />
                <span className="font-semibold text-brand-navy">Intervention chasse d&apos;eau</span>
              </li>
            </ul>

            <motion.a
              className="btn btn-primary mt-6"
              href="tel:+33661315907"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              DEMANDER UNE INTERVENTION
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-brand-soft">
        <div className="container py-14">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="card p-6 text-center"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Droplets className="mx-auto mb-2 text-brand-primary" size={32} />
              <div className="text-3xl font-extrabold text-brand-navy">4852</div>
              <div className="mt-2 text-sm font-semibold text-slate-600">fuites réparées</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card p-6 text-center"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Gauge className="mx-auto mb-2 text-brand-primary" size={32} />
              <div className="text-3xl font-extrabold text-brand-navy">2593</div>
              <div className="mt-2 text-sm font-semibold text-slate-600">évacuations débouchées</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card p-6 text-center"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="mx-auto mb-2 text-brand-primary" size={32} />
              <div className="text-3xl font-extrabold text-brand-navy">4623</div>
              <div className="mt-2 text-sm font-semibold text-slate-600">recherches de fuite</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card p-6 text-center"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Droplet className="mx-auto mb-2 text-brand-primary" size={32} />
              <div className="text-3xl font-extrabold text-brand-navy">6512</div>
              <div className="mt-2 text-sm font-semibold text-slate-600">chasses d&apos;eau remplacées</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-14">
        <div className="container">
          <motion.div
            className="card max-w-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-extrabold text-brand-navy">Un petit soucis de plomberie ?</h3>
            <p className="mt-2 text-slate-600">Contactez un Plombier – Obtenez un devis. Plombier 24H/24 7J/7.</p>
            <motion.a
              className="btn btn-cta mt-4 w-full text-lg"
              href="tel:+33661315907"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={20} /> 06 61 31 59 07
            </motion.a>
            <p className="mt-4 text-sm text-slate-600">Si je ne peux pas vous répondre, je vous rappelle sous 5 minutes maximum !</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy text-white">
        <motion.div
          className="container py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="text-xl font-extrabold">Contactez un Plombier – Obtenez un devis</h2>
            <a className="btn btn-primary shrink-0" href="tel:+33661315907">
              DEVIS GRATUIT
            </a>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Wrench className="text-white" size={24} />
                </div>
                <span className="text-lg font-extrabold">Monsieur Boris</span>
              </div>
              <p className="mt-3 text-sm opacity-90">06 61 31 59 07</p>
              <p className="mt-1 text-xs opacity-75">Plombier 24H/24 7J/7 – Intervention rapide</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-90">Nos services</p>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#urgence">Urgence Plomberie</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#services">Recherche de fuite</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#services">Plomberie Sanitaire</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#services">Chasse d&apos;eau</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#services">Débouchage</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-90">Navigation</p>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="/mentions-legales">Mentions légales</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="/rgpd">Politique RGPD</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="#urgence">Urgence Avignon</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-8">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Star className="text-amber-400" size={18} fill="currentColor" />
              <span className="text-sm font-semibold">Monsieur Boris – Satisfaction client 5/5</span>
            </div>

            <p className="text-xs opacity-70">© 2026 – Monsieur Boris · Conception <a href="https://rcedric.netlify.app" target="_blank" rel="noopener noreferrer">Cedric Randriamanjaka</a></p>
          </div>
        </motion.div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
        <a className="btn btn-cta py-4" href="tel:+33661315907">
          <Phone size={18} /> Appeler
        </a>
        <a className="btn btn-ghost py-4" href="#contact">
          Devis
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </main>
  );
}