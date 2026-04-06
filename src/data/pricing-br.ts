import { PricingPlan } from "./pricing-es";

export const pricingBR: PricingPlan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "R$ 35",
    period: "/ mês",
    paymentLink: "#",
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    price: "R$ 90",
    period: "/ 3 meses",
    paymentLink: "#",
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    price: "R$ 170",
    period: "/ 6 meses",
    paymentLink: "#",
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "R$ 300",
    period: "/ ano",
    paymentLink: "#",
  },
];

export const globalFeaturesBR = [
  "+2000 canais de TV ao vivo",
  "+140000 filmes e séries em 4K, FHD",
  "Alterne entre seus dispositivos",
  "Guia de programação (EPG) integrado",
  "Tecnologia anti-travamento premium",
  "Suporte VIP permanente 24/7",
];

export const extraPointBR = {
  price: "R$ 18",
  period: "/ mês",
  text: "Precisa de acessos simultâneos? Adicione um ponto extra ao seu plano para cada tela adicional.",
};
