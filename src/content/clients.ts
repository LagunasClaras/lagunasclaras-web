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
      imageUrl: logoAbril.src,
      alt: 'Logo de Abril (Hudson)',
    },
    {
      name: 'San Agustín (Tigre)',
      imageUrl: logoSanAgustin.src,
      alt: 'Logo de San Agustín (Tigre)',
    },
    {
      name: 'Municipalidad de Alberti (Alberti)',
      imageUrl: logoAlberti.src,
      alt: 'Logo de Municipalidad de Alberti (Alberti)',
    },
    {
      name: 'Nordelta / Puertos del Lago (Escobar)',
      imageUrl: logoPuertos.src,
      alt: 'Logo de Nordelta / Puertos del Lago (Escobar)',
    },
    {
      name: 'San Rafael (Tigre)',
      imageUrl: logoSanRafael.src,
      alt: 'Logo de San Rafael (Tigre)',
    },
    {
      name: 'Central Nuclear Embalse Río Tercero (Córdoba)',
      imageUrl: logoCNE.src,
      alt: 'Logo de Central Nuclear Embalse Río Tercero (Córdoba)',
    },
    {
      name: 'Barrancas de Santa María (Tigre)',
      imageUrl: logoBarrancasSM.src,
      alt: 'Logo de Barrancas de Santa María (Tigre)',
    },
    {
      name: 'San Matías (Escobar)',
      imageUrl: logoSanMatias.src,
      alt: 'Logo de San Matías (Escobar)',
    },
    {
      name: 'El Cantón (Escobar)',
      imageUrl: logoElCanton.src,
      alt: 'Logo de El Cantón (Escobar)',
    },
    {
      name: 'Náutico de Escobar',
      imageUrl: logoNauticoEscobar.src,
      alt: 'Logo de Náutico de Escobar',
    },
    {
      name: 'Termas de Villa Elisa (Entre Ríos)',
      imageUrl: logoTermasVillaElisa.src,
      alt: 'Logo de Termas de Villa Elisa (Entre Ríos)',
    },
  ],
};
