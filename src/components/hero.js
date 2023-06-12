import { FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-lvoilet/10 to-lvoilet h-screen">
      <div className="flex justify-center">
        <img src="/build_crew-01.png" alt="buildcrew logo" className="" />
      </div>
      <div className="text-center text-5xl text-lblue font-['Poppins'] my-5 font-bold">
        For BUIDLers everywhere<span className="text-white">!</span>
      </div>
      <div className="text-white text-3xl font-bold text-center my-16 justify-center flex">
        <p className="w-3/4 md:w-1/2 ">
          The BUIDL Crew by Lumos Labs is an all-exclusive community for Lumos
          Metaverse NFT holders. Get ready to reap the rewards of a true
          BUIDLer!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 font-['Inter'] font-bold">
        <a href="https://discord.gg/SGPG8PqkHW">
          <button className="bg-lblue text-lvoilet text-3xl flex py-2 px-4 gap-2 rounded-xl hover:scale-110 transition-all ease-in-out shadow-lg shadow-white">
          <FaDiscord size={'2rem'} className="mt-0.5"/> Join Discord
          </button>
        </a>
        <a href="https://forms.lumoslabs.co/whitelist">
          <button className="bg-lblue text-lvoilet text-3xl flex py-2 px-4 gap-2 rounded-xl hover:scale-110 transition-all ease-in-out shadow-lg shadow-white">
          Join the Whitelist
          </button>
        </a>
      </div>
    </section>
  );
}
