import { useState } from 'react';
import NextLink from 'next/link';

const Divider = () => {
  return (
    <div className="border border-gray-100 dark:border-gray-800 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2020</Year>
    <ul>
      <Step title="Building Next Generation Risetku.com">
        Excited to build the next generation of Risetku.com.
      </Step>
      <Step title="Did A Lot of Freelance Projects">
        Did multiple freelance projects with multiple organizations.
      </Step>
      <Step title="Biggest project yet">
        Building One Data Makara for BEM IKM FKUI 2020. Won the project through
        open tender.
      </Step>
      <Step title="Built my Web Development Agency, SitasiWorks">
        Created an agency to solve organization's problem in finding reliable
        partner to work with them to build custom web-based systems.
      </Step>
      <Step title="Got my first paid fullstack project.">
        Building EFAST 2020 by TBM FKUI's website.
      </Step>
      <Step title={`Started "Yang Gue Pelajari Dari" Podcast`}>
        A podcast series I made just to have fun talking with my friends.{' '}
        <NextLink href="https://open.spotify.com/show/0AT8ZfLAs5aaE7c1kaM7hd">
          <a className="font-semibold text-blue-600 dark:text-blue-400">
            Listen here.
          </a>
        </NextLink>
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Got in Faculty of Medicine, University of Indonesia">
        First steps in the real world. Moved to the capital to pursue my medical
        education and training there.
      </Step>
      <Step title="Graduated High School">
        Saying goodbye to free time and hometown buddies
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Still Doing Competitive Programming">C++ for life</Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="One of My First Real Codes">
        Got into competitive programming in highschool. Used C++ to solve
        problems Codeforces, Kattis, etc.
      </Step>
    </ul>
    <Divider />

    <Year>1999</Year>
    <ul>
      <Step title="Signed in The Game" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline ⏳
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Skala Group works in progress...">
          Working with multiple enterprise clients.
        </Step>
        <Step title="Built PT Skala Teknologi Nusantara 💪">
          Officially registered the company as perseroan terbatas. Skala Group
          in general will focus on enterprise projects, and Dorsian Software
          Studio will take on small to medium sized projects.
        </Step>
        <Step title="Dorsian Software Studio works in progress...">
          Working with{' '}
          <a
            target="_blank"
            href="https://pld-ui.com"
            className="font-semibold text-blue-600 dark:text-blue-400"
          >
            PLD UI 2022/2023
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://tbmfkui.org"
            className="font-semibold text-blue-600 dark:text-blue-400"
          >
            TBM FKUI
          </a>
          .
        </Step>
        <Step title="Worked with clients, now as Dorsian Software Studio">
          Built{' '}
          <a
            target="_blank"
            href="https://suaramahasiswa.com"
            className="font-semibold text-blue-600 dark:text-blue-400"
          >
            Suara Mahasiswa UI
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://ligamedika.co"
            className="font-semibold text-blue-600 dark:text-blue-400"
          >
            Liga Medika 2021
          </a>
          , and more.
        </Step>
        <Step title={`Building Cepat.co`}>
          Decided to build{' '}
          <NextLink href="https://cepat.co" target="_blank">
            <a className="font-semibold text-blue-600 dark:text-blue-400">
              Cepat.co
            </a>
          </NextLink>{' '}
          in public. Talking to users and building what they want.
        </Step>
        <Step title="SitasiWorks is now Dorsian 🎉">
          Continuing my web dev agency with a new name, Dorsian Software Studio.
          Onboarding my first software engineer, and a PR team. Don't worry I
          still code.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <div
          type="button"
          className="toggle-button flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 hover:opacity-75 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </>
  );
}
