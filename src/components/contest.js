export default function ContestCard(props) {
  return (
    <div className={props.className}>
      <div className="border border-lblue rounded-xl text-white h-min shadow-xl p-4 w-60 md:w-96">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">{props.title}</div>
            <div className="text-sm">Deadline: {props.date}</div>
          </div>
        </div>
        <div className="text-sm mt-2">{props.description}</div>
        {/* Rewards */}
        <div className="text-xl mt-2">Rewards:</div>
        <div className="">
          {props.rewards.map((reward) => (
            <div className="flex flex-col">
              <div className="text-sm">{reward.title}: {reward.description}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-2 align-bottom">
          <a href={props.link}>
            <button className="bg-lblue text-white rounded-xl px-4 py-2">
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
