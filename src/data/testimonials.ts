export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "EWAG didn't just redesign our site — they rebuilt how we sell. The automation system alone paid for itself in 3 weeks.",
    author: "Co-founder, Real Estate Startup",
    project: "Estate&Co Launch"
  },
  {
    id: "2",
    quote: "The WhatsApp automation transformed our admissions process. We're handling 3x more inquiries with the same team.",
    author: "Director, Education Institute",
    project: "MentorX Admissions"
  },
  {
    id: "3",
    quote: "Our conversion rate doubled after the redesign. Inquiries finally feel predictable and the pipeline is consistently full.",
    author: "Owner, Multi-clinic Chain",
    project: "Cliniqa Wellness"
  }
];
