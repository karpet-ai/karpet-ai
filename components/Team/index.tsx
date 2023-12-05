import SectionTitle from "../Common/SectionTitle";

const Team = () => {
  return (
    <>
      <section id="team" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Team"
            paragraph="We are a complementary team with expertise in AI and architecture"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">

            <div className="w-full flex flex-col justify-center items-center">
              <div className="mb-10 flex h-[400px] w-[400px] items-center justify-center">
                <div
                  style={{
                    backgroundImage: `url(/images/team/niko.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '400px',
                    height: '400px'
                  }}
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Nikolay Nikolov
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                AI Specialist
              </p>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color max-w-md mx-auto text-center">
              Nikolay is an AI scientist and engineer with 6+ years of experience and has worked on various cutting-edge AI projects, including autonomous driving and academic research
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="mb-10 flex h-[400px] w-[400px] items-center justify-center">
                <div
                  style={{
                    backgroundImage: `url(/images/team/kremi.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '400px',
                    height: '400px'
                  }}
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Kremena Nikolova
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Architect
              </p>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color max-w-md mx-auto text-center">
                Kremi is an architect, 3D artist and project manager with 10 years of experience and has led the development of large scale commercial projects around Europe
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
