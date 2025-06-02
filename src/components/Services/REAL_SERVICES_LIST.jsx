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

// Real services list updated with your available Flaticon icons and new feature descriptions
export const REAL_SERVICES_LIST = [
  {
    id: 1,
    icon: "flaticon-life-insurance",
    title: "Seguro de Vida Individual",
    src: vidaIndividual,
    href: "/servicios/vida-individual",
    features: [ // Actualizado
      "Protección a largo plazo para ti y tu familia",
      "Coberturas flexibles",
      "Apoyo económico en momentos difíciles"
    ]
  },
  {
    id: 2,
    icon: "flaticon-family",
    title: "Seguro de Vida Grupo",
    src: vidaGrupo,
    href: "/servicios/vida-grupo",
    features: [ // Actualizado
      "Ideal para Empleados o Colectivos.",
      "Tarifas preferenciales",
      "Cobertura ante fallecimiento o invalidez"
    ]
  },
  {
    id: 3,
    icon: "flaticon-investment", // Icono representativo para educación/futuro
    title: "Seguro de Educación",
    src: educacion,
    href: "/servicios/educacion",
    features: [ // Actualizado
      "Asegura el futuro académico de tus hijos",
      "Planificación financiera a largo plazo",
      "Cobertura ante imprevistos"
    ]
  },
  {
    id: 4,
    icon: "flaticon-healthcare",
    title: "Seguro de Salud",
    src: salud,
    href: "/servicios/salud",
    features: [ // Actualizado
      "Amplia red médica y hospitalaria",
      "Planes individuales y familiares",
      "Cobertura nacional"
    ]
  },
  {
    id: 5,
    icon: "flaticon-protection",
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
    icon: "flaticon-piggy-bank",
    title: "Seguro de Pensión Voluntaria",
    src: pension,
    href: "/servicios/pension-voluntaria",
    features: [ // Actualizado
      "Ahorro flexible para tu retiro",
      "Beneficios tributarios",
      "Opciones de renta vitalicia"
    ]
  },
  {
    id: 7,
    icon: "flaticon-money",
    title: "Seguro de Rentas",
    src: rentas,
    href: "/servicios/rentas",
    features: [ // Actualizado
      "Ingresos programados",
      "Tranquilidad financiera mensual",
      "Ideal para planificación familiar"
    ]
  },
  {
    id: 8,
    icon: "flaticon-protection-1", // Manteniendo el icono anterior para RC Médica
    title: "RC Médica", // El título original era "RC Médica"
    src: rcMedica,
    href: "/servicios/rc-medica",
    features: [ // Actualizado
      "Protección ante demandas por negligencia",
      "Cobertura a profesionales de la salud",
      "Acompañamiento legal especializado"
    ]
  },
  {
    id: 9,
    icon: "flaticon-conflagration",
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
    icon: "flaticon-house",
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
    icon: "flaticon-car-insurance",
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
    icon: "flaticon-briefcase",
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
    icon: "flaticon-ship",
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
    icon: "flaticon-padlock",
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
    icon: "flaticon-umbrella",
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
    icon: "flaticon-user",
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
    icon: "flaticon-settings",
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
    icon: "flaticon-layers",
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
    icon: "flaticon-briefcase-1",
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
    icon: "flaticon-property-insurance",
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
    icon: "flaticon-report",
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
    icon: "flaticon-handshake",
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
    icon: "flaticon-report-1",
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
    icon: "flaticon-house", // Reutilizado de Seguro de Hogar, podría buscarse uno más específico para arrendamiento si es necesario.
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
    icon: "flaticon-folder", // Icono genérico, podría buscarse uno más específico para temas judiciales.
    title: "Judiciales",
    src: judiciales,
    href: "/servicios/judiciales",
    features: [
      "Garantías exigidas por entidades judiciales",
      "Libertad provisional, medidas cautelares y más"
    ]
  }
];
