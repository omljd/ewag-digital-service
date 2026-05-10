import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const TermsPage = () => (
  <PageShell
    title="Terms of Service — EWAG Digital Services"
    description="Read our terms of service to understand the rules and regulations for using our services."
  >
    <PageHero
      eyebrow="Legal"
      title="Terms of Service"
      description="These terms govern your use of EWAG Digital Services."
      crumbs={[{ label: "Home", to: "/" }, { label: "Terms of Service" }]}
      showForm={false}
    />

    <section className="py-20 bg-paper">
      <div className="container-x">
        <div className="mx-auto max-w-3xl prose prose-ink">
          <p className="text-lg text-ink/70 leading-relaxed">
            Last updated: May 10, 2026
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">2. Use of Services</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">3. Intellectual Property</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            All content, features, and functionality of our services are owned by EWAG Digital Services and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">4. Limitation of Liability</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            In no event shall EWAG Digital Services be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">5. Changes to Terms</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We reserve the right to modify or replace these Terms at any time. Your continued use of our services after any changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">6. Governing Law</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of India.
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export default TermsPage;
