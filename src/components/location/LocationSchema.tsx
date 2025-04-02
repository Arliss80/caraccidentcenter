import React from 'react';
import { LocationSchemaData } from '../../types/location';
import { CONTACT_PHONE } from '../../constants/contact';

interface LocationSchemaProps {
  location: LocationSchemaData;
}

export default function LocationSchema({ location }: LocationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Car Accident Center",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "url": `https://caraccidentcenter.com/${location.urlSlug}-car-accident-help`,
    "description": `Helping car accident victims in ${location.city}, Utah get connected with legal and medical support quickly. Free consultation available.`,
    "telephone": "801-900-9393",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.latitude,
      "longitude": location.coordinates.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}