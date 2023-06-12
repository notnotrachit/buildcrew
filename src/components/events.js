export default function EventCard(props){
    return (
        <div className={props.className}>
        <div className="border border-lblue rounded-xl text-white h-min shadow-xl p-4 w-60 md:w-96">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-4xl font-bold">{props.title}</div>
                <div className="text-sm">Location: {props.location}</div>
                <div className="text-sm">Time: {props.time}</div>
              <div className="text-sm">Date: {props.date}</div>
            </div>
          </div>
          <div className="text-sm mt-2">{props.description}</div>

          <div className="text-2xl font-bold">Speakers:</div>
           {props.speakers.map((speaker) => (
            <div className="flex flex-col">
                <div className="text-sm">{speaker.name}: {speaker.description}</div>
            </div>
            ))}


          <div className="flex flex-row justify-center mt-2 align-bottom">
            <a href={props.link}>
              <button className="bg-lblue text-white rounded-xl px-4 py-2">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>    )
}