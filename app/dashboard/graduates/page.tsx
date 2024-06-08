'use client';

import { useEffect, useState } from "react"
import { fetchGraduates } from "../../lib/firebase/data"
import { Graduate } from "../../lib/types"
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';


export default function Page({ name }: { name: string }){
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [graduationYearFilter, setGraduationYearFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

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

  const filteredGraduates = graduates.filter((graduate) => {
    return (
      (searchTerm === '' || graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) || graduate.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (graduationYearFilter === '' || graduate.graduationYear.toString() === graduationYearFilter) &&
      (locationFilter === '' || graduate.location === locationFilter) &&
      (availabilityFilter === '' || graduate.availability === availabilityFilter)
    );
  });

  const graduationYears = Array.from(new Set(graduates.map(graduate => graduate.graduationYear)));
  const locations = Array.from(new Set(graduates.map(graduate => graduate.location)));
  const availabilities = Array.from(new Set(graduates.map(graduate => graduate.availability)));

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Graduates</h1>

      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="relative flex flex-1 flex-shrink-0">
        <input 
          type="text" 
          placeholder="Search by name or email" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>


        <select 
          value={graduationYearFilter}
          onChange={(e) => setGraduationYearFilter(e.target.value)}
          className="block rounded-md border border-gray-200 py-[9px] text-left pr-10 pl-3 text-sm outline-2 placeholder:text-gray-500"
        >
          <option value="">Graduation Year</option>
          {graduationYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select 
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="block rounded-md border border-gray-200 py-[9px] text-left pr-10 pl-3 text-sm outline-2 placeholder:text-gray-500"
        >
          <option value="">Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <select 
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="block rounded-md border border-gray-200 py-[9px] text-left pr-10 pl-3 text-sm outline-2 placeholder:text-gray-500"
        >
          <option value="">Availability</option>
          {availabilities.map(availability => (
            <option key={availability} value={availability}>{availability}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {filteredGraduates?.map((graduate) => (
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
                    <Link href={`/dashboard/graduates/${graduate.id}/${(graduate.name).replace(/[^\w\s]|_/g, '').replace(/\s+/g, '-').toLowerCase()}`}>
                      <ArrowTopRightOnSquareIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Graduate Name
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
                {filteredGraduates?.map((graduate) => (
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
                        <Link href={`/dashboard/graduates/${graduate.id}/${(graduate.name).replace(/[^\w\s]|_/g, '').replace(/\s+/g, '-').toLowerCase()}`}>
                        <ArrowTopRightOnSquareIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"/>
                        </Link>
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
    </main>
  );
}