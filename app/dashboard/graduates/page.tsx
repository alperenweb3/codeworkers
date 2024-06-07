'use client';

import { useEffect, useState } from "react"
import { fetchGraduates } from "../../lib/firebase/data"
import { Graduate } from "../../lib/types"
import Image from "next/image";

export default function Page(){
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getGraduates = async () => {
      const data = await fetchGraduates();
      console.log(data);
      setGraduates(data);
      setLoading(false);
    };
    getGraduates();
  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
          {graduates?.map((graduate) => (
            <div
              key={graduate.id}
              className="mb-2 w-full rounded-md bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <Image
                      src={graduate.profileImageUrl}
                      className="mr-2 rounded-full"
                      width={28}
                      height={28}
                      alt={`${graduate.name}'s profile picture`}
                    />
                    <p>{graduate.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{graduate.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Graduate
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Email
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Graduation Year
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Location
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Open to Work
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {graduates?.map((graduate) => (
              <tr
                key={graduate.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={graduate.profileImageUrl}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${graduate.name}'s profile picture`}
                    />
                    <p>{graduate.name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {graduate.email}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                {graduate.graduationYear}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                {graduate.location}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {graduate.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}