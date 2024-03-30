"use server";

import { Lang } from "./type";

export async function changeLang(lang: Lang) {
  // query into database and save language of the requested IP to the language selected
  console.log(`Changing language to ${lang}`);
  return { message: `Changed language to ${lang}!` };
}

export async function search() {
  // query into database and find the data then return to client
  console.log("Searching!");
  return { message: "Founded it!" };
}
