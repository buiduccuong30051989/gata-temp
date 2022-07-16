import { DeploymentRow } from "./deploymentRow";

export const DeploymentTable = ({ openModalEdit }) => {
  return (
    <div className="px-6 py-4 text-sm bg-white rounded-lg mt-8">
      <div className="py-2">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-gray-500">
            <tr className="h-10">
              <th className="pr-4 font-light">REPO URL</th>
              <th className="pr-4 font-light">BRANCH </th>
              <th className="pr-4 font-light">VISIBILITY </th>
              <th className="pr-4 font-light">DESTINATION FOLDER </th>
              <th> </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <DeploymentRow openModalEdit={openModalEdit} key={item} />
            ))}
          </tbody>
        </table>
      </div>
      {/**/}
    </div>
  );
};
