import HeadingTitle from "@/components/partials/HeadingTitle";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function About() {
  return (
    <>
      <DefaultLayout pageTitle="About Me | Agung Prasetyo">
        <div>
          <section
            id="about-me"
            className="flex justify-between mb-2 px-6 py-6 lg:py-0 lg:p-0"
          >
            <div className="w-full lg:w-[70%]">
              <HeadingTitle text="About Me" />
              <h3
                id="name"
                className="text-teal-500 font-bold text-[20px] lg:text-2xl drop-shadow-xl py-0 lg:py-1"
              >
                Agung Prasetyo
              </h3>
              <div id="description" className="text-justify">
                <p className="my-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quod, dolor?
                </p>
                <p className="my-3 -mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto incidunt quas quo maxime deleniti explicabo maiores
                  nulla fugit magni et?
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center w-[30%] h-fit rounded-full">
              <img
                src="/images/me.webp"
                alt="Foto Agung"
                width={190}
                height={190}
                className="bg-teal-400 rounded-full shadow-lg"
              />
            </div>
          </section>
          <section id="education" className="mb-2 px-6 lg:p-0">
            <HeadingTitle text="Education" />
            {/* <div className="relative col-span-12 px-12 space-y-6 sm:col-span-9 mt-2">
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                            <ListOn 
                                title="University"
                                sub1="STIMIK Tunas Bangsa Banjarnegara"
                                sub2="Informatics"
                                date="2021 - Present" 
                            />
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                            <ListOn 
                                title="Senior High School"
                                sub1="SMA Muhammadiyah 1 Banjarnegara"
                                sub2="Matematic and Natural Science"
                                date="2018 - 2021" 
                            />
                        </div>
                        <div className="absolute -top-[17px] left-[9px] flex flex-wrap flex-col items-center w-fit">
                            <ListDot />
                            <ListDotLine />
                            <ListDot />
                        </div>
                    </div> */}
            {/* <ul class="steps steps-vertical">
                        <li class="step step-success mb-4">
                            <div className="flex flex-col text-left">
                                <ListOn 
                                    title="University"
                                    sub1="STIMIK Tunas Bangsa Banjarnegara"
                                    sub2="Informatics"
                                    date="2021 - Present" 
                                />
                            </div>
                        </li>
                        <li class="step step-success">
                            <div className="flex flex-col text-left">
                                <ListOn 
                                    title="Senior High School"
                                    sub1="SMA Muhammadiyah 1 Banjarnegara"
                                    sub2="Matematic and Natural Science"
                                    date="2018 - 2021" 
                                />
                            </div>
                        </li>
                    </ul> */}
            <section className="">
              <div className="container max-w-5xl py-2 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                  <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-500">
                        <h3 className="text-xl font-semibold tracki">
                          Senior High School
                        </h3>
                        <h5 className="font-semibold text-xl mt-1.5">
                          SMA Muhammadiyah 1 Banjarnegara
                        </h5>
                        <time className="text-xs tracki uppercase text-gray-400 mt-1">
                          2018 - 2021
                        </time>
                      </div>
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-500">
                        <h3 className="text-xl font-semibold tracki">
                          University
                        </h3>
                        <h5 className="font-semibold text-xl mt-1.5">
                          STIMIK Tunas Bangsa Banjarnegara
                        </h5>
                        <time className="text-xs tracki uppercase text-gray-400 mt-1">
                          2021 - PRESENT
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* <section id="work-experience" className="">
                    <HeadingTitle text="Work Experience" />
                </section> */}
          <section id="resume" className="mb-16 lg:mb2 px-6 lg:p-0">
            <HeadingTitle text="Resume" />
            <p className="mt-1">
              You can read my resume <a href="#">here</a>.
            </p>
          </section>
        </div>
      </DefaultLayout>
    </>
  );
}
