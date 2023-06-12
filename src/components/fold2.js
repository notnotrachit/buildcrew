
const why_reasons = [
    "Special invite-only access to developer meetups & events",
    "Exciting monthly contests with equally exciting prizes",
    "Early access to all the latest Lumos Labs Product updates",
    "Special Incentives from the Lumos Metaverse for contributions",
    "Premium job offers from our partners",
    "Mentorship, guidance, and support from top industry experts"
]

export default function Fold2() {
    return(
        <section className="bg-gradient-to-b from-lvoilet to-lvoilet/10 h-screen">
            <div className="text-5xl md:text-8xl text-lblue font-['Poppins'] mx-8 md:mx-16 font-bold">
            Why BUIDL Crew?
            </div>
            <p className="text-xl md:text-3xl mx-8 lg:mx-32 my-5 text-white font-['Inter'] font-bold">
            The BUIDL Crew is a dedicated space for developers that offers a wide range of opportunities for developers to learn, grow, and build. <br/><br/>
            Here are just a few of the fun-filled activities that are in store for you!
            </p>
            <ul className="text-xl md:text-3xl mx-12 md:mx-44 my-5 text-white font-['Inter'] font-bold">
                {why_reasons.map((reason) => (
                    <li className="hover:underline transition-all ease-in-out my-4 hover:scale-110 md:hover:mx-24">
                        &gt; {reason}
                    </li>
                ))}
            </ul>
      </section>
    )
}