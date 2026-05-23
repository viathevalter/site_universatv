export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  paymentLink: string;
};

export const pricingEN: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "£9.50",
    period: "",
    paymentLink: "#",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "£25",
    period: "",
    paymentLink: "#",
  },
  {
    id: "semiannual",
    name: "Semiannual",
    price: "£40",
    period: "",
    paymentLink: "#",
  },
  {
    id: "annual",
    name: "Annual",
    price: "£70",
    period: "",
    paymentLink: "#",
  },
];

export const globalFeaturesEN = [
  "Plans adapted to different needs",
  "Compatibility with multiple devices",
  "Practical activation",
  "More freedom to enjoy your way",
  "Modern and easy-to-use experience",
  "Structure designed for clarity and convenience",
];

export const extraPointEN = {
  price: "£4/month",
  period: "",
  text: "Need more than one connection? Expand your plan with an additional connection for only £4/month per extra connection.",
};
