import { EventRow } from "./eventRow";

export const RecentEvents = () => {
  return (
    <div className="px-6 py-4 text-sm bg-white rounded-lg mt-8">
      <div className="py-2">
        <table className="w-full text-left text-sm text-gray-500">
          <thead>
            <tr className="h-10">
              <th className="pr-0 font-normal">SITE NAME </th>
              <th className="pr-4 font-normal">TIME TO EXPIRE </th>
              <th className="pr-4 font-normal">DISK USAGE </th>
              <th className="pr-4 font-normal"> TAGS</th>
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
