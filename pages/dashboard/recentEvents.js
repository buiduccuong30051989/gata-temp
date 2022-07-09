import { EventRow } from "./eventRow";

export const RecentEvents = () => {
  return (
    <div className="px-6 py-4 text-sm bg-white rounded-lg mt-8">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-normal">All sites</h5>
      </div>
      <div className="py-2">
        <table className="w-full text-left">
          <thead className="text-gray-500">
            <tr className="h-10">
              <th />
              <th className="pr-4 font-light">NAME </th>
              <th className="pr-4 font-light">TIME TO EXPIRE </th>
              <th className="pr-4 font-light">DISK USAGE </th>
              <th className="pr-4 font-light"> TAGS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <EventRow key={item} />
            ))}
          </tbody>
        </table>
      </div>
      {/**/}
    </div>
  );
};
