import { InMemoryCache } from "@apollo/react-hooks";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allVideos: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        }
      }
    }
  }
})
 