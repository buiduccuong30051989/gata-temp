import { EventRow } from "./eventRow";

export const RecentEvents = () => {
  return (
    <div className="px-6 py-4 text-sm bg-white rounded-lg mt-8">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium">Recent events</h5>
        {/**/}
      </div>
      <div className="py-2">
        <table className="w-full text-left">
          <thead className="text-gray-500">
            <tr className="h-10">
              <th className="pr-4 font-light">Server</th>
              <th className="pr-4 font-light">Event</th>
              <th className="pr-4 font-light">When</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((index) => (
                <EventRow key={index} />
              ))}
          </tbody>
        </table>
      </div>
      {/**/}
    </div>
  );
};
