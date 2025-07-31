import React from "react";
import Companies from "@/app/components/Home/Companies";
import Courses from "@/app/components/Home/Courses";
import Mentor from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import ValuePropositions from "./components/ValuePropositions";
import Bestsellers from "./components/Bestsellers";
import Newsletter from "@/app/components/Home/Newsletter";

import { Metadata } from "next";
import BannerCarousel from "@/app/components/Home/Hero";
import BussinessUnits from "@/app/components/BusinessUnits"

export const metadata: Metadata = {
  title: "PT. Agronesia",
};

export default function Home() {
  return (
    <main>
      <BannerCarousel />
      <ValuePropositions />
      <BussinessUnits />
      <Bestsellers />
      <Companies />
      <Courses />
      <Mentor />
      <Testimonial />
      <ContactForm />
      {/* <Newsletter /> */}
    </main>
  );
}