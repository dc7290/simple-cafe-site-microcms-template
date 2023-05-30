import { createClient } from "microcms-js-sdk";

if (
  import.meta.env["PUBLIC_MICROCMS_SERVICE_DOMAIN"] === undefined ||
  import.meta.env["PUBLIC_MICROCMS_API_KEY"] === undefined
) {
  throw new Error(
    "Please set environment variables: MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY"
  );
}

export const client = createClient({
  serviceDomain: import.meta.env["PUBLIC_MICROCMS_SERVICE_DOMAIN"],
  apiKey: import.meta.env["PUBLIC_MICROCMS_API_KEY"],
});
