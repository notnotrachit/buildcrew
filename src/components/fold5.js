import ProfileCard from "./profile"

const devs = [
    {
        'name': "Dev 1",
        'description': "Full stack developer",
        'image': "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        'github': "https://github.com",
        'twitter': "https://twitter.com",
    },
    {
        'name': "Dev 2",
        'description': "Frontend developer",
        'image': "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        'github': "https://github.com",
        'twitter': "https://twitter.com",
    },
    {
        'name': "Dev 3",
        'description': "Backend developer",
        'image': "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        'github': "https://github.com",
        'twitter': "https://twitter.com",
    },
    {
        'name': "Dev 4",
        'description': "Full stack developer",
        'image': "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        'github': "https://github.com",
        'twitter': "https://twitter.com",
    },
]

export default function Fold3() {
    return(
        <section className="bg-gradient-to-b from-lvoilet/10 to-lvoilet  min-h-screen">
            <div className="text-5xl md:text-7xl text-lblue font-['Poppins'] mx-8 md:mx-16 font-bold mt-24">
            BUIDL Crew Community Showcase
            </div>
            <div className="text-xl md:text-3xl mx-12 md:mx-32 my-5 text-white font-['Inter'] font-bold">
            Ever heard of "unsung heroes”? You probably won’t at the BUIDL Crew. Take a look at exceptional developers who are BUIDLing awesome Web3 applications. 
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                {devs.map((dev) => (
                    <ProfileCard name={dev.name} description={dev.description} image={dev.image} github={dev.github} twitter={dev.twitter}/>
                ))}
            </div>

      </section>
    )
}