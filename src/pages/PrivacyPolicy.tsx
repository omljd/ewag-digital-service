import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const PrivacyPolicy = () => (
  <PageShell
    title="Privacy Policy — EWAG Digital Services"
    description="Read our privacy policy to understand how we collect, use, and protect your information."
  >
    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      description="Your privacy is important to us. This policy explains how we handle your data."
      crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      showForm={false}
    />

    <section className="py-20 bg-paper">
      <div className="container-x">
        <div className="mx-auto max-w-3xl prose prose-ink">
          <p className="text-lg text-ink/70 leading-relaxed">
            Last updated: May 10, 2026
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">1. Information We Collect</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We collect information you provide directly to us when you request a consultation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and business details.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">2. How We Use Your Information</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">3. Information Sharing</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We do not share your personal information with third parties except as described in this policy or with your consent.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">4. Security</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">5. Contact Us</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at privacy@ewag.com.
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export default PrivacyPolicy;
