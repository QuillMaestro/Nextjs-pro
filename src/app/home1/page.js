"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import "@/app/styles/nav1.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Nav from '../components/Nav'
// import Script from 'next/script'
import Toltost from '@/app/components/Toltost'
import Footer from '../components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from '../components/Contact'
// import CrispChat from '@/app/components/Crips'
import Head from 'next/head'
const home1 = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <Head>
                <title>nextpro</title>
            </Head>
            {/* <CrispChat /> */}
            <Nav />
            {/* ===================== 
                  hero section start
                 ===================== */}
            <section class="hero d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-12">
                            <div class="hero-text">
                                <div class="hero-title-wrap d-flex align-items-center mb-4">
                                    <img src="images/profile2.png" class="avatar-image avatar-image-large img-fluid" alt="" />

                                    <h1 class="hero-title ms-3 mb-0"><div id="flip">
                                        <div><div>wOrK</div></div>
                                        <div><div>Flexible</div></div>
                                        <div><div>Versatile</div></div>
                                    </div></h1>

                                </div>

                                <h2 class="mb-4">Ready for Freelance Assignments..</h2>




                                <p class="mb-4"><a class="custom-btn btn custom-link" href="/">Let's begin</a></p>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 position-relative">
                            <div class="hero-image-wrap"></div>
                            <img src="images/portrait-happy-woman-dressed-tank-top-holding-laptop-removebg-preview.png" class="hero-image img-fluid" alt="" />
                        </div>

                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fill-opacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </section>

            {/* ======================== 
               about section start
            ========================= */}

            <section class="about section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <img src="/images/bg-main.jpg" class="about-image img-fluid" alt="" />
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">

                                <div class="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 class="text-white me-4 mb-0">My Story</h2>

                                    <img src="images/profile2.png" class="avatar-image img-fluid" alt="" />
                                </div>

                                <h3 class="pt-2 mb-3">The Enigmatic Story of Olivia</h3>

                                <p>Freelancer Extraordinaire" - Immerse yourself in Sophia's harmonious world of freelancing, where she orchestrates remarkable projects, blending her talents and expertise into a captivating symphony of success.</p>

                                <p>Spirited Sophia: A Freelancer's Odyssey" - Embark on Sophia's inspiring journey as a freelancer, where she fearlessly embraces challenges, sparks creativity, and forges her own path to success.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ==================== Home Parallax Start =========================== */}

            <section class="mini" id="section_3">
                <div class="mini-content">
                    <div class="container">
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6">
                                <div class="info">
                                    <h1>Creative Autonomy</h1>
                                    <p>Experience the freedom of being your own boss and setting your own rules as a freelancer.</p>
                                </div>
                            </div>
                        </div>

                        {/* =========================
                              Mini Box Start
                            =========================== */}
                        <div class="row">
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Liberation</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Versatility</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Flexibility</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Expertise</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Autonomy</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" class="mini-box">
                                    <i><img className='myiconfree' src="/images/freelance.png" alt="" /></i>
                                    <strong>Harmony</strong>
                                    <span>Freelancer: Empowering Work.</span>
                                </a>
                            </div>
                        </div>
                        {/* =========================
                               Mini Box End
                          =========================== */}
                    </div>
                </div>
            </section>
            {/* ========================
                   Home Parallax End
              =========================== */}
            <section className='blog_bg' id='section_4'>
                <div className='blog_sb'>
                    <div class="text-center pt-3">
                        <h3 class="text-dark">The Best of the Web, Curated for You</h3>
                        <p class="text-dark">Thoughtful and engaging content to help you learn and grow.</p>
                    </div>
                    <Toltost />
                </div>
            </section>

            <section id='section_5' className='contact_box'>

                <Contact />
            </section>

            <Footer />
        </>
    );
};

export default home1;