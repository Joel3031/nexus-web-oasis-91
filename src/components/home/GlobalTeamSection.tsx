
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function GlobalTeamSection() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      {/* Bright, vibrant background linear gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(120deg, #fbda61 0%, #ff5acd 100%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Join Our Global Team
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Make an impact in the fintech industry by joining Nexus Global. We're constantly looking for exceptional talent across technology, design, and business roles.
          </p>
          <Button asChild size="lg" className="bg-white text-[#cf40b8] hover:bg-gray-100 font-montserrat font-bold">
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
