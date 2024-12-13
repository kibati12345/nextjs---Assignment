import { fetchFromStrapi } from "../lib/strapi";
import PostCard from "../components/posterCard";
import Head from "next/head";

import React from 'react';

const home = () => (
  <div>


<section class="jumbotron text-center hero-section d-flex align-items-center justify-content-center">
  <div class="container hero-text">
    <h1 class="jumbotron-heading">Welcome to My Web Shop</h1>
    <p class="lead text-muted">Discover the best products at unbeatable prices.</p>
    <p>
      <a href="/product/" class="btn btn-primary my-2">Shop Now</a>
      <a href="/about/" class="btn btn-secondary my-2">Learn More</a>
    </p>
  </div>
</section>


<div class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <h2>About Our Shop</h2>
      <p>Welcome to our web shop, where we specialize in providing high-quality, stylish sneakers and shoes at unbeatable prices. Our collection features a wide range of brands, colors, and styles to suit every taste and occasion. Whether you're looking for the latest trends in sneaker fashion or classic, timeless designs, we have something for everyone.</p>
      <p>We take pride in offering a curated selection of products that combine comfort, durability, and style. Our goal is to ensure that every customer finds the perfect pair of shoes to match their unique personality and lifestyle. Shop with us and experience the best in footwear fashion.</p>
    </div>
  </div>
</div>


<footer class="container py-4">
  <div class="row">
    <div class="col-12 col-md">
      <small class="d-block mb-3 text-muted">© <span id="currentYear"></span> Omotosho Oluwakibati</small>
    </div>
  </div>
</footer>

<script>
  // Script to dynamically set the current year in the footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
</script>

  </div>
);

export default home;