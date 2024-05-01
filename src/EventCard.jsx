"use client";

import { Carousel } from "flowbite-react"
import { Card } from "flowbite-react";


const EventCard = () => {
    return (


        <div className="event-card absolute p-4 text-center transform -translate-x-1/2  left-1/2 my-16  bg-white/20 shadow-lg ring-1 ring-black/5">


            <Card
                className=" "
                renderImage={() =>
                    <div className="h-96 ">
                        <Carousel slideInterval={5000} className="h-full w-full">
                            <img src="public/CFL_AD.png" alt="..." className="h-96 w-full"/>
                            <img src="public/CFL_AD.png" alt="..." className="h-96 w-full"/>

                        </Carousel>

                    </div>
                }
            >


                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Creator Fight League 2 – Nashville, TN
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Get ready for Creator Fight League 2, hitting Nashville with a vengeance! Witness the raw power of
                    creative warriors as they battle it out in the ring. It's a showdown where only the toughest minds
                    survive!
                </p>
                <a href="https://watch.castr.io/gPVGPCcWFrM5LwAhQ9oo/stream/N400bfj07rGRAvHR1mMt"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Purchase PPV
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="/tickets"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Purchase Tickets
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </Card>

        </div>
    );
};

export default EventCard;