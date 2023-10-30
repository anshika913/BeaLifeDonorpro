import React from 'react'
import Slide3 from "../../assets/img/slide-3.jpg"
import Slide7 from "../../assets/img/donateabout.jpeg"

function About_US() {
    return (
        <section className="text-gray-700 body-font" id="About_Us">
            <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center gap-3">
                <div
                    className="about_us__text_div lg:flex-grow lg:w-1/2 lg:pr-24 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center shadow-xl hover:shadow-2xl p-10 gap-2">
                    <h1 className="text-5xl font-medium">Who We Are?</h1>
                    <hr className="border-red-600 border-2 w-16" />
                    <p className="tracking-wider text-left md:text-center"> BeALife Donor is for public donation center with blood donation members in
                        the changing health care system.</p>
                    <ul className="font-sans border-red-100 text-left ">
                        <li className=""> We are dedicated to saving lives by ensuring a steady and safe supply of blood for those in need</li>
                        <li className="">Together with our donors, volunteers, and partners, we've positively impacted the lives of thousands of patients, helping them recover and thrive.</li>
                        <li className="">We adhere to the highest safety standards and maintain full transparency in our donation and distribution processes, ensuring the well-being of both donors and recipients.</li>
                        <li className="">Join us in our mission to make a difference. Whether you're a first-time donor or a seasoned volunteer, your support is vital in our journey to save lives.</li>
                      
                    </ul>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 ml-auto md:ml-6">
                    <img className="object-cover object-center rounded shadow-2xl" alt="hero" src={Slide7} />
                </div>
            </div>
        </section>
    )
}

export default About_US
