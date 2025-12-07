import { PAGE_COLORS } from "./theme";

interface ColorSettings {
  color: string,
  bg: string,
  border: string,

  text_color?: string,
  hover_bg?: string,
  hover_bg_100?: string,
  hover_bg_50?: string,

  title_color?: string,
  subtitle_color?: string,

  text_color_white?: string,
  bg_page?: string,
  text_color_emerald?: string,
  bg_clair?: string,
  hover_text?: string,
  bg_fonce?: string,
}

const MAIN_COLOR: ColorSettings = {
  color: "emerald",
  title_color: "text-black",
  subtitle_color: "text-gray-800",
  text_color: "text-gray-700",
  text_color_white: "text-white",
  text_color_emerald: "text-emerald-600",
  bg: "bg-white",
  bg_page: "bg-slate-50",
  hover_text: "hover:text-emerald-600",
  border: "border-emerald-600",
}

const generateColorSettings = (color: string): ColorSettings => {
  return {
    color: `${color}`,
    bg: `bg-${color}-50`,

    hover_bg: `hover:bg-${color}-700`,
    hover_bg_100: `hover:bg-${color}-100`,
    hover_bg_50: `hover:bg-${color}-50`,

    border: `border-${color}-200`,
    text_color: `text-${color}-600`,
    hover_text: `hover:text-${color}-800`,

    bg_clair: `bg-${color}-100`,
    bg_fonce: `bg-${color}-900`
  };
}

const COLOR_MAP: Record<string, ColorSettings> = {
  purple: {
    color: 'purple',
    bg: 'bg-purple-50',

    hover_bg: 'hover:bg-purple-700',
    hover_bg_100: 'hover:bg-purple-100',
    hover_bg_50: 'hover:bg-purple-50',

    border: 'border-purple-200',
    text_color: 'text-purple-600',
    hover_text: 'hover:text-purple-800',

    bg_clair: 'bg-purple-100',
    bg_fonce: 'bg-purple-900'
  },
  pink: {
    color: 'pink',
    bg: 'bg-pink-50',

    hover_bg: 'hover:bg-pink-700',
    hover_bg_100: 'hover:bg-pink-100',
    hover_bg_50: 'hover:bg-pink-50',

    border: 'border-pink-200',
    text_color: 'text-pink-600',
    hover_text: 'hover:text-pink-800',

    bg_clair: 'bg-pink-100',
    bg_fonce: 'bg-pink-900'
  },
  orange: {
    color: 'orange',
    bg: 'bg-orange-50',

    hover_bg: 'hover:bg-orange-700',
    hover_bg_100: 'hover:bg-orange-100',
    hover_bg_50: 'hover:bg-orange-50',

    border: 'border-orange-200',
    text_color: 'text-orange-600',
    hover_text: 'hover:text-orange-800',

    bg_clair: 'bg-orange-100',
    bg_fonce: 'bg-orange-900'
  },
  green: {
    color: 'green',
    bg: 'bg-green-50',

    hover_bg: 'hover:bg-green-700',
    hover_bg_100: 'hover:bg-green-100',
    hover_bg_50: 'hover:bg-green-50',

    border: 'border-green-200',
    text_color: 'text-green-600',
    hover_text: 'hover:text-green-800',

    bg_clair: 'bg-green-100',
    bg_fonce: 'bg-green-900'
  },
  indigo: {
    color: 'indigo',
    bg: 'bg-indigo-50',

    hover_bg: 'hover:bg-indigo-700',
    hover_bg_100: 'hover:bg-indigo-100',
    hover_bg_50: 'hover:bg-indigo-50',

    border: 'border-indigo-200',
    text_color: 'text-indigo-600',
    hover_text: 'hover:text-indigo-800',

    bg_clair: 'bg-indigo-100',
    bg_fonce: 'bg-indigo-900'
  },
};

export { COLOR_MAP, MAIN_COLOR };