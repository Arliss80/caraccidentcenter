export interface LocationPageData {
  city: string;
  urlSlug: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  h1: string;
  h1Es: string;
  intro: string;
  introEs: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export interface LocationSchemaData {
  city: string;
  urlSlug: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}