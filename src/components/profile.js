import { FaGithub, FaTwitter } from "react-icons/fa"

export default function ProfileCard(props){
    return(

<div class="w-full max-w-sm  border  rounded-lg shadow border-lblue">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.image} alt={props.name}/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.description}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href={props.github} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-lvoilet bg-lblue rounded-lg "><FaGithub className="mr-2"/> Github</a>
            <a href={props.twitter} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-lvoilet bg-lblue rounded-lg "><FaTwitter className="mr-2"/> Twitter</a>
        </div>
    </div>
</div>

    )

}