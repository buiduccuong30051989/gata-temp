import { PrivateRow } from "./privateRows";

export const PrivateTab = ({ openEdit }) => {
  return (
    <div className="px-6 py-4 text-sm bg-white rounded-lg mt-8">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-normal">All Private Templates</h5>
      </div>
      <div className="py-2">
        <table className="w-full text-left">
          <thead className="text-gray-500">
            <tr className="h-10">
              <th className="pr-4 font-light">TEMPLATE NAME </th>
              <th className="pr-4 font-light">STATUS </th>
              <th className="pr-4 font-light">LAST UPDATED </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <PrivateRow openEdit={openEdit} key={item} />
            ))}
          </tbody>
        </table>
      </div>
      {/**/}
    </div>
  );
};
