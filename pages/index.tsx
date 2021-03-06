import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Image from 'next/image';
import { files } from '@/data/files';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
        <Image
          alt="Febrilian Kristiawan"
          height={64}
          width={64}
          src="/avatar.jpg"
          className="rounded-full "
        />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 mt-4 text-black dark:text-white">
          Hi, it's Febrilian
        </h1>
        <h2 className="text-gray-600 text-xl dark:text-gray-400 mb-6">
          Dev & Med Student. Running Skala Group, Dorsian Software Studio and{' '}
          <a
            className="border-b-2 border-blue-500 hover:border-transparent"
            href="https://cepat.co"
          >
            Cepat.co{' '}
          </a>
        </h2>
        <div className="inline-flex mb-16">
          <img
            src="/DorsianLogo.png"
            alt="Dorsian Software Studio"
            className="w-20 h-20 shadow-lg mr-6 hover:opacity-75 cursor-pointer"
          />
          <img
            src="/CepatIcon.svg"
            alt="Cepat"
            className="w-20 h-20 shadow-lg hover:opacity-75 cursor-pointer"
          />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Post 🎈
        </h3>

        <BlogPost
          title="Not All Failures are Equal: Lessons from Basketball"
          summary="Life is only a matter of taking shots. Even though you might miss, just make sure you always take open shots."
          slug="not-all-failures-are-equal"
        />

        <BlogPost
          title="Idle Mind and Advertising"
          summary="There is nothing that I can buy to make me happy, only I can make myself happy."
          slug="idle-mind-and-advertising"
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Libraries
        </h3>
        {files.map(({ title, href, description }, index) => (
          <LibraryFile
            key={index}
            title={title}
            description={description}
            href={href}
          />
          // <a

          //   className="font-bold text-xl md:text-2xl tracking-tight mb-4 text-gray-700 border-b-2 border-gray-500 dark:text-white"
          //   href={href}
          //   target="_blank"
          // >
          //   {title}
          // </a>
        ))}

        <Timeline />
      </div>
    </Container>
  );
}

const LibraryFile = ({ title, href, description }) => {
  return (
    <a href={`${href}`} target="_blank" className="w-full ">
      <div className="mb-8 w-full hover:opacity-75">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ">{description}</p>
      </div>
    </a>
  );
};
