"use client";

import { useState } from "react";
import { Subsubtitle } from "@/app/components/titles";
import { GiMirrorMirror } from "react-icons/gi";
import { modelsData } from "@/app/zoidberg/metadata"; // adapte le chemin si besoin

export default function ModelsBenchmark({ t }: { t: any }) {
  // States
  const [selectedModel, setSelectedModel] = useState(modelsData[0].name);
  const [selectedMetricType, setSelectedMetricType] = useState("macro");
  const [valMetricType, setValMetricType] = useState("macro");
  const [testMetricType, setTestMetricType] = useState("macro");

  return (
    <div>
      {/* Sélection du modèle et type de métrique */}
      <Subsubtitle text={t.same_models_comparison_title} Icon={GiMirrorMirror} />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <select
          className="border border-gray-300 rounded-md p-2 text-black bg-white cursor-pointer"
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
          className="border border-gray-300 rounded-md p-2 text-black bg-white cursor-pointer"
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
            <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-gray-800">
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

            <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-gray-800">
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
          className="border border-gray-300 rounded-md p-2 text-black bg-white cursor-pointer"
          value={valMetricType}
          onChange={(e) => setValMetricType(e.target.value)}
        >
          <option value="macro">Macro</option>
          <option value="weighted">Weighted</option>
        </select>
      </div>

      <div className="overflow-x-auto mb-6">
        <div className="border border-purple-200 rounded-lg overflow-hidden">
          <table className="w-full table-fixed border-collapse">
            <thead className="bg-purple-100">
              <tr>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Model</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Accuracy</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">AUC</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">F1 {valMetricType}</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Precision {valMetricType}</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Recall {valMetricType}</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model, i) => (
                <tr key={i} className="hover:bg-purple-50">
                  <td className="border-b border-purple-100 px-4 py-2 font-medium text-gray-800">{model.name}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">{model.val.accuracy}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">{model.val.auc}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
                    {valMetricType === "macro" ? model.val.f1_macro : model.val.f1_weighted}
                  </td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
                    {valMetricType === "macro" ? model.val.precision_macro : model.val.precision_weighted}
                  </td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
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
          className="border border-gray-300 rounded-md p-2 text-black bg-white cursor-pointer"
          value={testMetricType}
          onChange={(e) => setTestMetricType(e.target.value)}
        >
          <option value="macro">Macro</option>
          <option value="weighted">Weighted</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <div className="border border-purple-200 rounded-lg overflow-hidden">
          <table className="w-full table-fixed border-collapse">
            <thead className="bg-purple-100">
              <tr>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Model</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Accuracy</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">AUC</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">F1 {testMetricType}</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Precision {testMetricType}</th>
                <th className="border-b border-purple-200 px-4 py-2 text-gray-900">Recall {testMetricType}</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model, i) => (
                <tr key={i} className="hover:bg-purple-50">
                  <td className="border-b border-purple-100 px-4 py-2 font-medium text-gray-800">{model.name}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">{model.test.accuracy}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">{model.test.auc}</td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
                    {testMetricType === "macro" ? model.test.f1_macro : model.test.f1_weighted}
                  </td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
                    {testMetricType === "macro" ? model.test.precision_macro : model.test.precision_weighted}
                  </td>
                  <td className="border-b border-purple-100 px-4 py-2 text-gray-800">
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
