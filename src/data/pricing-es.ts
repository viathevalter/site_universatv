export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  paymentLink: string;
};

export const pricingES: PricingPlan[] = [
  {
    id: "mensual-1",
    name: "1 Mes - 1 Dispositivo",
    price: "9,50 €",
    period: "/ mes",
    paymentLink: "#",
    features: [
      "+2000 canales de TV en vivo",
      "+140000 películas y series en 4K, FHD",
      "Alterna entre dispositivos",
      "Guía de TV (EPG)",
      "Tecnología anticongelante",
      "Soporte VIP permanente",
    ],
  },
  {
    id: "trimestral-1",
    name: "3 Meses - 1 Dispositivo",
    price: "25 €",
    period: "/ trimestre",
    paymentLink: "#",
    features: [
      "+2000 canales de TV en vivo",
      "+140000 películas y series en 4K, FHD",
      "Alterna entre dispositivos",
      "Guía de TV (EPG)",
      "Tecnología anticongelante",
      "Soporte VIP permanente",
    ],
  },
  {
    id: "semestral-1",
    name: "6 Meses - 1 Dispositivo",
    price: "40 €",
    period: "/ semestre",
    paymentLink: "#",
    features: [
      "+2000 canales de TV en vivo",
      "+140000 películas y series en 4K, FHD",
      "Alterna entre dispositivos",
      "Guía de TV (EPG)",
      "Tecnología anticongelante",
      "Soporte VIP permanente",
    ],
  },
  {
    id: "anual-1",
    name: "1 Año - 1 Dispositivo",
    price: "70 €",
    period: "/ año",
    paymentLink: "#",
    features: [
      "+2000 canales de TV en vivo",
      "+140000 películas y series en 4K, FHD",
      "Alterna entre dispositivos",
      "Guía de TV (EPG)",
      "Tecnología anticongelante",
      "Soporte VIP permanente",
    ],
  },
];

export const extraPointES = {
  price: "+4 €",
  period: "/ mes",
  text: "¿Necesitas más de un acceso? Amplía tu plan con un punto adicional por solo 4 €/mes por acceso extra.",
};
