"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { dancingScript, sansSerif } from "./font";
import { cn } from "./utils";
import Typewriter from "typewriter-effect";
import Image1 from "../../public/event.png";
import Image2 from "../../public/2.gif";
import ImageCol1 from "../../public/col_1.jpg";
import ImageCol1_1 from "../../public/col_1_1.jpg";
import ImageCol1_2 from "../../public/col_1_2.jpg";
import ImageCol1_3 from "../../public/col_1_3.jpg";
import ImageCol2 from "../../public/col_2.jpg";
import ImageCol2_1 from "../../public/col_2_1.jpg";
import ImageCol2_2 from "../../public/col_2_2.jpg";
import ImageCol2_3 from "../../public/col_2_3.jpg";
import ImageCol3 from "../../public/col_3.jpg";
import ImageCol3_1 from "../../public/col_3_1.jpg";
import ImageCol3_2 from "../../public/col_3_2.jpg";
import ImageCol3_3 from "../../public/col_3_3.jpg";
import ImageCol4 from "../../public/col_4.jpg";
import ImageCol4_1 from "../../public/col_4_1.jpg";
import ImageCol4_2 from "../../public/col_4_2.jpg";
import ImageCol4_3 from "../../public/col_4_3.jpg";
import ImageCol5 from "../../public/col_5.jpg";
import ImageCol5_1 from "../../public/col_5_1.jpg";
import ImageCol5_2 from "../../public/col_5_2.jpg";
import ImageCol5_3 from "../../public/col_5_3.jpg";
import ImageCol6 from "../../public/col_6.jpg";
import ImageCol6_1 from "../../public/col_6_1.jpg";
import ImageCol6_2 from "../../public/col_6_2.jpg";
import ImageCol6_3 from "../../public/col_6_4.jpg";
import Gery from "../../public/finvite2.jpg";
import Mahita from "../../public/finvite2.jpg";
import Separator from "../../public/separator_1.png";
import { Toaster } from "react-hot-toast";
import Submission from "./submission";
import { notFound, useParams } from "next/navigation";
import AnimateOnScroll from "./animate";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export default function Home() {
  const { id } = useParams();
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [name, setName] = useState<string | null | undefined>(undefined);
  const [image, setImage] = useState<StaticImport | null>(null);

  useEffect(() => {
    const width = window.innerWidth <= 450 ? window.innerWidth : 450;
    setVideoWidth(width);
    setVideoHeight((width / 1280) * 720);
  }, []);

  useEffect(() => {
    fetch("/api/" + id)
      .then((response) => response.json())
      .then((data) => setName(data.name));
  }, [id]);

  if (!videoWidth) return null;

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const start = new Date();
  const end = new Date("2024-10-25");

  const days = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));

  return (
    <>
      {isLoadingVideo && <p>Loading...</p>}
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-start bg-white max-w-[450px] relative",
          isLoadingVideo ? "hidden" : "visible"
        )}
      >
        {image && (
          <ImagePreview
            src={image}
            width={videoWidth}
            onClose={() => setImage(null)}
          />
        )}
        <Toaster />
        <div className="relative">
          <ReactPlayer
            url={"/hero.mp4"}
            controls={false}
            width={videoWidth}
            height={videoHeight}
            playing
            muted
            loop
            playsinline={true}
            onReady={() => setIsLoadingVideo(false)}
          />
          <div
            style={{
              height: videoHeight,
            }}
            className="flex flex-col items-center justify-center absolute top-0 text-white w-full z-10"
          >
            <p className={cn(dancingScript.className)}>The Wedding of</p>
            <p className={cn(dancingScript.className, "text-4xl")}>
              Benedict & Gloria
            </p>
            <p className="text-sm">04.05.2024
</p>
          </div>
        </div>
        <AnimateOnScroll>
          <div className="flex items-center justify-center pt-2">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center p-4 py-5 pt-3 space-y-4">
            <p className="text-center text-4xl text-black">
              <Typewriter
                options={{
                  deleteSpeed: 1000000,
                  strings: [`Hi...`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="text-center leading-5 text-black">
            The family of the late Mr. George Joseph Abeiky Amissah
cordially invites you to join us as we honor and celebrate the life of our beloved.
Your presence and support during this time of sorrow would mean the world to us.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <Image
              src={Gery}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-gray-700">Benedict Ekow Awortwe</p>
              <div className="border-t border-black font-light text-gray-700">
                son of 
              </div>
              <p className="text-black">
                Mr.Ekow Awortwe <br />
      
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-end text-black">
                Gloria Asantewaa Boateng
              </p>
              <div className="border-t border-black font-light text-gray-700 text-end">
                daughter of
              </div>
              <p className="text-end text-black">
                Mr. John Boateng Asante (Elder) <br />
      
              </p>
            </div>
            <Image
              src={Mahita}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex items-center justify-center py-5 relative w-full">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "text-2xl absolute h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50"
              )}
            >
              <p className="text-white text-4xl">Event Details</p>
            </div>
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative flex items-center justify-center py-5 flex-col w-full">
            <div
              style={{
                backgroundImage: "url(./bg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 0.2,
              }}
              className="absolute h-full w-full"
            ></div>
            <p className="text-center text-black px-4">
              Join us for the pre-burial mass at
              <br />
              <span className="font-bold text-gray-700">
              Osu St. Peter's Catholic Church
              </span>
              <br />
              — on — <br />{" "}
              <span className="font-bold text-gray-700">
               Friday, October 25, 2024
              </span>{" "}
              <br />{" "}
              <span className="font-bold text-gray-700">
                7:30am
              </span><br></br>
              <br />
              <hr></hr>
              <span className="font-bold text-gray-700">
              <strong>Burial service:</strong> Friday, October 25, 2024 <strong> 9:00am </strong>
              </span>
              <hr></hr>
              <span className="font-bold text-gray-700">
                <br />
              <strong>Thanksgiving service</strong> Sunday, October 27, 2024 <strong> 8:30am </strong>
              </span>
              <br />
              <br />
            </p>



            <p className="text-center text-black px-4">
              Contact
              <br />
              ——— <br />{" "}
              <span className="font-bold text-gray-700">
              Lawrence-0269851189 || Dr.Winnifred Owusu-0243251286 
              </span>{" "}
              <br />{" "}
              <span className="font-bold text-gray-700">
              Christabel-0243458359 || Dr.Mike Kwaffo-0246515322
              </span><br></br>
              <br />
              <br />
              <br />
            </p>












            <div className="relative h-[200px] w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.098260468578!2d-0.18020109999999998!3d5.5524498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf907b21e9dccf%3A0xa4c319ff33a683d2!2sSt.%20Peter&#39;s%20Catholic%20Church!5e0!3m2!1sen!2sgh!4v1729444488287!5m2!1sen!2sgh"
                width="450"
                height="200"
                style={{
                  border: 0,
                  zIndex: 1000,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center justify-center py-5 relative w-full">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>
        {/* <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "flex flex-row text-2xl absolute h-full w-full items-center justify-end bg-black bg-opacity-20 z-50 pr-[10%]"
              )}
            >
              <p
                className={cn(
                  dancingScript.className,
                  "text-white text-5xl text-end leading-9 opacity-90"
                )}
              >
                Will we <br /> see you in <br /> {days} days?
              </p>
            </div>
            <Image src={Image2} alt="Picture of the author" />
          </div>
        </AnimateOnScroll> */}
    
       
       
       
        

        {/* <p className={cn(dancingScript.className, "py-5 text-black")}>
          Made with love, by Benedict & Gloria
        </p> */}
      </main>
    </>
  );
}

function ImagePreview(props: {
  src: StaticImport;
  width: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed top-0 h-screen w-screen flex items-center justify-center z-50"
      onClick={props.onClose}
    >
      <div className="w-[450px] z-100 h-full">
        <div className="w-full h-full p-4 z-100 items-center justify-center flex bg-black bg-opacity-50">
          <div className="drop-shadow-md">
            <Image
              src={props.src}
              width={props.width - 40}
              alt="separator"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
