import { Subsubtitle } from "@/app/components/titles";
import { GoNumber } from "react-icons/go";
import { LiaMicroscopeSolid } from "react-icons/lia";
import { BsDatabaseCheck } from "react-icons/bs";

type Scan = {
  path: string;
  caption: string;
};

type DatasetStatProps = {
  t: any; 
  setLightboxImage: (path: string) => void;
};

export default function DatasetStat({ t, setLightboxImage }: DatasetStatProps) {
  return (
    <div>
      {/* Nombre d’images */}
      <Subsubtitle text={t.dataset_nb_image} Icon={GoNumber} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Train", value: t.dataset_summary_train },
          { label: "Test", value: t.dataset_summary_test },
          { label: "Validation", value: t.dataset_summary_val },
          { label: "Total", value: t.dataset_summary_total, isTotal: true },
        ].map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-purple-50 border border-purple-200"
          >
            <div
              className={`text-sm font-bold ${
                item.isTotal ? "text-purple-600" : "text-gray-600"
              }`}
            >
              {item.label}
            </div>
            <div className="text-2xl font-bold text-purple-600">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Exemple scans */}
      <Subsubtitle text={t.example_scans_title} Icon={LiaMicroscopeSolid} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {t.example_scans.map((scan: Scan, i: number) => (
          <div
            key={i}
            className="bg-purple-50 p-4 rounded-xl border border-purple-200"
          >
            <img
              src={scan.path}
              alt={scan.caption}
              className="w-full rounded-lg shadow-md mb-3 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setLightboxImage(scan.path)}
            />
            <p className="text-center text-gray-800 font-semibold">{scan.caption}</p>
          </div>
        ))}
      </div>

      {/* Dataset Table */}
      <Subsubtitle text={t.dataset_title_train} Icon={BsDatabaseCheck} />
      <div className="overflow-hidden border border-purple-200 rounded-lg mb-6">
        <table className="w-full border-collapse table-fixed">
          <thead className="bg-purple-100">
            <tr>
              {t.dataset.headers.map((h: string, i: number) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left font-semibold text-gray-900 border-b border-purple-200"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.dataset.rows.map((row: string[], i: number) => (
              <tr key={i} className="hover:bg-purple-50 transition-colors">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-6 py-3 text-gray-800 border-b border-purple-100"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image finale */}
      <img
        src="/zoidberg/DatasetPop.png"
        alt={t.dataset_image_caption}
        className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setLightboxImage("/zoidberg/DatasetPop.png")}
      />
    </div>
  );
}
