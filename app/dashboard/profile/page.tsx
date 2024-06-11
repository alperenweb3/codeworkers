'use client';


import Image from "next/image";
import useGraduate from "@/app/hooks/useGraduate";
import { updateFirebaseDoc, uploadFile } from "@/app/lib/firebase/data";
import { FirestoreData } from "@/app/lib/types";


export default function Page(){
  
  const { graduate, loading, error } = useGraduate("phqIVobrHJpSz5nlxFMQ");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!graduate) {
    return <p>No graduate found</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const formData = new FormData(target);
  
    const sanitizedData: FirestoreData = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        const path = `codeworkers/user/${value.name}`;
        const downloadURL = await uploadFile(value, path);
        sanitizedData[key] = downloadURL;
      } else if (key === 'skills') {
        sanitizedData[key] = value.toString().split(',').map(skill => skill.trim());
      } else {
        sanitizedData[key] = value.toString();
      }
    }
  
    const docId = graduate._id; // Replace this with the actual document ID you want to update
    await updateFirebaseDoc(docId, sanitizedData);
  };

  return(
    <form onSubmit={handleSubmit} className="p-4">
    <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
    <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="flex flex-col gap-4">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          {/* Profile Image */}
          <div className="rounded-full w-32 h-32 overflow-hidden">
                  <Image
                    src={graduate.profileImageUrl}
                    alt={graduate.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
            <div>
              <label className="block text-gray-700">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>    
          </div>
      </div>
      <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={graduate.name}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              defaultValue={graduate.title}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
      </div>
    </div>
    <div className="flex pt-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col gap-4">

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={graduate.email}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={graduate.phone}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Graduation Year */}
          <div className="mb-4">
            <label className="block text-gray-700">Graduation Year</label>
            <input
              type="number"
              name="graduationYear"
              defaultValue={graduate.graduationYear}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Program */}
          <div className="mb-4">
            <label className="block text-gray-700">Program</label>
            <input
              type="text"
              name="program"
              defaultValue={graduate.program}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* LinkedIn URL */}
          <div className="mb-4">
            <label className="block text-gray-700">LinkedIn URL</label>
            <input
              type="text"
              name="linkedinUrl"
              defaultValue={graduate.linkedin}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* GitHub URL */}
          <div className="mb-4">
            <label className="block text-gray-700">GitHub URL</label>
            <input
              type="text"
              name="githubUrl"
              defaultValue={graduate.github}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">


          {/* Short Bio */}
          <div className="mb-4">
            <label className="block text-gray-700">Short Bio</label>
            <textarea
              name="shortBio"
              defaultValue={graduate.bio}
              rows={5}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>


          {/* Skills */}
          <div className="mb-4">
            <label className="block text-gray-700">Skills ( please use comma! )</label>
            <input
              type="text"
              name="skills"
              defaultValue={graduate.skills}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={graduate.location}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label className="block text-gray-700">Availability</label>
            <select
              name="availability"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Projects</label>
            {/* Projects */}
            <button className="min-w-[200px] px-4 py-2 bg-orange-600 text-white rounded">Add Project</button>
          </div>
        </div>  
      </div>
    </div>
    <div className="max-w-5xl flex justify-end p-4">
      {/* Submit Button */}
      <button type="submit" className="min-w-[200px] px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">Save Profile</button>
    </div>
  </form>
  )       
}