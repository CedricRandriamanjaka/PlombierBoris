"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="Logo AlloElectricienboris"
              width={60}
              height={60}
              className="h-auto w-auto"
            />
            <span className="text-xl font-bold text-brand-navy">AlloElectricienboris</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-4xl font-extrabold text-brand-navy md:text-5xl">
            Mentions légales
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-brand-text">
            {/* Informations générales */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-brand-navy">Le site internet alloelectricienboris.fr</h2>
              <p className="mb-2">
                <strong>Adresse de courrier électronique :</strong>{" "}
                <a href="mailto:plombier30000@gmail.com" className="text-brand-primary hover:underline">
                  plombier30000@gmail.com
                </a>
              </p>
              <p>
                <strong>Hébergeur :</strong> Netlify
              </p>
            </section>

            {/* Politique de confidentialité */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-brand-navy">Politique de confidentialité</h2>
              <p className="mb-4">
                Le site <strong>www.alloelectricienboris.fr</strong> utilise des cookies. Lors de la consultation du site, des cookies sont déposés sur votre ordinateur, votre tablette ou votre smartphone. Les informations ci-dessous vous permettent de mieux comprendre comment fonctionnent les cookies et comment utiliser les outils actuels afin de les paramétrer.
              </p>

              {/* Qu'est-ce qu'un cookie */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-brand-navy">Qu'est-ce qu'un cookie ?</h3>
                <p className="mb-2">
                  L'utilisation des cookies est courante sur Internet. Un cookie est un petit fichier texte contenant des informations, qui est enregistré sur le disque dur de votre terminal (ex : ordinateur, tablette ou téléphone mobile) à l'occasion de la consultation d'un site Internet grâce à votre logiciel de navigation. Il est transmis par le serveur d'un site Internet à votre navigateur. Le fichier cookie permet à son émetteur d'identifier le terminal dans lequel il est enregistré pendant la durée de validité ou d'enregistrement du cookie concerné. Un cookie ne permet pas de remonter à une personne physique.
                </p>
              </div>

              {/* Pourquoi nous utilisons des cookies */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-brand-navy">Pourquoi nous utilisons des cookies ?</h3>
                <p className="mb-4">
                  Nous utilisons 1 catégorie de cookies dont les finalités sont décrites ci-après. Nous n'utilisons pas de cookies pour collecter des informations nominatives (comme votre nom par exemple)
                </p>

                <div className="mb-4 rounded-lg bg-brand-soft p-4">
                  <h4 className="mb-2 text-lg font-semibold text-brand-navy">1. Les cookies de mesure d'audience (statistiques)</h4>
                  <p className="mb-2">
                    Le site utilise Google Analytics, un service d'analyse de site internet fourni par Google Inc. (« Google »). Google Analytics utilise des «cookies» pour garder en mémoire l'activité de l'utilisateur sur les pages précédentes / interactions avec le Site.
                  </p>
                  <p className="mb-2">
                    Google va collecter ces informations pour le compte de Iscle. Iscle utilisera cette information dans le but d'évaluer votre utilisation du site, de compiler des rapports sur l'activité du site et de fournir d'autres services relatifs à l'activité du site et l'utilisation d'Internet.
                  </p>
                  <p className="mb-2">
                    L'adresse IP que votre navigateur transmet dans le cadre de Google Analytics ne sera pas associée avec toute autre donnée détenue par Google.
                  </p>
                  <p className="mb-2">
                    Pour offrir aux visiteurs du site plus de choix sur la façon dont leurs données sont collectées par Google Analytics, Google a développé le plugin Google Analytics Opt-out add-on. L'add-on communique avec le JavaScript Google Analytics (ga.js) pour indiquer que les informations sur le site web visité ne doivent pas être envoyée à Google Analytics.
                  </p>
                  <p>
                    Si vous voulez refuser cette collecte, téléchargez et installez l'add-on pour votre navigateur actuel. Le Google Analytics Opt-out Browser Add-on est disponible pour Microsoft Internet Explorer, Google Chrome, Mozilla Firefox, Apple Safari et Opera. Vous pouvez trouver un lien vers le plugin Opt-out Add-on{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                      ici
                    </a>.
                  </p>
                </div>
              </div>

              {/* Comment gérer les cookies */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-brand-navy">Comment gérer les cookies ?</h3>
                <p className="mb-4">
                  Plusieurs possibilités vous sont offertes pour gérer les cookies. Tout paramétrage que vous pouvez entreprendre sera susceptible de modifier votre navigation sur Internet et vos conditions d'accès à certains services nécessitant l'utilisation de Cookies.
                </p>
                <p className="mb-4">
                  Vous pouvez faire le choix à tout moment d'exprimer et de modifier vos souhaits en matière de cookies, par les moyens décrits ci-dessous.
                </p>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-brand-navy">1. Paramétrage de votre navigateur</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Pour Chrome :{" "}
                      <a href="https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en
                      </a>
                    </li>
                    <li>
                      Pour Internet Explorer :{" "}
                      <a href="http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-Cookies" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-Cookies
                      </a>
                    </li>
                    <li>
                      Pour FireFox :{" "}
                      <a href="http://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent?redirectlocale=fr&redirectslug=G%C3%A9rer+les+cookies" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        http://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent?redirectlocale=fr&redirectslug=Gérer+les+cookies
                      </a>
                    </li>
                    <li>
                      Pour Opéra :{" "}
                      <a href="http://help.opera.com/Windows/10.20/fr/cookies.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        http://help.opera.com/Windows/10.20/fr/cookies.html
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-brand-navy">2. Les liens opt-out pour les cookies de mesure d'audience (statistiques)</h4>
                  <p className="mb-2">
                    Pour les cookies déposés par Google Analytics
                  </p>
                  <p>
                    Vous pouvez trouver un lien vers le plugin Opt-out Add-on{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                      ici
                    </a>.
                  </p>
                </div>
              </div>

              {/* Plus d'information */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-brand-navy">Plus d'information sur les cookies</h3>
                <p>
                  Pour plus d'information sur les cookies, vous pouvez vous rendre sur le site de la CNIL, à cette adresse :{" "}
                  <a href="http://www.cnil.fr/vos-droits/vos-traces/les-cookies/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to home */}
          <div className="mt-12">
            <Link
              href="/"
              className="btn btn-primary inline-flex"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
