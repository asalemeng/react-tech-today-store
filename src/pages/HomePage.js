import React from "react";
import ProviderConsumer, { ProductConsumer } from "../context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import { FaEuroSign } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
