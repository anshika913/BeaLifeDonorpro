import React from 'react'
import avatar1 from "../../assets/img/avatar-1.png"
import avatar2 from "../../assets/img/avatar-2.png"
import avatar3 from "../../assets/img/avatar-3.png"
import avatar4 from "../../assets/img/avatar-4.jpg"

function Team() {
    return (
        <section className="team" id="Team">
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Our Wonderful Team</h1>
                            <div className="h-1 w-20 bg-red-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-base">Embrace the power of unity and collaboration, for it's in our collective efforts, bound by a common purpose, that we find the motivation and strength to conquer any challenge that comes our way. Together, as a team, we'll reach new heights, break through barriers, and create a future filled with success and achievement</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar1} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Shreyansh</h1>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar2} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Anshika</h1>
                                        <p>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar3} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Akanksha</h1>
                                        <p>Tester</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar4} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Sampurna</h1>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Team
