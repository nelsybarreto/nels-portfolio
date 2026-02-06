import { IconName } from "../shared/ui/icon/icon.component";

export interface ServiceItem {
    id: string;
    name: string;
    description: string;
    highlights: string[];
    icon: IconName;
  }