import Image from "next/image";
import prison from "../../public/prisonevolved.png";
import learnspigot from "../../public/learn-spigot.png";
import zombieArena from "../../public/zombiearena.png";

const page = () => {
    return (
        <main className="bg-future-dark pb-24">
            <div className="h-screen flex flex-col items-center justify-center text-center text w-5/6 m-auto gap-5">
                <h1 className="text-gradient text-3xl sm:text-5xl md:text-7xl font-bold">
                    Portfolio
                </h1>
                <p className="text-white sm:text-2xl md:text-3xl">
                    “Whatever your life's work is, do it well. A man should do
                    his job so well that the living, the dead, and the unborn
                    could do it no better.” - Martin Luther King, Jr
                </p>
            </div>
            <div className="flex flex-col items-center w-5/6 m-auto gap-24 text-center">
                <div className="w-full flex flex-col items-center gap-12">
                    <h2 className="text-gradient text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold">
                        PrisonEvolved
                    </h2>
                    <Image
                        draggable="false"
                        src={prison}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-md "
                    />
                    <p className="text-white text-lg sm:text-xl md:text-2xl xl:text-4xl">
                        PrisonEvolved stands as a significant milestone in my journey as a developer. Over a span of six years, my best friend and I embarked on this ambitious project, traversing through numerous iterations of the server. Countless hours were dedicated to research and development, with me primarily responsible for the backend infrastructure while also contributing to certain aspects of the frontend.
<br />
<br />
Throughout this project, we encountered a myriad of challenges and triumphs, which significantly expanded our knowledge and skills. It was the driving force behind my initial interest in coding. Creating a Minecraft server without coding is a daunting task, but we managed to accomplish over 90% of it through our resourcefulness and problem-solving abilities. We transformed our wildest dreams into reality by meticulously deciphering how to merge the functionalities of different plugins.
<br />
<br />
However, this approach had its drawbacks, notably impacting the server's performance and imposing limitations on scalability. Eventually, we recognized this issue and made the difficult decision to shut down the server. The sheer scale of the project proved overwhelming for just two individuals. With one person shouldering the entire coding responsibility while the other focused on idea generation and player management, the workload became unmanageable.
<br />
<br />
Nonetheless, PrisonEvolved remains my favorite project to date, primarily because it presented us with countless challenges and invaluable lessons. It served as a catalyst for my professional journey as a Software Engineer, propelling me toward a fulfilling career in the field.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center gap-12">
                    <h2 className="text-gradient text-2xl sm:text-3xl md:text-5xl  font-bold">
                        LearnSpigot
                    </h2>
                    <Image
                        draggable="false"
                        src={learnspigot}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-md "
                    />
                    <p className="text-white text-lg sm:text-xl md:text-2xl ">
                        LearnSpigot has played a pivotal role in shaping my current position in the field of programming. It stands as one of the largest courses dedicated to teaching the Spigot API for Minecraft Development, boasting a growing student count that is soon to surpass 10,000. Complementing this impressive statistic is a vibrant Discord server, comprising over 5,000 students.
<br />
<br />
I am delighted to announce that I have been bestowed with the esteemed support role within the LearnSpigot Discord server, an invaluable position surrounded by knowledgeable individuals. As part of the support team, our primary objective is to actively engage with fellow peers, providing assistance and guidance on various development challenges they encounter. This not only expands our own knowledge base miraculously but also grants us invaluable experience in unfamiliar territories. Moreover, it equips us with the essential skills necessary to thrive in a team-oriented environment.
<br />
<br />
I am genuinely thrilled to be an integral part of this exceptional community that Stephen, the owner, has meticulously cultivated. My aspiration is to remain an active and dedicated member, continuously contributing to the growth and success of this remarkable community. As a volunteer, I am committed to offering my assistance and teaching expertise, ensuring that aspiring coders receive the guidance they need to excel in their programming journey.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center gap-12">
                    <h2 className="text-gradient text-2xl sm:text-3xl md:text-5xl font-bold">
                        ZombieArena Plugin
                    </h2>
                    <Image
                        draggable="false"
                        src={zombieArena}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-md "
                    />
                    <p className="text-white text-lg sm:text-xl md:text-2xl ">
                        The ZombieArena project stands as a significant achievement and a source of great pride for me. It has been an intensive endeavor, still ongoing as a work in progress. With over 9000 lines of code distributed across more than 60 classes, this project marks my initial foray into the programming realm. While the code may not possess the utmost elegance, it has been instrumental in granting me a comprehensive understanding of building something from scratch.
<br />
<br />
Throughout the development process, I encountered numerous challenges in the form of bugs and issues. Fortunately, the LearnSpigot community provided invaluable resources and knowledge, enabling me to navigate in the right direction. The wealth of experience gained has left me contemplating a complete recoding of the entire project, driven by a desire to leverage my newfound expertise. Such an endeavor would undoubtedly yield a significantly improved project, enhancing both functionality and code efficiency. Perhaps, in due course, I will embark on this endeavor.
<br />
<br />
If you are interested in reviewing the source code for this project, 
                        <a
                            className="contact"
                            href="https://github.com/FuturePinger/ZombieArena"
                            target="_blank">
                            Click Me
                        </a>
                        !
                    </p>
                </div>
            </div>
        </main>
    );
};

export default page;
