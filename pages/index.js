import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import ParticleBackground from "../components/ParticleBackground";
import FadeInOnScroll from "../components/FadeInScroll";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const scrollButtonRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <ParticleBackground />

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>

        <FadeInOnScroll>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
            <h1 className="text-2xl text-bold">Work.</h1>

            <div className="mt-5 laptop:mt-10 flex flex-col gap-12 justify-center items-center w-full">
              {data.projects.map((project) => (
                <FadeInOnScroll key={project.id}>
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    details={project.details}
                    tags={project.tags}
                  />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* <FadeInOnScroll>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </FadeInOnScroll> */}

        <FadeInOnScroll>
          <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
            <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara}
            </p>
          </div>
        </FadeInOnScroll>

        {/* Scroll Down Prompt Button */}
        <div
          ref={scrollButtonRef}
          className="fixed left-1/2 transform -translate-x-1/2 bottom-5 z-50 flex items-center justify-center"
        >
          <button className=" cursor-none rounded-full bg-purple-200 bg-opacity-30 backdrop-blur-lg border border-white border-opacity-50 w-16 h-16 flex items-center justify-center transition hover:bg-opacity-50 animate-pulse">
            <span className="text-xl">↓</span>
          </button>
        </div>

        <FadeInOnScroll>
          <Footer />
        </FadeInOnScroll>
      </div>
    </div>
  );
}
