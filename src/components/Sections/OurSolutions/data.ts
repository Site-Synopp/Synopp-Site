export interface Solution {
  id: string;
  icon: string;
}

import websiteIcon from "../../../../public/icons/Desktop.svg";
import appIcon from "../../../../public/icons/Code.svg";
import uiUxIcon from "../../../../public/icons/Palette.svg";
import mobileIcon from "../../../../public/icons/DeviceMobile.svg";
import aiIcon from "../../../../public/icons/OpenAiLogo.svg";
import inceptionIcon from "../../../../public/icons/Users.svg";

export const solutionData: Solution[] = [
  {
    id: "website-engineering",
    icon: websiteIcon,
  },
  {
    id: "app-development",
    icon: appIcon,
  },
  {
    id: "mobile-development",
    icon: mobileIcon,
  },
  {
    id: "ai-integration",
    icon: aiIcon,
  },
  {
    id: "ui-ux-design",
    icon: uiUxIcon,
  },
  {
    id: "inception-team",
    icon: inceptionIcon,
  },
];
