"use client";
import Image from "next/image";
import hero_img from "../assets/hero_img.png";
import report_img from "../assets/report_img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  //making opacity of heroimg 0-1
  useEffect(() => {
    gsap.fromTo(
      ".heroimg",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3",
        scrollTrigger: {
          trigger: ".hero_text1",
          start: "top 40%",
          end: "bottom top",
        },
      }
    );
  }, []);
  //making opacity of robotimg 0-1
  useEffect(() => {
    gsap.fromTo(
      ".reportimg",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3",
        scrollTrigger: {
          trigger: ".hero_text",
          start: "top 60%",
         
          end: "bottom top",
        },
      }
    );
  }, []);
  return (
    <div className="overflow-hidden min-h-[100vh] homepage">
      <div className="w-full min-h-[100vh] md:h-[100vh] pt-[65px] flex md:flex-row flex-col place-content-center ">
        <div className="md:w-1/2 w-full h-full flex justify-center">
          <div className=" w-[80%] backdrop-blur h-fit place-self-center text-black leading-none hero_text1">
            <div className="text-[40px] md:text-[60px] font-light bigger leading-[43px] md:leading-[65px] mb-6">
              Combat Hair Loss with Confidence.
            </div>
            <div className=" text-2xl mb-10">
              Empowering You with AI for Healthier Hair
            </div>

            <div className="ml-1">
              <button
                onClick={() => router.push("/chat")}
                className="relative px-6 py-3 font-bold text-black group w-fit flex"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[rgb(255,214,111)] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative flex gap-3 text-xl">
                  <span>Chat with AI</span>
                  <FaArrowRightLong className="my-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center">
          <div className="w-2/3 overflow-hidden h-fit flex place-self-center animate-move-up-down">
            <Image
              src={hero_img}
              className="mt-3 mx-3 w-[calc(100%-12px*2)] heroimg "
              alt="Pet Image"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] md:h-[100vh] pt-[65px] flex md:flex-row flex-col place-content-center">
        <div className="md:w-1/2 w-full h-full flex justify-center ">
          <div className="w-2/3 overflow-hidden h-fit flex place-self-center animate-move-up-down">
            <Image
              src={report_img}
              className="mt-3 mx-3 w-[calc(100%-12px*2)] reportimg"
              alt="Pet Image"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center box1">
          <div className=" w-[80%] backdrop-blur h-fit place-self-center text-black leading-none hero_text">
            <div className="text-[40px] md:text-[60px] font-light bigger leading-[43px] md:leading-[65px] mb-6">
              Analyse Your Hair Health by AI
            </div>
            <div className=" text-2xl mb-10">Scalp Care Made Easy</div>

            <div className="ml-1">
              <button
                onClick={() => router.push("/report")}
                className="relative px-6 py-3 font-bold text-black group w-fit flex"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[rgb(255,214,111)] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative flex gap-3 text-xl">
                  <span>Get Report by AI</span>
                  <FaArrowRightLong className="my-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      
    <div className="flex flex-col items-center px-16 py-20 bg-black max-md:px-5">
      <div className="mt-5 text-4xl tracking-widest leading-10 text-white max-md:mt-10 max-md:max-w-full">
        The values that hold us
      </div>
      <div className="mt-5 text-4xl tracking-widest text-white max-md:max-w-full">
        true and to account.......
      </div>
      <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-6f49c9201d83171752a6b15de316a54b/' 
       width='450px' 
       height='330px'
       title='Interactive 3D model of a robot following cursor for footer'
       className="relative top-[30px]">
      </iframe>
      <div className="absolute self-stretch max-md:max-w-full bottom-[410px] pl-[60px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start pt-6 pr-2 pb-10 pl-11 w-full text-sm font-bold tracking-wide text-white bg-black rounded-[15px] border border-white border-solid max-md:pl-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-2.5 text-xl tracking-wider whitespace-nowrap">
                <img alt="a"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b70091a9134661ab67edec1d569b7a47c25657e8b9ad70e37c4c5de70d1a1bf?"
                  className="shrink-0 aspect-[1.33] w-[53px]"
                />
                <div className="my-auto">Simplicity</div>
              </div>
              <div className="mt-6">
                Simplicity guides our designs, making hair health{" "}
              </div>
              <div className="mt-3">solutions accessible to all.</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-6 pb-10 mx-auto w-full text-sm font-bold tracking-wide text-white bg-black rounded-[15px] border border-white border-solid max-md:px-5 max-md:mt-8">
              <div className="flex gap-2.5 text-xl tracking-wider">
                <img alt="a"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a774f83ebbd743718c316ff69329a93d9f35e1e32f7fe760fed95a952c752dc9?"
                  className="shrink-0 aspect-[1.33] w-[53px]"
                />
                <div className="flex-auto my-auto">Social Good</div>
              </div>
              <div className="mt-6">
                We leverage AI for the betterment of hair health
              </div>
              <div className="mt-2.5">Worldwide</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-11 pt-6 pb-10 w-full text-sm font-bold tracking-wide leading-4 text-white bg-black rounded-[15px] border border-white border-solid max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-2.5 self-start text-xl tracking-wider whitespace-nowrap">
                <img alt="a"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30867af476b85b568696d24a92426ebac0450ef1701fdd46e3ee7e59771f2c9?"
                  className="shrink-0 aspect-[1.33] w-[53px]"
                />
                <div className="my-auto">Trust</div>
              </div>
              <div className="mt-5">Our commitment to transparency and</div>
              <div className="mt-2.5">
                reliability earns your trust every step of the way.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[200px] text-lg font-bold tracking-wider text-white max-md:mt-10">
        Contact Us{" "}
      </div>
      <div className="flex gap-5 justify-between mt-8">
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af831f27e7e45c73cf9190a73fec9a6938f4dd6fa889ac6e15c2f4d442894c87?"
          className="shrink-0 aspect-square w-[30px]"
        />
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbaddc98d9b8fa7ac9b9490bf60702ce1e8cb7a00259dc2680b3dc82ee39e08a?"
          className="shrink-0 aspect-square w-[30px]"
        />
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0d704d88294d1e140963379bcfbd822381ef10c0baf7e380e9600e65949acd?"
          className="shrink-0 aspect-square w-[30px]"
        />
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cdf1224954deee0863f6704c606685a98428bff823e94b62a88165d31c518c?"
          className="shrink-0 aspect-square w-[30px]"
        />
      </div>
      <div className="flex gap-1 mt-9 text-sm font-bold tracking-wide text-white whitespace-nowrap">
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6120c402d28871994037ab40e07d8c7b550311f25a213f8666489996a3413a36?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">2024</div>
      </div>
      <div className="flex gap-2 mt-8 text-sm font-bold tracking-wide text-white">
        <div className="grow my-auto">Made By AlgoAvengers With</div>
        <img alt="a"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9db38fdbd11dbfe512962e1ac06afecfc864181c43b54890da3dfc428debcef?"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
    </div>
  
    </div>
  );
}
