import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';

export default function LandingPage() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Features />
        </>
    );
}
