'use client';

import { Graduate } from "@/app/lib/types"
import { useEffect, useState } from "react"
import { fetchGraduateById } from "@/app/lib/firebase/data"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx";
import { EnvelopeIcon, PhoneIcon, AcademicCapIcon, BookOpenIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Page({params}:{params:{id:string}}){


  const [graduate, setGraduate] = useState<Graduate | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (params.id) {
      const getGraduate = async () => {
        const data = await fetchGraduateById(params.id as string);
        setGraduate(data);
        setLoading(false);
      };
      getGraduate();
    }
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!graduate) {
    return <p>No graduate found</p>;
  }

  return (
    <main>
      <div className="flex p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full w-32 h-32 overflow-hidden">
                  <Image
                    src={graduate.profileImageUrl}
                    alt={graduate.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{graduate.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{graduate.title}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">{graduate.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">{graduate.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <AcademicCapIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">{graduate.graduationYear}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpenIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">{graduate.program}</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  <Link
                    href={graduate.linkedin}
                    className="flex-1 inline-flex h-9 items-center justify-center rounded-md bg-blue-500 text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <FaLinkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                  <Link
                    href={graduate.github}
                    className="flex-1 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                    prefetch={false}
                  >
                    <FaGithub className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold">About</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {graduate.bio}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Skills</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {graduate.skills.map((skill) => (
                      //TODO: skill max char will be 11 on database
                    <div key={skill} className="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-400">{skill}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <MapPinIcon className="mr-2 h-5 w-5 inline-block text-gray-500 dark:text-gray-400" />
                    {graduate.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Availability</h3>
                  <div className="flex items-center gap-2">
                    <div className={clsx("h-3 w-3 rounded-full", {
                      'bg-green-500': graduate.availability === 'Available',
                      'bg-red-500': graduate.availability === 'Not Available',
                      'bg-purple-500': graduate.availability === 'Freelancing',
                      })} />
                    <p className="text-gray-500 dark:text-gray-400">{graduate.availability}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Top Projects</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {graduate.projects.map((project)=>(
                      <div key={project.title} className="bg-gray-100 rounded-md p-4">
                        <h4 className="text-lg font-bold">{project.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                        <Link className="mt-2 block text-blue-500 hover:underline" href={project.url}>Project Details</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
  )   
}