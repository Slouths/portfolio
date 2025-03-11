import { Inter } from 'next/font/google';
import { ArrowUpRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <div className={`flex flex-col items-center mt-[100px] ${inter.className}`}>
    <div className="w-[709px]">
      <h1 className="text-[20px]">Nicholas Nunez</h1>
      <div className="h-[100px] overflow-hidden mt-10">
        <p className="text-[#ACAAAA] text-[px]">Computer Science student at Florida International University with a passion for DevOps, software engineering, and cloud infrastructure. I'm seeking a DevOps or software engineering role to build scalable, impactful systems.</p>
      </div>
      <div className="flex flex-row gap-40 mt-10 text-[#ACAAAA]">
        <div className=" flex-col gap-10">
          <p>Projects</p>
          <div className="h-4"></div>
          <a href="#" className="text-white underline decoration-1 flex items-center gap-1 whitespace-nowrap">
            On Your Terms
            <ArrowUpRight className="text-[#ACAAAA] w-4 h-4" />
          </a>
          <p>Chrome extension designed to help inform 
          users of their rights regarding TOS.</p>
        </div>
        <div className=" flex-col gap-10">
          <p>Hackathons</p>
          <div className="h-4"></div>
          <a href="#" className="text-white underline decoration-1 flex items-center gap-1 whitespace-nowrap">
            On Your Terms
            <ArrowUpRight className="text-[#ACAAAA] w-4 h-4" />
          </a>
          <p>Chrome extension designed to help inform 
          users of their rights regarding TOS.</p>
        </div>
        <div className=" flex-col gap-10">
          <p>Posts</p>
          <div className="h-4"></div>
          <a href="#" className="text-white underline decoration-1 whitespace-nowrap">FIU AI Init Build Project</a>
          <p>Chrome extension designed to help inform 
          users of their rights regarding TOS.</p>
        </div>
      </div>
    </div>
  </div>;
}

