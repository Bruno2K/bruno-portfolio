import "server-only";

import { en } from "./en";
import { ptBr } from "./pt-br";
import type { Locale } from "../config";
import type { Dictionary } from "../types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "pt-br": ptBr,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
