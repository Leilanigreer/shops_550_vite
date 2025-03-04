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
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg h-[300px] flex flex-col sm:cursor-pointer cursor-default"
      onClick={() => {
        // Only trigger onClick on non-mobile screens
        if (window.innerWidth >= 640) {
          onClick();
        }
      }}
    >
      <div className="h-1/3  flex items-center justify-center p-3">
        {business.logo ? (
          <AdvancedImage
            cldImg={cld
              .image(business.logo)
              .resize(auto())}
            className="max-h-[80%] max-w-[80%] object-contain"
          />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold">{business.name}</h2>
            {business.tagline && <p className="text-sm text-gray-500">{business.tagline}</p>}
          </div>
        )}
      </div>
      <div className="h-8 p-0.5 border-b border-gray-100 flex items-center justify-center">
        {business.hours && <p className="text-center text-sm ">{business.hours}</p>}
      </div>
      <div className="flex-1 p-0.5 flex flex-col bg-gray-100">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-center text-md px-4">{business.description}</p>
          </div>
          <div className="text-center pb-2">
            <a
              href={business.website || '#'}
              className="text-gray-600 hover:text-gray-900 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {business.linkWording || 'Visit website'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;