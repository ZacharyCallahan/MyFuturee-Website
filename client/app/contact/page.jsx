"use client";
import { useMediaQuery } from "@material-ui/core";
const page = () => {
    const isSmallScreen = useMediaQuery("(min-width: 640px)");
    return (
        <main className="bg-future-dark pb-24">
            <div className="h-screen flex flex-col items-center justify-center text-center text w-5/6 m-auto gap-12">
                <h1 className="text-gradient text-3xl sm:text-5xl md:text-7xl font-bold">
                    Contact Me
                </h1>
                <p className="text-white sm:text-2xl md:text-3xl">
                    "Quality is more important than quantity. One home run is
                    much better than two doubles." - Steve Jobs
                </p>
                <div class="flex gap-12 sm:gap-36 text-white">
                    <div class="github">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://github.com/ZacharyCallahan",
                                    "_blank"
                                )
                            }>
                            {isSmallScreen ? (
                                <i class="fa fa-brands fa-github fa-4x"></i>
                            ) : (
                                <i class="fa fa-brands fa-github fa-3x"></i>
                            )}
                        </button>
                    </div>
                    <div class="gmail">
                        <button
                            onClick={() =>
                                window.open(
                                    "mailto:zachcallahan90@gmail.com",
                                    "_blank"
                                )
                            }>
                            {isSmallScreen ? (
                                <i class="fa fa-regular fa-envelope-o fa-4x"></i>
                            ) : (
                                <i class="fa fa-regular fa-envelope-o fa-3x"></i>
                            )}
                        </button>
                    </div>
                    <div class="twitter">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/zachary-callahan-9a08b7254/",
                                    "_blank"
                                )
                            }>
                            {isSmallScreen ? (
                                <i class="fa fa-brands fa-linkedin-square fa-4x"></i>
                            ) : (
                                <i class="fa fa-brands fa-linkedin-square fa-3x"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
