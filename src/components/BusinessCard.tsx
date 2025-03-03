import React from 'react';
import { Business } from '../types/business';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, onClick }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'ddp35mzkz' } });

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="h-24 flex items-center justify-center mb-4">
          {business.logo ? (
            <AdvancedImage
              cldImg={cld
                .image(business.logo)
                .resize(auto())}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">{business.name}</h2>
              {business.tagline && <p className="text-gray-500">{business.tagline}</p>}
            </div>
          )}
        </div>
        <p className="text-center mb-4">{business.description}</p>
        {business.hours && <p className="text-center font-semibold">{business.hours}</p>}
        <div className="text-center mt-6">
          <a
            href={business.website || '#'}
            className="text-gray-600 hover:text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;