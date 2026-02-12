export enum City {
  BOLOGNA_1 = 'Bologna - 19 Şub',
  BOLOGNA_2 = 'Bologna - 20 Şub',
  FLORENCE = 'Floransa',
  VENICE = 'Venedik',
  VERONA = 'Verona',
  MILAN_1 = 'Milano - 24 Şub',
  MILAN_2 = 'Milano - 25 Şub',
  MILAN_3 = 'Milano - 26 Şub'
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