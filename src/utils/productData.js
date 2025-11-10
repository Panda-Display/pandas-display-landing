import storeIcon from "../assets/icons/store.svg";
import officeIcon from "../assets/icons/office.svg";
import churchIcon from "../assets/icons/church.svg";
import hotelIcon from "../assets/icons/hotel.svg";
import conferenceIcon from "../assets/icons/conference.svg";
import contactImage from "../assets/images/contactImage.jpg";
import billboardIcon from "../assets/icons/billboard.svg";
import arena from "../assets/icons/arena.svg";
import concert from "../assets/icons/concerts.svg";
import building from "../assets/icons/building.svg";
import transport from "../assets/icons/transport.svg";
import testtube from "../assets/icons/testtube.svg";
import curvedBuilding from "../assets/icons/curved_building.svg";
import museums from "../assets/icons/museums.svg";
import gallery from "../assets/icons/gallery.svg";
import showIcon from "../assets/icons/show.svg";
import glassIcon from "../assets/icons/glass.svg";
import terminalIcon from "../assets/icons/terminal.svg";
import displayIcon from "../assets/icons/display.svg";

export const productData = [
  // 01
  {
    id: "indoor",
    tab: "Indoor LED Screens",
    description:
      "Our Indoor LED Screens are built for brilliance and precision in controlled environments. With fine pixel pitches and sleek modular designs, they deliver sharp images and seamless visuals ideal for close viewing. ",
    clients: [
      { title: "Retail stores and shopping malls", icon: storeIcon },
      { title: "Corporate offices and boardrooms", icon: officeIcon },
      { title: "Churches, studios, and auditoriums", icon: churchIcon },
      { title: "Hotels, restaurants, and showrooms", icon: hotelIcon },
      { title: "Conference centers and event halls", icon: conferenceIcon },
    ],
    products: [
      {
        model: "P1.25 Indoor LED",
        image: contactImage,
        specifications: [
          "1.25mm",
          "800nits",
          "3840Hz",
          "1.5 - 2m",
          "1.5 - 2m",
          "Front access",
          "Ultra-HD clarity",
          "Ideal for studios & Control rooms.",
        ],
      },
      {
        model: "P1.56 Indoor LED",
        image: contactImage,
        specifications: [
          "1.56mm",
          "1000units",
          "3840Hz",
          "2 - 3m",
          "Front access",
          "High contrast",
          "Suitable for conference displays",
        ],
      },
      {
        model: "P1.875 Indoor LED",
        image: contactImage,
        specifications: [
          "1.875mm",
          "1000nits",
          "Front access",
          "3840Hz",
          "2 - 3m",
          "Great balance of resolution & cost",
        ],
      },
      {
        model: "P2.5 Indoor LED",
        image: contactImage,
        specifications: [
          "2.5mm",
          "1200nits",
          "Front access",
          "3840Hz",
          "3 - 4m",
          "Front/rear",
          "Popular for event halls & auditoriums",
        ],
      },
      {
        model: "P4 Indoor LED",
        image: contactImage,
        specifications: [
          "4mm",
          "1500nits",
          "Rear",
          "3840Hz",
          "5 - 7m",
          "Budget-friendly indoor billboard option",
        ],
      },
      {
        model: "P5 Indoor LED",
        image: contactImage,
        specifications: [
          "5mm",
          "1000nits",
          "Front access",
          "3840Hz",
          "6 - 10m",
          "Ideal for larger halls and exhibitions.",
        ],
      },
    ],
  },
  // 02
  {
    id: "outdoor",
    tab: "Outdoor LED Screens",
    description:
      "Built to thrive in all weather conditions, our Outdoor LED Screens are engineered for brightness, strength, and long-distance visibility. Whether for billboards, stadiums, or outdoor events, they guarantee performance in every environment.",
    clients: [
      { title: "Billboards and roadside signage", icon: billboardIcon },
      { title: "Sports arenas and stadiums", icon: arena },
      { title: "Concerts and outdoor stages", icon: concert },
      { title: "Building facades and rooftops", icon: building },
      { title: "Transport hubs and public areas", icon: transport },
    ],
    products: [
      {
        model: "P3.91 Outdoor LED",
        image: contactImage,
        specifications: [
          "3.91mm",
          "4500nits",
          "3840Hz",
          "3–5m",
          "IP65",
          "High",
          "brightness for close",
          "outdoor setups.",
        ],
      },
      {
        model: "P4.81 Outdoor LED",
        image: contactImage,
        specifications: [
          "4.81mm",
          "5000nits",
          "3840Hz",
          "4–7m",
          "IP65",
          "Excellent",
          "for events and semi-outdoor use.",
        ],
      },

      {
        model: "P5 Outdoor LED",
        image: contactImage,
        specifications: [
          "3.5mm",
          "5500nits",
          "3840Hz",
          "6-9m",
          "Widely used",
          "in outdoor advertising",
        ],
      },

      {
        model: "P6.67 Outdoor LED",
        image: contactImage,
        specifications: [
          "3.6.67mmm",
          "6000nits",
          "3840Hz",
          "8–12m",
          "IP65",
          "Great visibility under direct sunlight",
        ],
      },

      {
        model: "P8 Outdoor LED",
        image: contactImage,
        specifications: [
          "3.8mm",
          "6500nits",
          "3840Hz",
          "10–15m",
          "IP65",
          "Durable, long-range visibility option.",
        ],
      },
      {
        model: "P10 Outdoor LED",
        image: contactImage,
        specifications: [
          "3.10mm",
          "7500–8000nits",
          "3840Hz",
          "12–20m",
          "IP67",
          "Ideal for large billboards and stadium screens",
        ],
      },
    ],
  },
  //  03
  {
    id: "flexible",
    tab: "Flexible LED Screens ",
    description:
      "Our Flexible LED Screens introduce a new level of creative freedom. Designed with soft, bendable modules, they adapt to curved, wavy, or irregular surfaces, perfect for modern architectural and artistic designs.",
    clients: [
      { title: "Shopping malls and showrooms", icon: storeIcon },
      { title: "Stage backdrops and exhibitions", icon: testtube },
      { title: "Curved building interiors", icon: curvedBuilding },
      { title: "Museums and galleries", icon: museums },
      { title: "Digital art installations", icon: gallery },
    ],
    products: [
      {
        model: "P1.8 Flexible LED",
        image: contactImage,
        specifications: [
          "1.8mm",
          "1200nits",
          "≤120°",
          "3mm",
          "Front magnetic",
          "Ultra-thin for tight curves",
        ],
      },

      {
        model: "P2.5 Flexible LED",
        image: contactImage,
        specifications: [
          "2.5mm",
          "1500nits",
          "≤120°",
          "4.mm",
          "Front magnetic",
          "Great for creative walls",
        ],
      },

      {
        model: "P3 Flexible LED",
        image: contactImage,
        specifications: [
          "3mm",
          "1800nits",
          "≤120°",
          "5mm",
          "Front magnetic",
          "Lightweight, smooth curvature",
        ],
      },

      {
        model: "P4 Flexible LED",
        image: contactImage,
        specifications: [
          "6mm",
          "4mm",
          "2000nits",
          "3840Hz",
          "≤120°",
          "Front magnetic",
          "Ideal for exhibitions & retail displays",
        ],
      },

      {
        model: "P6 Flexible LED",
        image: contactImage,
        specifications: [
          "6mm",
          "2500nits",
          "3840Hz",
          "6mm",
          "Front magnetic",
          "Suitable for large curved surfaces",
        ],
      },
    ],
  },
  // 04
  {
    id: "rental",
    tab: "Rental LED Solution",
    description:
      "Our Rental LED Displays are designed for quick setup, easy mobility, and crystal-clear visuals — perfect for short-term installations like events, exhibitions, and concerts.",
    clients: [
      { title: "Trade shows and exhibitions", icon: showIcon },
      { title: "Concerts and live performances", icon: concert },
      { title: "Corporate conferences and campaigns", icon: officeIcon },
      { title: "Sports events and product launches", icon: arena },
    ],
    products: [
      {
        model: "P2.9 Rental LED",
        image: contactImage,
        specifications: [
          "2.9mm",
          "1200nits",
          "<15 min",
          "3840Hz",
          "Aluminum",
          "Excellent indoor rental solution",
        ],
      },

      {
        model: "P3.9 Rental LED",
        image: contactImage,
        specifications: [
          "3.9mm",
          "4500nits",
          "<15 min",
          "3840Hz",
          "Aluminum",
          "Popular for outdoor events",
        ],
      },

      {
        model: "P4.8 Rental LED",
        image: contactImage,
        specifications: [
          "4.8mm",
          "5000nits",
          "<15 min",
          "3840Hz",
          "Great balance of resolution & cost",
        ],
      },
    ],
  },
  // 05
  {
    id: "transparent",
    tab: "Transparent LED Screens",
    description:
      "Our Transparent LED Screens combine innovation and design, delivering high-impact visuals while maintaining transparency, ideal for glass walls and modern architecture.",
    clients: [
      { title: "Glass walls and storefronts", icon: glassIcon },
      { title: "Airports and transport terminals", icon: terminalIcon },
      { title: "Shopping malls and showrooms", icon: storeIcon },
      { title: "Architectural displays and art installations", icon: displayIcon},
    ],
    products: [
      {
        model: "P3.9×7.8 Transparent LED",
        image: contactImage,
        specifications: [
          "3.9×7.8",
          "5000nits",
          "85%",
          "IP54",
          "Ideal for high-end store displays",
        ],
      },

      {
        model: "P7.8×7.8 Transparent LED",
        image: contactImage,
        specifications: [
          "7.8×7.8",
          "5500nits",
          "90%",
          "IP54",
          "Excellent balance of brightness & visibility",
        ],
      },

      {
        model: "P10.4×10.4 Transparent LED",
        image: contactImage,
        specifications: [
          "10.4×10.4",
          "6000nits",
          "90%",
          "IP54",
          "Perfect for large glass facades",
        ],
      },
    ],
  },
  // 06
  {
    id: "walls",
    tab: "LED Video Walls",
    description:
      "Our LED Video Walls offer seamless, large-format visual experiences. With ultra-fine pixel pitches, they provide cinematic visuals ideal for control rooms, auditoriums, and broadcast studios.",
    clients: [
      { title: "Control rooms and command centers", icon: testtube },
      { title: "Corporate lobbies and retail spaces", icon: officeIcon },
      { title: "Churches, auditoriums, and cinemas", icon: churchIcon },
      { title: "Museums and galleries", icon: museums},
    ],
    products: [
      {
        model: "P1.25 Video Wall",
        image: contactImage,
        specifications: [
          "1.25mm",
          "800nits",
          "1.5 - 2m%",
          "3840Hz",
          "Ultra-HD display for studios",
        ],
      },

      {
        model: "P1.25 Video Wall",
        image: contactImage,
        specifications: [
          "1.25mm",
          "800nits",
          "1.5 - 2m",
          "3840Hz",
          "Ultra-HD display for studios",
        ],
      },

      {
        model: "P1.56 Video Wal",
        image: contactImage,
        specifications: [
          "1.56mm",
          "1000nits",
          "3840Hz",
          "2 - 3m",
          "Ideal for broadcast & meeting rooms",
        ],
      },

       {
        model: "P2.5 Video Wall",
        image: contactImage,
        specifications: [
          "2.5mm",
          "1200nits",
          "3840Hz",
          "3 - 4m",
          "Suitable for auditoriums",
        ],
      },

       {
        model: "P3 Video Wall",
        image: contactImage,
        specifications: [
          "3mm",
          "1500nits",
          "3840Hz",
          "4 - 5m",
          "Perfect for large-format indoor displays",
        ],
      },
    ],
  },
];
