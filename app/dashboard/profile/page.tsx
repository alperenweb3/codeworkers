'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db, auth } from '@/app/lib/firebase/config'; // Ensure you have firebase configured

export default function Page(){
  // const [profileData, setProfileData] = useState({
  //   jobTitle: '',
  //   profileImage: '',
  //   name: '',
  //   email: '',
  //   phone: '',
  //   graduationYear: '',
  //   program: '',
  //   skills: '',
  //   location: '',
  //   linkedinUrl: '',
  //   githubUrl: '',
  //   availability: 'Available',
  //   shortBio: '',
  //   projects: '',
  // });

  // const fetchProfileData = async () => {
  //   const user = auth.currentUser;
  //   if (user) {
  //     const userDoc = doc(db, 'users', user.uid);
  //     const userData = await getDoc(userDoc);
  //     if (userData.exists()) {
  //       setProfileData(userData.data());
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchProfileData();
  // }, []);
  //   // Function to handle input change
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setProfileData({ ...profileData, [name]: value });
  //   };
  return(
    <form onSubmit={()=>{}} className="max-w-xl p-4">
    <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
    
    {/* Job Title */}
    <div className="mb-4">
      <label className="block text-gray-700">Job Title</label>
      <input
        type="text"
        name="jobTitle"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Profile Image */}
    <div className="mb-4">
      <label className="block text-gray-700">Profile Image URL</label>
      <input
        type="text"
        name="profileImage"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-gray-700">Name</label>
      <input
        type="text"
        name="name"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Phone */}
    <div className="mb-4">
      <label className="block text-gray-700">Phone</label>
      <input
        type="text"
        name="phone"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Graduation Year */}
    <div className="mb-4">
      <label className="block text-gray-700">Graduation Year</label>
      <input
        type="text"
        name="graduationYear"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Program */}
    <div className="mb-4">
      <label className="block text-gray-700">Program</label>
      <input
        type="text"
        name="program"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Skills */}
    <div className="mb-4">
      <label className="block text-gray-700">Skills</label>
      <input
        type="text"
        name="skills"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Location */}
    <div className="mb-4">
      <label className="block text-gray-700">Location</label>
      <input
        type="text"
        name="location"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* LinkedIn URL */}
    <div className="mb-4">
      <label className="block text-gray-700">LinkedIn URL</label>
      <input
        type="text"
        name="linkedinUrl"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* GitHub URL */}
    <div className="mb-4">
      <label className="block text-gray-700">GitHub URL</label>
      <input
        type="text"
        name="githubUrl"
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

    {/* Short Bio */}
    <div className="mb-4">
      <label className="block text-gray-700">Short Bio</label>
      <textarea
        name="shortBio"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Projects */}
    <div className="mb-4">
      <label className="block text-gray-700">Projects</label>
      <textarea
        name="projects"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
  </form>
  )       
}