import cert1 from "/cert1.png";
import cert2 from "/cert2.png";
import cert3 from "/cert3.png";
import cert4 from "/cert4.png";
import emptycert1 from "/empty-cert1.png";
import emptycert2 from "/empty-cert2.png";
import emptycert3 from "/empty-cert3.png";
import emptycert4 from "/empty-cert4.png";

import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export const navItems = [
  "Template gallery",
  "Demo Tools",
  "API Documentation",
  "Pricing",
];

export const TEXTS_DATA = [
  {
    heading: "Pick your free template",
    desc: "Select one of the available templates, and fill in the details needed in your certificate.",
    key: 1,
  },
  {
    heading: "Anyone can generate certificates",
    desc: "Don't have design experience? \n Anyone of any age can use the certificate maker without prior design knowledge.",
    key: 2,
  },
  {
    heading: "Free for life",
    desc: "You can bookmark this page & generate as many certificates as you wish for your awardees. You can use it on your desktop, tablet or mobile device & keep downloading as you create.",
    key: 3,
  },
  {
    heading: "Save and print your certificate in high resolution",
    desc: "You can save your certificate as a PDF file & print it in high resolution. You can also download it as a PNG file & use it in your presentations or social media posts.",
    key: 4,
  },
];

export const TEMPLATES = [
  { img: cert1, template: emptycert1, key: 1 },
  { img: cert2, template: emptycert2, key: 2 },
  { img: cert3, template: emptycert3, key: 3 },
  { img: cert4, template: emptycert4, key: 4 },
];

export const FOOTER_COLOR = "#1b2123";

export const SOCIAL_ICONS = [
  XIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  RssFeedIcon,
];
