"use client";
import Hero from "@/components/hero";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const imageHero = "/images/mtc/image3-scaled.jpg";



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({ nom: "", email: "", sujet: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Une erreur est survenue. Merci de réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
    <Hero titleHero="Contactez-nous" imageHero={imageHero} />
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
            Dites-nous comment nous pouvons vous aider. Nous revenons vers vous rapidement.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900">Envoyer un message</h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:border-[#F26418]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:border-[#F26418]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                Sujet
              </label>
              <input
                id="sujet"
                name="sujet"
                type="text"
                required
                value={formData.sujet}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:border-[#F26418]"
              />

            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre message ici…"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:border-[#F26418] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F26418] to-[#d95712] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:ring-offset-2 disabled:opacity-60 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75" />
                  </svg>
                  Envoi en cours…
                </>
              ) : (
                "Soumettre"
              )}
            </button>

            {/* Statuts */}
            {status === "success" && (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                Votre message a été envoyé avec succès. Merci !
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
