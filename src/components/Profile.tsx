// src/components/Profile.tsx
import React from "react";
import profileData from "../data.json";

const Profile: React.FC = () => {
  const profile = profileData;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
      <img className="w-24 h-24 rounded-full" src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg" alt="Profile" />
        <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{profile.location}</p>
        <p className="text-gray-700">{profile.bio}</p>
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold">Availability:</span> {profile.availability}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date of Birth:</span> {new Date(profile.dateOfBirth).toDateString()}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> {profile.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> {profile.address}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">GitHub:</span> {profile.github}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Twitter:</span> {profile.twitter}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">LinkedIn:</span> {profile.linkedin}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Expected Salary:</span> ${profile.expectedSalary}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Own a Car:</span> {profile.ownACar ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Have Driving License:</span> {profile.haveDrivingLicense ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Notice Period:</span> {profile.noticePeriod}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Immigration Status:</span> {profile.immigrationStatus}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Referees:</span> {profile.referees}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Willing to Relocate:</span> {profile.willingToRelocate ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Languages:</span> {profile.languages}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Skills:</span> {profile.skills}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
