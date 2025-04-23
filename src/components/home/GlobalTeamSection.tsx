
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Unsplash photo with diverse business team for "Global Team"
const backgroundImage = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80';

export default function GlobalTeamSection() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      {/* Vibrant bright background linear gradient AND background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(78,67,191,0.98) 13%, rgba(0,212,255,0.45) 100%),
            url('${backgroundImage}')
          `,
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
          <Button asChild size="lg" className="bg-white text-[#4E43BF] hover:bg-gray-100 font-montserrat font-bold">
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
