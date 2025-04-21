
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function GlobalTeamSection() {
  return (
    <section className="bg-[#455062] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Team</h2>
            <p className="text-white/90 max-w-md text-lg mb-8">
              Make an impact in the fintech industry by joining Nexus Global. We're constantly looking for exceptional talent across technology, design, and business roles.
            </p>
            <Button asChild size="lg" className="bg-white text-[#455062] hover:bg-gray-100">
              <Link to="/careers">View Open Positions</Link>
            </Button>
          </div>
          <div className="hidden lg:block" style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.3'
          }} />
        </div>
      </div>
    </section>
  );
}
