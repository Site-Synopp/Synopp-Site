import type { StaticImageData } from "next/image";

// Icons
import ENIcon from "../../../public/icons/EN.png";
import ESIcon from "../../../public/icons/ES.png";
import FRIcon from "../../../public/icons/FR.png";

interface Section {
  key: string;
  label: string;
  src: StaticImageData;
}

export const LANGUAGES: Section[] = [
  { key: "EN", label: "ENGLISH", src: ENIcon },
  { key: "ES", label: "SPANISH", src: ESIcon },
  { key: "FR", label: "FRENCH", src: FRIcon },
];
