import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { ImTruck } from "react-icons/im";
import { MdDiscount } from "react-icons/md";
import FeatureCard from "./FeatureCard";

const Services = () => {
  const data = [
    {
      icon: <ImTruck size={32} color="red" />,
      title: "Free Delivery",
      desc: "Orders from all item",
    },
    {
      icon: <SiMoneygram size={32} color="red" />,
      title: "Return & Refund",
      desc: "Money back guarantee",
    },
    {
      icon: <MdDiscount size={32} color="red" />,
      title: "Member Discount",
      desc: "On Order Over $99.00",
    },
    {
      icon: <MdSupportAgent size={32} color="red" />,
      title: "Support 24/7",
      desc: "Contact us 24 hours a day",
    },
  ];
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          desc={item.desc}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Services;
