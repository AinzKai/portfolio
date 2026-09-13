import {
  BarChart3,
  Globe,
  Mail,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Check,
  Send,
  Eye,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  BarChart3,
  Globe,
  Mail,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Check,
  Send,
  Eye,
};

export interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size }: IconProps) {
  const IconComponent = iconMap[name] as LucideIcon | undefined;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
