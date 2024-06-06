
const EventDetailsCard = () => {
    return (
        <div className="event-description bg-black/60 shadow-lg ring-1 ring-black/5 backdrop-blur-2xl border-white border-b-4 border-t-4">
            <div className="text-center my-5 ">
                <img src="/cfl2.webp" alt="image description" className="mx-auto"/>
                <br/>
                <p className="dark:text-white text-4xl my-3 font-bold"> ITS TIME FOR ROUND TWO!</p>
                <p className="dark:text-white text-2xl pb-8 ml-20 mr-20">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We're thrilled to announce the highly-anticipated return of Creator Fight League 2, set to take
                    place in the vibrant city of Nashville, Tennessee. Following the resounding success of our inaugural
                    event, were gearing up to deliver an evening of unparalleled excitement, athleticism, and
                    entertainment. Join us on July 12, 2025 in Nashville, where the thrill of the ring awaits you.
                </p>

                <div className="button-container">
                    <a type="button" href="https://tkotix.com/product/cfl2_ppv/"
                            className="mr-2 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                        <svg fill="#000000" width="32px" height="32px" viewBox="0 -8 528 528"
                             xmlns="http://www.w3.org/2000/svg"><title>video</title>
                            <path
                                d="M264 456Q211 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 309 437 356 410 402 364 429 318 456 264 456ZM345 256L216 160 216 352 345 256Z"/>
                        </svg>
                        Purcahse PPV
                    </a>
                    <a type="button" href="https://tkotix.com/product/cfl2/"
                            className=" text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                        <svg fill="#000000" className="mr-2" width="32px" height="32px" viewBox="0 0 0.96 0.96"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m0.553 0.227 0.18 0.18 -0.326 0.326 -0.18 -0.18zm-0.12 0.558 0.352 -0.352a0.036 0.036 0 0 0 0 -0.051l-0.206 -0.206a0.037 0.037 0 0 0 -0.051 0l-0.352 0.352a0.036 0.036 0 0 0 0 0.051l0.206 0.206a0.037 0.037 0 0 0 0.051 0m0.507 -0.363L0.422 0.939c-0.013 0.013 -0.031 0.021 -0.052 0.021s-0.038 -0.008 -0.052 -0.021L0.247 0.867a0.11 0.11 0 0 0 -0.155 -0.155l0 0 -0.071 -0.072c-0.013 -0.013 -0.021 -0.031 -0.021 -0.052s0.008 -0.038 0.021 -0.052L0.538 0.021C0.551 0.008 0.569 0 0.589 0s0.038 0.008 0.052 0.021l0.071 0.071a0.11 0.11 0 1 0 0.155 0.155l0 0 0.072 0.071c0.013 0.013 0.021 0.031 0.021 0.052s-0.008 0.038 -0.021 0.052z"/>
                        </svg>
                        Purcahse Tickets
                    </a>

                </div>
            </div>
            <div className="fight-poster-container">
                <h1 className="text-white text-3xl text-center">
                    FIGHTS
                </h1>

                <div className="flex flex-wrap justify-center justify-items-center">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="/posters/1.webp" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg "
                             src="/posters/2.webp" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="/posters/3.webp" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="/posters/5.webp" alt=""/>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default EventDetailsCard;
