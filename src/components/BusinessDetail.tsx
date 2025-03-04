import React from 'react';
import { Business } from '../types/business';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


interface BusinessDetailProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetail: React.FC<BusinessDetailProps> = ({ business, onClose }) => {
  if (!business.founderInfo) return null;
  const cld = new Cloudinary({ cloud: { cloudName: 'ddp35mzkz' } });
  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {business.founderInfo.image && (
                  <div>
                    <AdvancedImage
                      cldImg={cld
                        .image(business.founderInfo.image)
                        .resize(auto())}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold mb-4">{business.founderInfo.name}</h2>
                  <p className="text-gray-600 mb-2">{business.founderInfo.title}</p>
                  <p className="text-gray-700">{business.founderInfo.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetail;