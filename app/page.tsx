// import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <div className="text-center text-black">
        <div className="showcase-padding object-center items-center justify-center content-center">
          {/*Start of Description*/}

          <h2 className="section-titles font-bold text-3xl">What is SystemManager?</h2>
          <p className="font-light">SystemManager is a software solution to monitor and manage your
            dedicated servers, VPSes. SystemManager will notify you when errors and warnings happens on
            these machines.</p>
          <p className="font-light">SystemManager, like every other monitoring tool, will also check if
            these machines are down or not and will report to you if that ever happens.</p>
        </div>
        {/*Start of why systemmanager*/}
        <div className="showcase showcase-padding">
          <h2 className="font-bold text-3xl text-white">Why SystemManager?</h2>
          <p className="font-light text-white">Why you should choose for SystemManager</p>
          <br/>

          {/*<HighlightedFeatures/>*/}

        </div>
        {/*A few Screenshots*/}
        <div className="showcase-padding">
          <h2 className="section-titles font-bold text-3xl">Screenshots</h2>
          <p className="font-light ">Screenshots of the WebPanel built by us</p>
          {/*<div className="container">*/}
          <p className="font-light text-xl mt-5">The Webpanel is still a Work In Progress.</p>
          {/*<SystemManagerShowcaseCarousel/>*/}
          {/*</div>*/}
        </div>
        {/*Get Started and more thingies*/}
        <div className="showcase showcase-padding text-white">
          <h2 className="text-3xl font-bold">Ready to manage your systems?</h2>
          <p className="font-light pb-4">Get Started with SystemManager</p>
          <div className="p-4 flex flex-wrap justify-center w-full">
            {/*<Link title="Go to the demo" to="/demo"*/}
            {/*      className="font-light bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Demo</Link>*/}
            <div className={"mb-5 lg:mb-0"}>
              <a title="Go to the documentation"
                 href="https://docs.systemmanager.io/core/getting_started.html"
                 className=" bg-transparent top-buttons whitespace-no-wrap font-light py-2 px-4 rounded border sm:rounded-r-none text-2xl hover:border-transparent">Documentation</a>
            </div>
            <div>
              <a title="About the project" href="https://docs.systemmanager.io/project/about.html"
                 className=" bg-transparent top-buttons whitespace-no-wrap font-light py-2 px-4 rounded border sm:border-l-0 sm:rounded-l-none text-2xl hover:border-transparent">About
                this project</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
