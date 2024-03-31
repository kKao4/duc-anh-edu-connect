import { delay } from "./delay";

export const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    await delay(2000);
    return res.json();
  });
// FIXME: ADDED DELAY TO SIMULATE SLOW INTERNET. REMOVE IT IN PRODUCTION!!!
