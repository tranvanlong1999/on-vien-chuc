declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    color?: string;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const Home: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Layers: LucideIcon;
  export const FileText: LucideIcon;
  export const GitBranch: LucideIcon;
  export const BarChart2: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Flame: LucideIcon;
  export const Zap: LucideIcon;
  export const Trophy: LucideIcon;
  export const Target: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const BookX: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const XCircle: LucideIcon;
  export const Eye: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Info: LucideIcon;
  export const Search: LucideIcon;
  export const Circle: LucideIcon;
  export const Star: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Loader2: LucideIcon;
  export const Timer: LucideIcon;
}
