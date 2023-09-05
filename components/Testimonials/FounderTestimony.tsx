import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

export default function Testimony() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 dark:bg-black sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="shadow-indigo-600/10 ring-indigo-50 absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl ring-1 dark:bg-red sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <h1 className="text-center font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            "Irritated from web search!"
          </h1>
          <blockquote className=" text-center text-xl font-semibold leading-8 text-white/80 sm:text-2xl sm:leading-9">
            <p>
              Everyone spend time in searching for solutions on the web but It takes time to find the solutions for your code bugs
              or sometimes we want build a feature that needed advance algorithms and you don't find exactly what you want on the
              web. I faced this problem too that's why I build this library to make development easy
            </p>
          </blockquote>
          <figcaption className="mt-10 flex flex-row items-start justify-center space-x-4">
            <Image
              className="h-20 w-auto rounded-full"
              src="/images/creater_picture.jpg"
              alt="creater picture"
              width={10}
              height={10}
            />
            <div className="mt-4 flex flex-col justify-start ">
              <div className="text-lg font-semibold text-white">Mohammad Arshad</div>
              <div className=" text-white/80">Creater of React Codes</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
