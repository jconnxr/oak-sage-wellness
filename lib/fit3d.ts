/** Fit3D SNAP media + copy constants for the main-site 3D Body Scan page. */

export const FIT3D_MEDIA = {
  scanning: {
    src: "/images/fit3d/scanning.jpg",
    width: 580,
    height: 529,
    alt: "Person completing a SNAP by Fit3D body scan with the measurement app overlay visible",
  },
  before: {
    src: "/images/fit3d/before.png",
    width: 580,
    height: 392,
    alt: "Sample Fit3D 3D body avatar with red measurement callouts labeled Before",
  },
  after: {
    src: "/images/fit3d/after.png",
    width: 580,
    height: 392,
    alt: "Sample Fit3D 3D body avatar with green measurement callouts labeled After",
  },
  logo: {
    src: "https://placehold.co/240x80/4a5d3f/f5f0e6/png?text=Fit3D",
    width: 240,
    height: 80,
    alt: "Fit3D logo",
  },
} as const;

export const FIT3D_METRICS = [
  {
    name: "Weight",
    explanation:
      "Total body weight, captured alongside every other measurement so it's never the only number you see.",
  },
  {
    name: "Body Fat Percentage",
    explanation:
      "The proportion of your total weight that is fat mass.",
  },
  {
    name: "Fat Mass",
    explanation: "Total fat measured in pounds.",
  },
  {
    name: "Lean Mass",
    explanation:
      "Everything that isn't fat — muscle, bone, organs, water.",
  },
  {
    name: "VAT Mass",
    explanation:
      "Visceral adipose tissue: fat measured around the midsection rather than under the skin.",
  },
  {
    name: "Waist Circumference",
    explanation:
      "Measured from the 3D model, not a tape measure held by hand.",
  },
  {
    name: "Body Shape Rating",
    explanation:
      "A single composite score that summarizes overall body shape, useful for tracking direction over time.",
  },
] as const;

export const FIT3D_STEPS = [
  {
    title: "Book your free scan",
    body: "About 15 minutes at our Edmond office, start to finish.",
  },
  {
    title: "Change into fitted clothing",
    body: "Form-fitting clothing gives the most accurate measurements. Bring your own or we'll provide options.",
  },
  {
    title: "Stand and turn",
    body: "You'll stand in front of the scanner and rotate slowly through one full turn. It takes about a minute. Nothing touches you, and there's no radiation.",
  },
  {
    title: "Review your results with our team",
    body: "We walk through your 3D avatar and measurements together and answer whatever comes up.",
  },
] as const;

export const FIT3D_FAQS = [
  {
    question: "How long does it take?",
    answer:
      "The scan itself is about a minute. Budget 15 minutes for the visit including setup and reviewing results.",
  },
  {
    question: "What should I wear?",
    answer:
      "Form-fitting clothing gives the most accurate result. Loose clothing obscures body shape and reduces measurement accuracy.",
  },
  {
    question: "Is it safe? Is there radiation?",
    answer:
      "No radiation and nothing touches you. It uses a camera, the same way a photograph does.",
  },
  {
    question: "Do I get to keep my results?",
    answer:
      "Yes. Your scans stay in your Fit3D account and you can access your avatar and measurements any time.",
  },
  {
    question: "How often should I scan?",
    answer:
      "Every four to eight weeks is typical if you're tracking change.",
  },
  {
    question: "Does it cost anything?",
    answer: "Your first scan at Oak & Sage is free.",
  },
  {
    question: "Can it tell me if I'm healthy?",
    answer:
      "It measures your body composition and dimensions accurately. It doesn't diagnose anything — that's a conversation for you and your physician, and your measurements can be useful context for it.",
  },
] as const;
