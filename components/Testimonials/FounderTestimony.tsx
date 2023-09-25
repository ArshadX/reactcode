import Image from "next/image";

export default function Testimony() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 dark:bg-black sm:py-32 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red),white)] opacity-20" /> */}
      <div className=" ring-g absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 shadow-xl shadow-white ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <h1 className=" bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-center font-sans text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            &ldquo;Irritated from web search!&rdquo;
          </h1>
          <blockquote className=" text-center text-xl font-semibold leading-8 text-white/80 sm:text-2xl sm:leading-9">
            <p>
              Everyone spend time in searching for solutions on the web but It takes time to find the solutions for your code bugs
              or sometimes we want build a feature that needed advance algorithms and you don&apos;t find exactly what you want on
              the web. I faced this problem too that&apos;s why I build this library to make development easy
            </p>
          </blockquote>
          <figcaption className="mt-10 flex flex-row items-start justify-center space-x-4">
            <Image
              className="h-20 w-auto rounded-full"
              src="/images/creater_picture.jpg"
              alt="creater picture"
              width={928}
              height={928}
            />
            <div className="mt-4 flex flex-col justify-start ">
              <div className="text-lg font-semibold text-white">Mohammad Arshad</div>
              <div className="text-white/80">Creater of React Codes</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
