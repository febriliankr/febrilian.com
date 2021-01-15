import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Image from 'next/image';

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
        <h2 className="text-gray-600 text-xl dark:text-gray-400 mb-16">                                            
          Developing & Shipping Great Stuffs
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Post 🎈
        </h3>
        
        <BlogPost
          title="Idle Mind and Advertising"
          summary="There is nothing that I can buy to make me happy, only I can make myself happy."
          slug="idle-mind-and-advertising"
        />
        <Timeline />
      </div>
    </Container>
  );
}
