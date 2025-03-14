import allBusinesses from './businesses/index.ts';
import BusinessCards from './components/BusinessCard';
// import BusinessDetail from './components/BusinessDetail';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#DDD0C8] flex flex-col">
      <header className="w-full py-12">
        <div className="container mx-auto text-center px-4">
          <p className="uppercase text-sm tracking-widest text-[#323232]"> Featuring </p>
          <p className="text-5xl font-bold mt-4 mb-6 text-[#323232] ">The Shops at 550</p>
          <p className="max-w-2xl mx-auto text-[#323232]">We are a collective of creatives, each bringing our passions to life through style, luxury, accessories and grooming </p>
        </div>
      </header>

      <section className="container max-w-6xl mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allBusinesses.map((business) => (
            <BusinessCards
              key={business.id}
              business={business}
              onClick={() => {/* Disabled for now */ }}
            />
          ))}
        </div>
      </section>

      {/* Business details feature temporarily disabled
      {selectedBusiness?.founderInfo && (
        <BusinessDetail business={selectedBusiness} onClose={() => setSelectedBusiness(null)} />
      )} */}

      <footer className="w-full py-6 text-center text-[#323232] bg-[#E5DED8] shadow-inner">
        <p className="text-sm">
          Created with <span className="text-purple-600">♥</span> by{' '}
          <a
            href="https://leilanigreer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#323232] hover:text-gray-700 underline"
          >
            Leilani Greer
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

