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
    name: "Mensual",
    price: "9,50 €",
    period: "",
    paymentLink: "#",
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "25 €",
    period: "",
    paymentLink: "#",
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "40 €",
    period: "",
    paymentLink: "#",
  },
  {
    id: "anual",
    name: "Anual",
    price: "70 €",
    period: "",
    paymentLink: "#",
  },
];

export const globalFeaturesES = [
  "Planes adaptados a distintas necesidades",
  "Compatibilidad con múltiples dispositivos",
  "Activación práctica",
  "Más libertad para disfrutar a tu manera",
  "Experiencia moderna y fácil de usar",
  "Estructura pensada para aportar claridad y comodidad",
];

export const extraPointES = {
  price: "4 €/mes",
  period: "",
  text: "¿Necesitas más de un acceso? Amplía tu plan con un punto adicional por solo 4 €/mes por acceso extra.",
};
