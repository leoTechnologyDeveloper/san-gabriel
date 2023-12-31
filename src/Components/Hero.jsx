import namePrincipal from "/src/assets/san_gabriel-removebg-preview 1.png";

const Hero = () => {
  return (
    <div
      className={`w-full h-screen bg-blue-500 flex flex-col gap-5 items-center justify-center
       bg-backHero1 text-center bg-center md:bg-top bg-no-repeat bg-cover font-manrope  pt-24`}
      id="hero"
    >
      <div className="flex flex-col w-screen justify-center">
        <picture className="flex justify-center px-5">
          <img
            src={namePrincipal}
            alt="imagen nombre san gabriel"
            className="w-auto md:w-2/6"
          />
        </picture>
        <p className="text-white-white_figma mt-4 md:text-4xl font-bold">
          Fábrica de papel Higiénico
        </p>
      </div>
    </div>
  );
};

export default Hero;
