
import { defineLive } from "next-sanity/live";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
  serverToken: false,
  browserToken: false,
  client,
});
