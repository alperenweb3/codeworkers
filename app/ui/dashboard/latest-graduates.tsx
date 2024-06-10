import { ArrowPathIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { roboto } from '@/app/ui/fonts';
import { fetchLatestGraduates } from '@/app/lib/firebase/data';
export default async function LatestGraduates() {
  const latestGraduates = await fetchLatestGraduates();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
        Latest graduates
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

        <div className="bg-white px-6">
          {latestGraduates.map((graduate, i) => {
            console.log(graduate.name);
            return (
              <div
                key={graduate.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={graduate.profileImageUrl}
                    alt={`${graduate.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {graduate.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {graduate.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${roboto.className} truncate text-sm font-medium md:text-base`}
                >
                  <Link href={`/dashboard/graduates/${graduate.id}/${(graduate.name).replace(/[^\w\s]|_/g, '').replace(/\s+/g, '-').toLowerCase()}`}>
                      <ArrowTopRightOnSquareIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"/>
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
