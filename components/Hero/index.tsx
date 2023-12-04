import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative min-h-screen w-full z-10 overflow-hidden bg-white"
      >
        <div className="relative min-h-screen w-full bg-[url('/images/hero/hero-5-1920.jpg')] bg-cover bg-no-repeat bg-bottom pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
          <div className="absolute inset-0 dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30"></div>
          <div className="relative container z-1">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-dark dark:text-gray-light sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Transforming architectural rendering through AI
                  </h1>
                  <p className="font-semibold dark:text-stroke mb-12 text-base !leading-relaxed text-stroke-dark sm:text-lg md:text-xl">
                  {/* <p className="font-semibold dark:text-gray-white mb-12 text-base !leading-relaxed text-gray-black sm:text-lg md:text-xl"> */}
                    Generate professional high-resolution architectural renders from your 3D model in seconds
                  </p>
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                      href="/signup"
                      className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                      // className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
