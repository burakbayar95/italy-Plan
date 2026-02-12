export enum City {
  BOLOGNA = 'Bologna',
  FLORENCE = 'Floransa',
  VENICE = 'Venedik',
  VERONA = 'Verona',
  MILAN = 'Milano'
}

export enum TagType {
  SIGHTSEEING = 'Gezilecek Yer',
  FOOD = 'Yeme/İçme',
  TRANSPORT = 'Ulaşım',
  PHOTO = 'Fotoğraf Noktası',
  SHOPPING = 'Alışveriş',
  INFO = 'Bilgi'
}

export interface Activity {
  id: string;
  city: City;
  time: string;
  title: string;
  description: string;
  tags: TagType[];
  isCompleted: boolean;
  notes?: string;
  price?: string;
}

export interface ActivityProps {
  activity: Activity;
  onToggle: (id: string) => void;
  isDragging?: boolean;
}