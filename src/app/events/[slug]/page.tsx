import { getEventBySlug, getAllEvents, type EventData } from '@/lib/events';
import { ImageCarousel } from '@/components/ImageCarousel';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { Button } from '@/components/ui/button';

interface EventPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata(
  { params }: EventPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | Major Historical Events`,
    description: event.teaser,
  };
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 space-y-8">
      <header className="space-y-4">
        <Link href="/" passHref legacyBehavior>
          <Button variant="outline" className="inline-flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all events
          </Button>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
          {event.title}
        </h1>
        <p className="text-center text-muted-foreground text-lg">{event.date}</p>
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 rounded-lg shadow-md">
        <p className="italic text-muted-foreground">
          Hey everyone, I’m Ashish Puri, and I built this site just for educational purposes.
        </p>
        {event.summaryParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p className="italic text-muted-foreground">
          I hope you enjoy this journey through a pivotal moment in history.
        </p>
      </section>

      {event.images && event.images.length > 0 && (
        <section aria-labelledby="event-images-title">
          <h2 id="event-images-title" className="sr-only">Event Images</h2>
          <ImageCarousel images={event.images} />
        </section>
      )}
    </article>
  );
}
