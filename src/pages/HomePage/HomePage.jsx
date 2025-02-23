import React, { useState, useEffect } from 'react';
import GearForm from "../../components/GearForm/GearForm";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {

  return (
    <div>
        <Hero />
        <GearForm />
    </div>
  );
};

export default HomePage;
