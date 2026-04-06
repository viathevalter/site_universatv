export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  paymentLink: string;
};

export const pricingES: PricingPlan[] = [
  {
    id: "mensual",
    name: "Plan Mensual",
    price: "9,50 €",
    period: "/ mes",
    paymentLink: "#",
  },
  {
    id: "trimestral",
    name: "Plan Trimestral",
    price: "25 €",
    period: "/ 3 meses",
    paymentLink: "#",
  },
  {
    id: "semestral",
    name: "Plan Semestral",
    price: "40 €",
    period: "/ 6 meses",
    paymentLink: "#",
  },
  {
    id: "anual",
    name: "Plan Anual",
    price: "70 €",
    period: "/ año",
    paymentLink: "#",
  },
];

export const globalFeaturesES = [
  "+2000 canales de TV en vivo",
  "+140000 películas y series en 4K, FHD",
  "Alterna entre tus dispositivos",
  "Guía de TV (EPG) integrada",
  "Tecnología anticongelante premium",
  "Soporte VIP permanente 24/7",
];

export const extraPointES = {
  price: "+4 €",
  period: "/ mes",
  text: "¿Necesitas más accesos simultáneos? Amplía cualquier plan con un punto adicional por acceso extra.",
};
