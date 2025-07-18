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
  {
    img: cert1,
    template: emptycert1,
    key: 1,

    positions: {
      hpositions: {
        right: 0,
        left: 0,
        top: 240,
      },
      detpositions: {
        right: 0,
        left: 0,
        top: 310,
      },
      datepositions: {
        top: 370,
        left: 200,
      },
      sigpositions: {
        top: 370,
        right: 180,
      },
    },
  },
  {
    img: cert2,
    template: emptycert2,
    key: 2,
    positions: {
      hpositions: {
        right: 0,
        left: 0,
        top: 230,
      },
      detpositions: {
        right: 0,
        left: 0,
        top: 300,
      },
      datepositions: {
        top: 380,
        left: 210,
      },
      sigpositions: {
        top: 380,
        right: 180,
      },
    },
  },
  {
    img: cert3,
    template: emptycert3,
    key: 3,

    positions: {
      hpositions: {
        right: 0,
        left: 0,
        top: 200,
      },
      detpositions: {
        right: 0,
        left: 0,
        top: 280,
      },
      datepositions: {
        top: 390,
        left: 260,
      },
      sigpositions: {
        top: 390,
        right: 235,
      },
    },
  },
  {
    img: cert4,
    template: emptycert4,
    key: 4,
    positions: {
      hpositions: {
        right: 0,
        left: 0,
        top: 200,
      },
      detpositions: {
        right: 0,
        left: 0,
        top: 270,
      },
      datepositions: {
        top: 390,
        left: 230,
      },
      sigpositions: {
        top: 390,
        right: 160,
      },
    },
  },
];

export const FOOTER_COLOR = "#1b2123";

export const SOCIAL_ICONS = [
  XIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  RssFeedIcon,
];
