
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function GlobalTeamSection() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#455062]/90 to-[#455062]/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Global Team
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Make an impact in the fintech industry by joining Nexus Global. We're constantly looking for exceptional talent across technology, design, and business roles.
          </p>
          <Button asChild size="lg" className="bg-white text-[#455062] hover:bg-gray-100">
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
