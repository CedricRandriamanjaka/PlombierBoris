"use client";

import Link from "next/link";
import { Phone, Wrench, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Footer() {
  return (
    <>
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
            <a className="btn btn-primary shrink-0" href="tel:+33644662638">
              DEVIS GRATUIT
            </a>
          </div>
          <p className="mt-6 rounded-lg bg-white/10 p-4 text-sm leading-relaxed text-white/95">
            💡 <strong>Le conseil de Monsieur Boris :</strong><br />
            Avant de vous lancer, demandez toujours un devis détaillé à votre artisan. C&apos;est la clé pour maîtriser votre budget et éviter les mauvaises surprises !
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Wrench className="text-white" size={24} />
                </div>
                <span className="text-lg font-extrabold">Monsieur Boris</span>
              </div>
              <p className="mt-3 text-sm opacity-90">06 44 66 26 38</p>
              <p className="mt-1 text-xs opacity-75">Plombier 24H/24 7J/7 – Intervention rapide</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-90">Nos services</p>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/#urgence">Urgence Plomberie</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/#services">Recherche de fuite</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/#services">Plomberie Sanitaire</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/#services">Chasse d&apos;eau</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/#services">Débouchage</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-90">Navigation</p>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <Link href="/mentions-legales">Mentions légales</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="/CGV.pdf" target="_blank" rel="noopener noreferrer">Conditions Générales de Vente</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cta" />
                  <a href="/CGU.pdf" target="_blank" rel="noopener noreferrer">Conditions Générales d'Utilisation</a>
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

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-1 md:hidden">
        <a className="btn btn-cta py-4" href="tel:+33644662638">
          <Phone size={18} /> Appeler
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </>
  );
}
