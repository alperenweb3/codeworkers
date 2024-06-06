import Image from "next/image";
import CodeWorkersLogo from "./ui/codeworkers-logo";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import TextSwap from "./ui/text-swap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-50 p-4 md:h-24">
        <CodeWorkersLogo color="text-black" />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div/>
          <p
            className={`text-xl text-gray-800 antialiased md:text-3xl md:leading-normal`}
          >
            <TextSwap/><br /><strong>CodeWorks Graduates</strong>
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            CodeWorkers is an exclusive community of CodeWorks graduates. It is a place where you can connect with other graduates, share your experiences, and get help with your projects.</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
