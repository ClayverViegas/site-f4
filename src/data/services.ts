import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  GraduationCap,
  ShieldCheck,
  FileText,
  Users,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  icon: LucideIcon;
  items: string[];
  note?: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Palestras",
    icon: Megaphone,
    items: [
      "Divulgação de Inventário de Riscos (NR 01)",
      "Ergonomia (NR 17)",
      "Conservação Auditiva (NR 15)",
      "Prevenção ao Benzeno (NR 20)",
      "Impacto do calor no corpo humano",
      "Manuseio de utensílios cortantes (NR 32 / NR 36)",
      "Proteção Respiratória (NR 15)",
      "Palestras das Campanhas Mensais",
    ],
  },
  {
    number: "02",
    title: "Treinamentos",
    icon: GraduationCap,
    items: [
      "CIPA — Todos os Graus de Riscos (NR 05)",
      "Designado da CIPA (NR 05)",
      "Equipamento de Proteção Individual (NR 06)",
      "Segurança na Movimentação de Materiais (NR 11)",
      "Segurança na Construção Civil (NR 18)",
      "Segurança no Trabalho Rural (NR 31)",
      "Levantamento e Transporte Manual de Peso (NR 17)",
      "Integração de Segurança do Trabalho (NR 01)",
      "Treinamento básico em Primeiros Socorros (NR 07)",
    ],
  },
  {
    number: "03",
    title: "Programas SST",
    icon: ShieldCheck,
    items: [
      "Programa de Gerenciamento de Riscos — PGR (NR 01)",
      "PGR do Trabalho Rural — PGRTR (NR 31)",
      "PGR da Construção Civil (NR 18)",
    ],
    note: "Para canteiros de obras com até 7 m de altura e, no máximo, 10 trabalhadores.",
  },
  {
    number: "04",
    title: "Outras documentações",
    icon: FileText,
    items: [
      "Ordem de Serviço (NR 01)",
      "Perfil Profissiográfico Previdenciário (PPP)",
      "Mapa de Risco (digital ou impresso em quadro)",
      "Ficha de entrega e controle de EPI (NR 06)",
      "Preenchimento de Checklist (APR)",
      "Procedimentos de segurança para atividades operacionais",
    ],
  },
  {
    number: "05",
    title: "Outros serviços",
    icon: Users,
    items: [
      "Implantação completa da CIPA e CIPATR",
      "Execução completa da SIPAT",
      "Indicação de CAs de EPIs conforme função",
    ],
  },
];

export const heroBenefits = [
  {
    title: "Treinamentos SST",
    description: "Capacitação que gera mais segurança no dia a dia.",
    icon: "GraduationCap",
  },
  {
    title: "Conformidade com NRs",
    description: "Sua empresa em dia com a legislação vigente.",
    icon: "ShieldCheck",
  },
  {
    title: "Soluções personalizadas",
    description: "Atendimento sob medida para a realidade da sua empresa.",
    icon: "Settings2",
  },
] as const;

export const contact = {
  email: "contatof4consultoriaa@gmail.com",
  phoneDisplay: "(98) 9 8117-5991",
  phoneRaw: "5598981175991",
  instagram: "@f4consultoria_",
  instagramUrl: "https://instagram.com/f4consultoria_",
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento para serviços de Segurança e Saúde no Trabalho.",
};
