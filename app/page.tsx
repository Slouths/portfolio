import { Inter } from 'next/font/google';
import { ArrowUpRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

const sections = [
  {
    title: "Projects",
    link: "On Your Terms",
    description: "Chrome extension designed to help inform users of their rights regarding TOS."
  },
  {
    title: "Hackathons",
    link: "On Your Terms",
    description: "Chrome extension designed to help inform users of their rights regarding TOS."
  },
  {
    title: "Posts",
    link: "FIU AI Init Build Project",
    description: "Chrome extension designed to help inform users of their rights regarding TOS."
  }
];

export default function Home() {
  return (
    <main className={`flex flex-col items-center mt-[100px] ${inter.className}`}>
      <div className="w-[709px]">
        <h1 className="text-[20px]">Nicholas Nunez</h1>
        <div className="h-[100px] overflow-hidden mt-10">
          <p className="text-[#ACAAAA] text-[16px]">Computer Science student at Florida International University with a passion for DevOps, Software Engineering, and Cloud Infrastructure. I'm seeking a DevOps or Software Engineering role to build scalable, impactful systems.</p>
        </div>
        <div className="flex flex-row gap-40 mt-10 text-[#ACAAAA]">
          {sections.map((section, index) => (
            <div key={index} className="flex-col gap-10">
              <p>{section.title}</p>
              <div className="h-4"></div>
              <a href="#" className="text-white underline decoration-1 flex items-center gap-1 whitespace-nowrap">
                {section.link}
                {index < 2 && <ArrowUpRight className="text-[#ACAAAA] w-4 h-4" />}
              </a>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

