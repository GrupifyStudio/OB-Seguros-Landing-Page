// Image imports
import vidaIndividual from "../../assets/img/services/services-page/vida-individual.jpg";
import vidaGrupo from "../../assets/img/services/services-page/vida-grupo.jpg";
import educacion from "../../assets/img/services/services-page/educacion.jpg";
import salud from "../../assets/img/services/services-page/salud.jpg";
import accidentes from "../../assets/img/services/services-page/accidentes.jpg";
import pension from "../../assets/img/services/services-page/pension.jpg";
import rentas from "../../assets/img/services/services-page/rentas.jpg";
import rcMedica from "../../assets/img/services/services-page/rc-medica.jpg";
import danosMateriales from "../../assets/img/services/services-page/danos-materiales.jpg";
import hogar from "../../assets/img/services/services-page/hogar.jpg";
import automoviles from "../../assets/img/services/services-page/automoviles.jpg";
import copropiedades from "../../assets/img/services/services-page/copropiedades.jpg";
import transportes from "../../assets/img/services/services-page/transportes.jpg";
import infidelidad from "../../assets/img/services/services-page/infidelidad.jpg";
import rcEmpresarial from "../../assets/img/services/services-page/rc-empresarial.jpg";
import doIcon from "../../assets/img/services/services-page/do.jpg";
import maquinaria from "../../assets/img/services/services-page/maquinaria.jpg";
import construccion from "../../assets/img/services/services-page/construccion.jpg";
import arl from "../../assets/img/services/services-page/arl.jpg";
import decenal from "../../assets/img/services/services-page/decenal.jpg";
import cumplimientoEstatal from "../../assets/img/services/services-page/cumplimiento-estatal.jpg";
import cumplimientoParticular from "../../assets/img/services/services-page/cumplimiento-particular.jpg";
import rcCumplimiento from "../../assets/img/services/services-page/rc-cumplimiento.jpg";
import arrendamiento from "../../assets/img/services/services-page/arrendamiento.jpg";
import judiciales from "../../assets/img/services/services-page/judiciales.jpg";

// Real services list
export const REAL_SERVICES_LIST = [
  {
    id: 1,
    icon: "fas fa-user-shield",
    title: "Seguro de Vida Individual",
    src: vidaIndividual,
    href: "/servicios/vida-individual",
    features: [
      "Protección a largo plazo para ti y tu familia",
      "Coberturas flexibles",
      "Apoyo económico en momentos difíciles"
    ]
  },
  {
    id: 2,
    icon: "fas fa-users",
    title: "Seguro de Vida Grupo",
    src: vidaGrupo,
    href: "/servicios/vida-grupo",
    features: [
      "Ideal para empleados o colectivos",
      "Tarifas preferenciales",
      "Cobertura ante fallecimiento o invalidez"
    ]
  },
  {
    id: 3,
    icon: "fas fa-graduation-cap",
    title: "Seguro de Educación",
    src: educacion,
    href: "/servicios/educacion",
    features: [
      "Asegura el futuro académico de tus hijos",
      "Planificación financiera a largo plazo",
      "Cobertura ante imprevistos"
    ]
  },
  {
    id: 4,
    icon: "fas fa-heartbeat",
    title: "Seguro de Salud",
    src: salud,
    href: "/servicios/salud",
    features: [
      "Amplia red médica y hospitalaria",
      "Planes individuales y familiares",
      "Cobertura nacional"
    ]
  },
  {
    id: 5,
    icon: "fas fa-ambulance",
    title: "Seguro de Accidentes",
    src: accidentes,
    href: "/servicios/accidentes",
    features: [
      "Asistencia médica inmediata",
      "Indemnización por incapacidad o muerte accidental",
      "Cobertura 24/7"
    ]
  },
  {
    id: 6,
    icon: "fas fa-piggy-bank",
    title: "Seguro de Pensión Voluntaria",
    src: pension,
    href: "/servicios/pension-voluntaria",
    features: [
      "Ahorro flexible para tu retiro",
      "Beneficios tributarios",
      "Opciones de renta vitalicia"
    ]
  },
  {
    id: 7,
    icon: "fas fa-coins",
    title: "Seguro de Rentas",
    src: rentas,
    href: "/servicios/rentas",
    features: [
      "Ingresos programados",
      "Tranquilidad financiera mensual",
      "Ideal para planificación familiar"
    ]
  },
  {
    id: 8,
    icon: "fas fa-user-md",
    title: "RC Médica",
    src: rcMedica,
    href: "/servicios/rc-medica",
    features: [
      "Protección ante demandas por negligencia",
      "Cobertura a profesionales de la salud",
      "Acompañamiento legal especializado"
    ]
  },
  {
    id: 9,
    icon: "fas fa-building",
    title: "Todo Riesgo Daños Materiales",
    src: danosMateriales,
    href: "/servicios/danos-materiales",
    features: [
      "Cobertura ante incendios, terremotos, robos",
      "Protección integral para instalaciones"
    ]
  },
  {
    id: 10,
    icon: "fas fa-home",
    title: "Seguro de Hogar",
    src: hogar,
    href: "/servicios/hogar",
    features: [
      "Protección contra daños materiales y robos",
      "Asistencia domiciliaria",
      "Responsabilidad civil incluida"
    ]
  },
  {
    id: 11,
    icon: "fas fa-car",
    title: "Seguro de Automóviles",
    src: automoviles,
    href: "/servicios/automoviles",
    features: [
      "Cobertura para autos particulares, pesados, motos y servicio público",
      "Asistencia en carretera",
      "Daños a terceros y pérdida total"
    ]
  },
  {
    id: 12,
    icon: "fas fa-industry",
    title: "Seguro para Copropiedades y PYMES",
    src: copropiedades,
    href: "/servicios/copropiedades",
    features: [
      "Cobertura patrimonial y legal",
      "Responsabilidad civil y daños estructurales",
      "Cumplimiento normativo"
    ]
  },
  {
    id: 13,
    icon: "fas fa-truck-moving",
    title: "Seguro de Transportes",
    src: transportes,
    href: "/servicios/transportes",
    features: [
      "Cobertura nacional e internacional",
      "Pérdida, daño o hurto de mercancía",
      "Multimodal"
    ]
  },
  {
    id: 14,
    icon: "fas fa-user-secret",
    title: "Infidelidad y Riesgos Financieros",
    src: infidelidad,
    href: "/servicios/infidelidad",
    features: [
      "Protección ante fraudes internos",
      "Revisión de controles internos",
      "Cobertura por pérdidas económicas"
    ]
  },
  {
    id: 15,
    icon: "fas fa-user",
    title: "Responsabilidad Civil",
    src: rcEmpresarial,
    href: "/servicios/rc-empresarial",
    features: [
      "Daños a terceros por actividades de la empresa",
      "Daños materiales y personales",
      "Cobertura extracontractual"
    ]
  },
  {
    id: 16,
    icon: "fas fa-user-tie",
    title: "D&O – Directores y Administradores",
    src: doIcon,
    href: "/servicios/do",
    features: [
      "Cobertura ante demandas por gestión empresarial",
      "Defensa legal",
      "Protección del patrimonio personal"
    ]
  },
  {
    id: 17,
    icon: "fas fa-cogs",
    title: "Equipos y Maquinaria",
    src: maquinaria,
    href: "/servicios/maquinaria",
    features: [
      "Daños o pérdida de maquinaria pesada",
      "Cobertura por uso, transporte y montaje"
    ]
  },
  {
    id: 18,
    icon: "fas fa-hammer",
    title: "Todo Riesgo Construcción y Montaje",
    src: construccion,
    href: "/servicios/construccion",
    features: [
      "Cobertura para obras civiles",
      "Robo de materiales y daños accidentales",
      "Daños a terceros durante la obra"
    ]
  },
  {
    id: 19,
    icon: "fas fa-shield-alt",
    title: "ARL Empresarial",
    src: arl,
    href: "/servicios/arl",
    features: [
      "Aseguramiento obligatorio para empleados",
      "Prevención de riesgos laborales",
      "Gestión y acompañamiento en siniestros"
    ]
  },
  {
    id: 20,
    icon: "fas fa-house-damage",
    title: "Decenal Vivienda Segura",
    src: decenal,
    href: "/servicios/decenal",
    features: [
      "Garantía de estabilidad estructural por 10 años",
      "Obligatorio en proyectos nuevos",
      "Cobertura para constructores y compradores"
    ]
  },
  {
    id: 21,
    icon: "fas fa-file-contract",
    title: "Cumplimiento Estatal",
    src: cumplimientoEstatal,
    href: "/servicios/cumplimiento-estatal",
    features: [
      "Garantías en licitaciones y contratos públicos",
      "Amparo de salarios, multas y sanciones"
    ]
  },
  {
    id: 22,
    icon: "fas fa-handshake",
    title: "Cumplimiento Particular",
    src: cumplimientoParticular,
    href: "/servicios/cumplimiento-particular",
    features: [
      "Garantía ante acuerdos entre privados",
      "Protección ante incumplimientos"
    ]
  },
  {
    id: 23,
    icon: "fas fa-gavel",
    title: "RC Derivada del Cumplimiento",
    src: rcCumplimiento,
    href: "/servicios/rc-cumplimiento",
    features: [
      "Cobertura ante perjuicios causados por fallas en el cumplimiento",
      "Apoyo jurídico"
    ]
  },
  {
    id: 24,
    icon: "fas fa-key",
    title: "Arrendamiento",
    src: arrendamiento,
    href: "/servicios/arrendamiento",
    features: [
      "Protección ante falta de pago del arrendatario",
      "Reparación por daños",
      "Asistencia jurídica"
    ]
  },
  {
    id: 25,
    icon: "fas fa-balance-scale",
    title: "Judiciales",
    src: judiciales,
    href: "/servicios/judiciales",
    features: [
      "Garantías exigidas por entidades judiciales",
      "Libertad provisional, medidas cautelares y más"
    ]
  }
];
