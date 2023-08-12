import Image from "next/image";
import Link from "next/link";
import certificate from "@/public/images/About us/diploma.png";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image src={certificate} alt="about image" fill />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Are you looking for a Truck Drivers Jobs?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Get yourself a Professional Truck Driver Certificate and get
                  recruited faster
                </p>
              </div>

              <div className="mb-1">
                <div className="my-4">
                  <Link
                    href="#"
                    className="rounded-md bg-black/80 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/50 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
