"use client";

import { useState } from "react";
import { Subsubtitle } from "@/app/components/titles";
import { GiMirrorMirror } from "react-icons/gi";
import { modelsData } from "@/app/zoidberg/metadata";
import COLOR_MAP from "@/config/colorMap";

export default function ModelsBenchmark({ t, color }: { t: any, color: string }) {
  
  const [selectedModel, setSelectedModel] = useState(modelsData[0].name);
  const [selectedMetricType, setSelectedMetricType] = useState("macro");
  const [valMetricType, setValMetricType] = useState("macro");
  const [testMetricType, setTestMetricType] = useState("macro");

  const colorKey = COLOR_MAP[color];
  const mainKey = COLOR_MAP["main"];

  return (
    <div>
      {/* Sélection du modèle et type de métrique */}
      <Subsubtitle text={t.same_models_comparison_title} Icon={GiMirrorMirror} />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <select
          className={`border ${mainKey.border} rounded-md p-2 ${mainKey.text_color} ${mainKey.bg} cursor-pointer`}
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          {modelsData.map((model, i) => (
            <option key={i} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>

        <select
          className={`border ${mainKey.border} rounded-md p-2 ${mainKey.text_color} ${mainKey.bg} cursor-pointer`}
          value={selectedMetricType}
          onChange={(e) => setSelectedMetricType(e.target.value)}
        >
          <option value="macro">Macro</option>
          <option value="weighted">Weighted</option>
        </select>
      </div>

      {/* Infos du modèle sélectionné */}
      {(() => {
        const model = modelsData.find((m) => m.name === selectedModel);
        if (!model) return null;
        const type = selectedMetricType;

        return (
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className={`p-4 bg-green-50 rounded-xl border border-green-200 ${mainKey.text_color}`}>
              <h5 className="font-semibold mb-2">Validation</h5>
              <p>Accuracy: {model.val.accuracy}</p>
              <p>AUC: {model.val.auc}</p>
              <p>
                F1 {type}: {type === "macro" ? model.val.f1_macro : model.val.f1_weighted}
              </p>
              <p>
                Precision {type}: {type === "macro" ? model.val.precision_macro : model.val.precision_weighted}
              </p>
              <p>
                Recall {type}: {type === "macro" ? model.val.recall_macro : model.val.recall_weighted}
              </p>
            </div>

            <div className={`p-4 bg-orange-50 rounded-xl border border-orange-200 ${mainKey.text_color}`}>
              <h5 className="font-semibold mb-2">Test</h5>
              <p>Accuracy: {model.test.accuracy}</p>
              <p>AUC: {model.test.auc}</p>
              <p>
                F1 {type}: {type === "macro" ? model.test.f1_macro : model.test.f1_weighted}
              </p>
              <p>
                Precision {type}: {type === "macro" ? model.test.precision_macro : model.test.precision_weighted}
              </p>
              <p>
                Recall {type}: {type === "macro" ? model.test.recall_macro : model.test.recall_weighted}
              </p>
            </div>
          </div>
        );
      })()}

      {/* Validation Metrics Table */}
      <div className="flex items-center justify-between mb-4">
        <Subsubtitle text={t.validation_metrics_title} Icon={GiMirrorMirror} />
        <select
          className={`border ${mainKey.border} rounded-md p-2 ${mainKey.text_color} ${mainKey.bg} cursor-pointer`}
          value={valMetricType}
          onChange={(e) => setValMetricType(e.target.value)}
        >
          <option value="macro">Macro</option>
          <option value="weighted">Weighted</option>
        </select>
      </div>

      <div className="overflow-x-auto mb-6">
        <div className={`border ${colorKey.border} rounded-lg overflow-hidden`}>
          <table className="w-full table-fixed border-collapse">
            <thead className={`${colorKey.bg_clair}`}>
              <tr>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Model</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Accuracy</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>AUC</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>F1 {valMetricType}</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Precision {valMetricType}</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Recall {valMetricType}</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model, i) => (
                <tr key={i} className={`${colorKey.hover_bg_50}`}>
                  <td className={`border-b ${colorKey.border} px-4 py-2 font-medium ${mainKey.text_color}`}>{model.name}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>{model.val.accuracy}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>{model.val.auc}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {valMetricType === "macro" ? model.val.f1_macro : model.val.f1_weighted}
                  </td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {valMetricType === "macro" ? model.val.precision_macro : model.val.precision_weighted}
                  </td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {valMetricType === "macro" ? model.val.recall_macro : model.val.recall_weighted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Test Metrics Table */}
      <div className="flex items-center justify-between mb-4">
        <Subsubtitle text={t.test_metrics_title} Icon={GiMirrorMirror} />
        <select
          className={`border ${mainKey.border} rounded-md p-2 ${mainKey.text_color} ${mainKey.bg} cursor-pointer`}
          value={testMetricType}
          onChange={(e) => setTestMetricType(e.target.value)}
        >
          <option value="macro">Macro</option>
          <option value="weighted">Weighted</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <div className={`border ${colorKey.border} rounded-lg overflow-hidden`}>
          <table className="w-full table-fixed border-collapse">
            <thead className={`${colorKey.bg_clair}`}>
              <tr>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Model</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Accuracy</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>AUC</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>F1 {testMetricType}</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Precision {testMetricType}</th>
                <th className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.subtitle_color}`}>Recall {testMetricType}</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model, i) => (
                <tr key={i} className={`${colorKey.hover_bg_50}`}>
                  <td className={`border-b ${colorKey.border} px-4 py-2 font-medium ${mainKey.text_color}`}>{model.name}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>{model.test.accuracy}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>{model.test.auc}</td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {testMetricType === "macro" ? model.test.f1_macro : model.test.f1_weighted}
                  </td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {testMetricType === "macro" ? model.test.precision_macro : model.test.precision_weighted}
                  </td>
                  <td className={`border-b ${colorKey.border} px-4 py-2 ${mainKey.text_color}`}>
                    {testMetricType === "macro" ? model.test.recall_macro : model.test.recall_weighted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
