import type { StaticImageData } from "next/image"

// Icons
import ENIcon from "../../../public/icons/EN.svg"
import ESIcon from "../../../public/icons/ES.svg"

interface Section {
  key: string
  label: string
  src: StaticImageData
}

export const LANGUAGES: Section[] = [
  { key: "EN", label: "ENGLISH", src: ENIcon },
  { key: "ES", label: "SPANISH", src: ESIcon },
]