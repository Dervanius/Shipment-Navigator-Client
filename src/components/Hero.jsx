const Hero = ({
  title = "Search the Shipments Like a Pro",
  subtitle = "Everything You Always Wanted to Know About Shipments - But Were Afraid to Ask",
}) => {
  return (
    <>
      <section className="bg-red-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-2xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;