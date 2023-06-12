const steps = [
    'Apply for the Lumos Metaverse whitelist and mint your Lumos Metaverse NFT (ignore if already done)',
    'Join the Lumos Labs Discord Server.',
    'Go to the #buidl-crew channel and click on the "Join BUIDL Crew" button.',
    'Complete the BUIDL Crew application form.',
    'Await to be reviewed by the BUIDL Crew team.',
    'If you are accepted, you will be granted access to the BUIDL Crew community and all of the benefits that it offers.'

]

export default function Fold3() {
    return(
        <section className="bg-gradient-to-b from-lvoilet/10 to-lvoilet h-screen">
            <div className="text-5xl md:text-7xl text-lblue font-['Poppins'] mx-8 md:mx-16 font-bold mt-10 md:mt-0">
            How to join Lumos Metaverse BUIDL Crew?
            </div>
            <ul className="text-xl md:text-3xl mx-12 md:mx-44 my-5 text-white font-['Inter'] font-bold">
                {steps.map((reason) => (
                    <li className="hover:underline transition-all ease-in-out my-4">
                        • {reason}
                    </li>
                ))}
            </ul>
      </section>
    )
}