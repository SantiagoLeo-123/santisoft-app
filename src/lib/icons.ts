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
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Stethoscope;
}
