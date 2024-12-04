import React from 'react';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={campaign.photoUrl} alt={campaign.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
      <p className="text-gray-700 mb-2">Type: {campaign.type}</p>
      <p className="text-gray-700 mb-2">Min Donation: {campaign.minDonation}</p>
      <p className="text-gray-700 mb-2">Deadline: {campaign.deadline}</p>
      <p className="text-gray-700 mb-2">User: {campaign.userName}</p>
      <p className="text-gray-700 mb-2">Email: {campaign.userEmail}</p>
      <p className="text-gray-700">{campaign.description}</p>
    </div>
  );
};

export default CampaignCard;
