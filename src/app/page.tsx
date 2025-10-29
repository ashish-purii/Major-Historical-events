
import { EventCard } from '@/components/EventCard';
import { getAllEvents } from '@/lib/events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Major Historical Events | Home',
  description: 'Explore pivotal moments in world history.',
};

export default function HomePage() {
  const events = getAllEvents();

  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Major Historical Events
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A journey through time by Ashish Puri. Let's explore together!
        </p>
      </header>

      <section
        aria-labelledby="events-grid-title"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        <h2 id="events-grid-title" className="sr-only">Events</h2>
        {events.map((event, index) => (
          <EventCard key={event.slug} event={event} priority={index < 4} />
        ))}
      </section>
    </div>
  );
}
