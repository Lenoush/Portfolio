import { Subsubtitle } from "@/app/components/titles";
import { GoNumber } from "react-icons/go";
import { LiaMicroscopeSolid } from "react-icons/lia";
import { BsDatabaseCheck } from "react-icons/bs";
import COLOR_MAP from "@/config/colorMap";
import Link from "next/link";

type Scan = {
  path: string;
  caption: string;
};

type DatasetStatProps = {
  t: any;
  setLightboxImage: (path: string) => void;
  color: string;
};

export default function DatasetStat({ t, setLightboxImage, color }: DatasetStatProps) {
  const colorKey = COLOR_MAP[color];
  const mainColor = COLOR_MAP.main;

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
            className={`p-5 rounded-xl ${colorKey.bg} border ${colorKey.border}`}
          >
            <div
              className={`text-sm font-bold ${item.isTotal ? `${colorKey.text_color}` : `${mainColor.subtitle_color}`
                }`}
            >
              {item.label}
            </div>
            <div className={`text-2xl font-bold ${colorKey.text_color}`}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Exemple scans */}
      <Subsubtitle text={t.example_scans_title} Icon={LiaMicroscopeSolid} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {t.example_scans.map((scan: Scan, i: number) => (
          <div
            key={i}
            className={`${colorKey.bg} p-4 rounded-xl border ${colorKey.border}`}
          >
            <img
              src={scan.path}
              alt={scan.caption}
              className="w-full rounded-lg shadow-md mb-3 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setLightboxImage(scan.path)}
            />
            <p className={`text-center ${mainColor.text_color} font-semibold`}>{scan.caption}</p>
          </div>
        ))}
      </div>

      {/* Dataset Table */}
      <Subsubtitle text={t.dataset_title_train} Icon={BsDatabaseCheck} />
      <div className={`overflow-hidden border ${colorKey.border} rounded-lg mb-6`}>
        <table className="w-full border-collapse table-fixed">
          <thead className={`${colorKey.bg_clair}`}>
            <tr>
              {t.dataset.headers.map((h: string, i: number) => (
                <th
                  key={i}
                  className={`px-6 py-3 text-left font-semibold ${mainColor.subtitle_color} border-b ${colorKey.border}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.dataset.rows.map((row: string[], i: number) => (
              <tr key={i} className={`${colorKey.hover_bg_50} transition-colors`}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-3 ${mainColor.text_color} border-b ${colorKey.border}`}
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
        className="w-full max-w-3xl mx-auto rounded-xl shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setLightboxImage("/zoidberg/DatasetPop.png")}
      />
    </div>
  );
}
