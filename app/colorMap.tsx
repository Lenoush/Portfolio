const COLOR_MAP: Record<string, { bg: string; hover: string, from: string, border: string, text_color: string, bg_fonce?: string, hover_text?: string }> = {
  home: { bg: "bg-white", hover: "hover:bg-gray-200", from: "from-white", border: "border-gray-300", text_color: "text-gray-600", },
  blue: { bg: "bg-blue-50", hover: "hover:bg-blue-700", from: "from-blue-50", border: "border-blue-200", text_color: "text-blue-600" },
  green: { bg: "bg-green-50", hover: "hover:bg-green-700", from: "from-green-50", border: "border-green-200", text_color: "text-green-600", hover_text: "hover:text-green-800", bg_fonce: "bg-green-900" },
  purple: { bg: "bg-purple-50", hover: "hover:bg-purple-700", from: "from-purple-50", border: "border-purple-200", text_color: "text-purple-600" , hover_text: "hover:text-purple-800", bg_fonce: "bg-purple-900" },
  indigo: { bg: "bg-indigo-50", hover: "hover:bg-indigo-700", from: "from-indigo-50", border: "border-indigo-200", text_color: "text-indigo-600", hover_text: "hover:text-indigo-800", bg_fonce: "bg-indigo-900" },
  pink: { bg: "bg-pink-50", hover: "hover:bg-pink-700", from: "from-pink-50", border: "border-pink-200", text_color: "text-pink-600" },
  red: { bg: "bg-red-50", hover: "hover:bg-red-700", from: "from-red-50", border: "border-red-200", text_color: "text-red-600" },
  cyan: { bg: "bg-cyan-50", hover: "hover:bg-cyan-700", from: "from-cyan-50", border: "border-cyan-200", text_color: "text-cyan-600" },
  orange: { bg: "bg-orange-50", hover: "hover:bg-orange-700", from: "from-orange-50", border: "border-orange-200", text_color: "text-orange-600", bg_fonce: "bg-orange-900" , hover_text: "hover:text-orange-800"},
};

export default COLOR_MAP;