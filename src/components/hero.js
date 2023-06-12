import { FaDiscord } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-lvoilet/10 to-lvoilet h-screen">
      <div className="flex justify-center">
        <img src="/build_crew-01.png" alt="buildcrew logo" className="" />
      </div>
      <div className="text-center text-5xl text-lblue font-['Poppins'] my-5 font-bold">For BUIDLers everywhere<span className="text-white">!</span></div>
      <div className="text-white text-3xl font-bold text-center my-16 justify-center flex">
      <p className="w-3/4 md:w-1/2 ">The BUIDL Crew by Lumos Labs is an all-exclusive community for Lumos Metaverse NFT holders. Get ready to reap the rewards of a true BUIDLer! 
      </p>
      
      </div>

        <button className="btn">
          <FaDiscord />  Join Discord
        </button>

    </section>
  );
}
