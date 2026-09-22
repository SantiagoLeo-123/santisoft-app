import {
  Stethoscope,
  Scissors,
  Baby,
  ShieldPlus,
  HeartPulse,
  Droplet,
  Wind,
  ShieldAlert,
  Activity,
  Flower2,
  HeartHandshake,
  Pill,
  SearchCheck,
  BarChart3,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Scissors,
  Baby,
  ShieldPlus,
  HeartPulse,
  Droplet,
  Wind,
  ShieldAlert,
  Activity,
  Flower2,
  HeartHandshake,
  Pill,
  SearchCheck,
  BarChart3,
  BookOpen,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Stethoscope;
}
