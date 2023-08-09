import React, { useState } from "react";
import {
  faHome,
  faIdCard,
  faBucket,
  faBagShopping,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../../assets/maps.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Place from "../components/Place";
import Tag from "../components/Tag";
import Modal from "../../../component/Modal";

const Home = () => {
  const data = [
    "Open Now",
    "Free Wifi",
    "Nitro Cold Brew",
    "Station",
    "Restourant",
  ];

  const menu = [
    { icon: faHome, label: "Home" },
    { icon: faIdCard, label: "Cards" },
    { icon: faBucket, label: "Order" },
    { icon: faBagShopping, label: "Shop" },
    { icon: faStore, label: "Store" },
  ];

  const dataPlace = [
    {
      name_place: "Airport Terminal 1 Transit",
      description:
        "Depature / Transit Lounge East #02-66, Terminal 1 SIngapore Changi Airport, Singapore 819642",
      tag: ["Open Now", "Nitro Cold Brew"],
      hours: [
        { day: "Mon", open: "12:00 AM", close: "12:00 AM" },
        { day: "Tues", open: "12:00 AM", close: "12:00 AM" },
        { day: "Wed", open: "12:00 AM", close: "12:00 AM" },
        { day: "Thu", open: "12:00 AM", close: "12:00 AM" },
        { day: "Fri", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sat", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sun", open: "12:00 AM", close: "12:00 AM" },
        { day: "Public Holiday", open: "12:00 AM", close: "12:00 AM" },
        { day: "Eve of Public Holiday", open: "12:00 AM", close: "12:00 AM" },
      ],
      closed: "11.59 PM",
      phone: "2462 4246",
    },
    {
      name_place: "Airport Terminal 2 Transit",
      description:
        "Depature / Transit Lounge East #02-66, Terminal 2 SIngapore Changi Airport, Singapore 819642",
      tag: ["Open Now", "Nitro Cold Brew"],
      hours: [
        { day: "Mon", open: "12:00 AM", close: "12:00 AM" },
        { day: "Tues", open: "12:00 AM", close: "12:00 AM" },
        { day: "Wed", open: "12:00 AM", close: "12:00 AM" },
        { day: "Thu", open: "12:00 AM", close: "12:00 AM" },
        { day: "Fri", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sat", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sun", open: "12:00 AM", close: "12:00 AM" },
        { day: "Public Holiday", open: "12:00 AM", close: "12:00 AM" },
        { day: "Eve of Public Holiday", open: "12:00 AM", close: "12:00 AM" },
      ],
      closed: "11.59 PM",
      phone: "2462 3123",
    },
    {
      name_place: "Airport Terminal 3 Transit",
      description:
        "Depature / Transit Lounge East #02-66, Terminal 3 SIngapore Changi Airport, Singapore 819642",
      tag: ["Open Now", "Nitro Cold Brew"],
      hours: [
        { day: "Mon", open: "12:00 AM", close: "12:00 AM" },
        { day: "Tues", open: "12:00 AM", close: "12:00 AM" },
        { day: "Wed", open: "12:00 AM", close: "12:00 AM" },
        { day: "Thu", open: "12:00 AM", close: "12:00 AM" },
        { day: "Fri", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sat", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sun", open: "12:00 AM", close: "12:00 AM" },
        { day: "Public Holiday", open: "12:00 AM", close: "12:00 AM" },
        { day: "Eve of Public Holiday", open: "12:00 AM", close: "12:00 AM" },
      ],
      closed: "11.59 PM",
      phone: "2462 9798",
    },
    {
      name_place: "Airport Terminal 4 Transit",
      description:
        "Depature / Transit Lounge East #02-66, Terminal 4 SIngapore Changi Airport, Singapore 819642",
      tag: ["Open Now", "Nitro Cold Brew"],
      hours: [
        { day: "Mon", open: "12:00 AM", close: "12:00 AM" },
        { day: "Tues", open: "12:00 AM", close: "12:00 AM" },
        { day: "Wed", open: "12:00 AM", close: "12:00 AM" },
        { day: "Thu", open: "12:00 AM", close: "12:00 AM" },
        { day: "Fri", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sat", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sun", open: "12:00 AM", close: "12:00 AM" },
        { day: "Public Holiday", open: "12:00 AM", close: "12:00 AM" },
        { day: "Eve of Public Holiday", open: "12:00 AM", close: "12:00 AM" },
      ],
      closed: "11.59 PM",
      phone: "2462 6457",
    },
    {
      name_place: "Airport Terminal 5 Transit",
      description:
        "Depature / Transit Lounge East #02-66, Terminal 5 SIngapore Changi Airport, Singapore 819642",
      tag: ["Open Now", "Nitro Cold Brew", "Station", "Restaurant"],
      hours: [
        { day: "Mon", open: "12:00 AM", close: "12:00 AM" },
        { day: "Tues", open: "12:00 AM", close: "12:00 AM" },
        { day: "Wed", open: "12:00 AM", close: "12:00 AM" },
        { day: "Thu", open: "12:00 AM", close: "12:00 AM" },
        { day: "Fri", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sat", open: "12:00 AM", close: "12:00 AM" },
        { day: "Sun", open: "12:00 AM", close: "12:00 AM" },
        { day: "Public Holiday", open: "12:00 AM", close: "12:00 AM" },
        { day: "Eve of Public Holiday", open: "12:00 AM", close: "12:00 AM" },
      ],
      closed: "11.59 PM",
      phone: "2462 3123",
    },
  ];

  const [detail, setDetail] = useState(null);

  const handleClose = () => setDetail(null);
  const handleDetail = (data) => setDetail(data);

  return !detail ? (
    <div>
      <Header />
      <Tag data={data} />
      <img src={image} className="image" alt="maps" />
      <Place data={dataPlace} handleDetail={handleDetail} />
      <Footer menu={menu} />
    </div>
  ) : (
    <Modal close={handleClose} data={detail} />
  );
};

export default Home;
