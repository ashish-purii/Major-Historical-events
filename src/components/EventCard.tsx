
import type { EventData } from '@/lib/events';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: EventData;
  priority?: boolean;
}

export function EventCard({ event, priority = false }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`} passHref legacyBehavior>
      <a className="block group">
        <Card className="h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <CardHeader className="p-0">
            <div className="aspect-[3/2] relative w-full overflow-hidden">
              <Image
                src={event.imageCard.src}
                alt={event.imageCard.alt}
                width={event.imageCard.width}
                height={event.imageCard.height}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                data-ai-hint={event.imageCard.hint}
                priority={priority}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {event.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {event.teaser}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Badge variant="secondary">{event.date}</Badge>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
