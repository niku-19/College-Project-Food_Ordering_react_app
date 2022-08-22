import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "4ijd22ps",
  dataset: "production",
  apiVersion: "2022-08-21",
  useCdn: true,
  token:
    "skMyCM4WFCPmV0OBQXEXHIw8gDa5x3GFjsEUJDjDKre5jhyzZVuBBtzQlDsfcTzsZO0udXp081LjAoRMWpITD7AKf1q4sFg0mppjI8Q2anCBzhrLhP0WobZzpqBQ1nNKDKEwBL5vgD9mU6KAeQcGWTGTWHj6w3HV9IcJ9sacsEzreUPJkASj",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
