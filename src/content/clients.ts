import {
  logoAbril,
  logoAlberti,
  logoBarrancasSM,
  logoCNE,
  logoElCanton,
  logoNauticoEscobar,
  logoPuertos,
  logoSanAgustin,
  logoSanMatias,
  logoSanRafael,
  logoTermasVillaElisa,
} from '@/assets/Logos';
import type { ClientsProps } from '@/sections/home/types/Clients.types';

// Clients Content
export const clientsContent: ClientsProps = {
  sectionTitle: 'Nuestros clientes',
  sectionDescription: 'Empresas e instituciones que confían en nuestros servicios:',
  clients: [
    {
      name: 'Abril (Hudson)',
      image: logoAbril,
      alt: 'Logo de Abril (Hudson)',
    },
    {
      name: 'San Agustín (Tigre)',
      image: logoSanAgustin,
      alt: 'Logo de San Agustín (Tigre)',
    },
    {
      name: 'Municipalidad de Alberti (Alberti)',
      image: logoAlberti,
      alt: 'Logo de Municipalidad de Alberti (Alberti)',
    },
    {
      name: 'Nordelta / Puertos del Lago (Escobar)',
      image: logoPuertos,
      alt: 'Logo de Nordelta / Puertos del Lago (Escobar)',
    },
    {
      name: 'San Rafael (Tigre)',
      image: logoSanRafael,
      alt: 'Logo de San Rafael (Tigre)',
    },
    {
      name: 'Central Nuclear Embalse Río Tercero (Córdoba)',
      image: logoCNE,
      alt: 'Logo de Central Nuclear Embalse Río Tercero (Córdoba)',
    },
    {
      name: 'Barrancas de Santa María (Tigre)',
      image: logoBarrancasSM,
      alt: 'Logo de Barrancas de Santa María (Tigre)',
    },
    {
      name: 'San Matías (Escobar)',
      image: logoSanMatias,
      alt: 'Logo de San Matías (Escobar)',
    },
    {
      name: 'El Cantón (Escobar)',
      image: logoElCanton,
      alt: 'Logo de El Cantón (Escobar)',
    },
    {
      name: 'Náutico de Escobar',
      image: logoNauticoEscobar,
      alt: 'Logo de Náutico de Escobar',
    },
    {
      name: 'Termas de Villa Elisa (Entre Ríos)',
      image: logoTermasVillaElisa,
      alt: 'Logo de Termas de Villa Elisa (Entre Ríos)',
    },
  ],
};
