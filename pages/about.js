import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Febrilian Kristiawan"
        canonical="https://febrilian.com/about"
        openGraph={{
          url: 'https://febrilian.com/about',
          title: 'About Me – Febrilian Kristiawan'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Febrilian. I'm a developer, medical student. Currently building&nbsp;
            <a
              href="https://risetku.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Risetku
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://cepat.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cepat.co.
            </a>
            &nbsp;Currently freelancing for fullstack projects, feel free to hit
            me up!
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Freelance Projects
        </h2>
        <Talk
          title="Doctor's Career Updates"
          link="https://www.doctorscareerupdates.com/"
        >
          Biannual event by Departemen Pendidikan dan Profesi BEM IKM FKUI.
          Conferences and workshops about career for doctors.
        </Talk>
        <Talk title="One Data Makara" link="/">
          Internal data gathering system for Ikatan Keluarga Mahasiswa Fakultas
          Kedokteran Universitas Indonesia.
        </Talk>
        <Talk title="Pemilihan Raya IKM FKUI 2020 Voting System" link="/">
          Building frictionless voting system. Set the record of most vote
          gathered for the last few years. Built as an integral part of One Data
          Makara.
        </Talk>
        <Talk title="EFAST 2020" link="https://www.efast2020.online">
          Building EFAST 2020 by TBM FKUI's website.
        </Talk>
        Building EFAST 2020 by TBM FKUI's website.
      </div>
    </Container>
  );
}
