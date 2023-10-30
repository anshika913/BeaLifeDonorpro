import React from 'react'
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../../assets/img/avatar-1.png"
import Slider from 'infinite-react-carousel';

function Testimonials() {
    const settings = {
        autoplay: true,
        centerMode: true,
        className: 'vc',
        dots: true,
        initialSlide: true,
        overScan: 1,
        wheel: true,
        autoplaySpeed: 4000,
        slidesPerRow: 1,
    };
    return (
        <>
            <section class="text-gray-700 bg-gray-400 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                    <Slider {...settings}>
                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">Being a regular blood donor with BeALife Donor has been an incredibly rewarding experience. Their team makes the donation process easy, safe, and convenient. Knowing that my contribution can save lives is a feeling like no other. I'm proud to be a part of this compassionate community.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Bhaskar Singh</span>
                                            <span class="text-gray-500 text-sm">A teacher</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">I recently needed a blood transfusion during a medical emergency, and I can't thank BeALife Donor enough for their quick response. The blood I received was a lifeline. It's comforting to know that there are organizations like this working tirelessly to ensure there's always enough blood available for those in need.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Anshika Jennifer</span>
                                            <span class="text-gray-500 text-sm">Web Developer</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">As a volunteer at BeALife Donor, I've seen firsthand the dedication and professionalism of their team. They go above and beyond to create a safe and welcoming environment for donors. It's heartwarming to see the positive impact of their work on the community.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Sampurna</span>
                                            <span class="text-gray-500 text-sm">Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">I decided to donate blood for the first time, and the staff at BeALife made me feel at ease throughout the entire process. They answered all my questions and ensured my comfort. It's a simple yet powerful way to contribute to the well-being of others. I'll definitely be back.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Shreyansh Saurabh</span>
                                            <span class="text-gray-500 text-sm">Gamer</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">"I've been donating blood for several years now, and I couldn't be happier with the experience I've had with BeALife Donor. They make the process easy and convenient. Knowing that my blood can potentially save a life is incredibly rewarding. Thank you for the opportunity to contribute to such a crucial cause!.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Akanksha</span>
                                            <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="p-4 w-full">
                                <div class="h-full bg-white p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">I recently needed a blood transfusion during a medical emergency, and it was thanks to BeALife Donor that I received the lifesaving blood I required. Their commitment to a steady and safe supply of blood is truly remarkable. I'm so grateful for the donors and the organization's dedication to helping people like me.</p>
                                    <a class="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Mahesh Bhaskar</span>
                                            <span class="text-gray-500 text-sm">Advocate</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Testimonials
