import { Activity, City, TagType } from './types';
import { Camera, Utensils, Footprints, Train, ShoppingBag, Info } from 'lucide-react';
import React from 'react';

export const INITIAL_DATA: Activity[] = [
  // --- BOLOGNA (19-20 Feb) ---
  {
    id: 'b-1',
    city: City.BOLOGNA,
    time: '12:20',
    title: 'Bologna Varış',
    description: 'Havalimanından merkeze ulaşım (Marconi Express ~7 dk). Otele yerleşme ve kısa dinlenme.',
    tags: [TagType.TRANSPORT, TagType.INFO],
    isCompleted: false
  },
  {
    id: 'b-2',
    city: City.BOLOGNA,
    time: '14:30',
    title: 'Piazza Maggiore & San Petronio',
    description: 'Şehrin kalbi Maggiore Meydanı ve devasa San Petronio Bazilikası gezisi.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'b-3',
    city: City.BOLOGNA,
    time: '16:00',
    title: 'Quadrilatero Bölgesi',
    description: 'Tarihi pazar sokaklarında yürüyüş. Şarküteri vitrinlerini incele.',
    tags: [TagType.SIGHTSEEING, TagType.SHOPPING],
    isCompleted: false
  },
  {
    id: 'b-4',
    city: City.BOLOGNA,
    time: '19:30',
    title: 'Akşam Yemeği: Bolonez Klasiği',
    description: 'Tagliatelle al Ragù veya Tortellini in Brodo tat. Rezervasyon önerilir.',
    tags: [TagType.FOOD],
    isCompleted: false
  },
  // 20 Feb
  {
    id: 'b-5',
    city: City.BOLOGNA,
    time: '09:30',
    title: 'Archiginnasio & Tarihi Merkez',
    description: 'Eski üniversite binası ve Antatomik Tiyatro (Teatro Anatomico).',
    tags: [TagType.SIGHTSEEING, TagType.INFO],
    isCompleted: false,
    price: '3€'
  },
  {
    id: 'b-6',
    city: City.BOLOGNA,
    time: '12:30',
    title: 'Öğle Yemeği: Mercato delle Erbe',
    description: 'Yerel halkın tercih ettiği kapalı pazar yerinde taze makarna veya pizza.',
    tags: [TagType.FOOD],
    isCompleted: false
  },
  {
    id: 'b-7',
    city: City.BOLOGNA,
    time: '14:30',
    title: 'San Luca Tepesi',
    description: 'Dünyanın en uzun revaklı yolundan (portico) yürüyerek veya trenle çıkış. Panoramik manzara.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'b-8',
    city: City.BOLOGNA,
    time: 'Akşam',
    title: 'Serbest Zaman & Aperitivo',
    description: 'Via del Pratello veya öğrenci bölgesinde akşam içeceği ve atıştırmalık.',
    tags: [TagType.FOOD, TagType.SIGHTSEEING],
    isCompleted: false
  },

  // --- FLORANSA (21 Feb - Günübirlik) ---
  {
    id: 'f-1',
    city: City.FLORENCE,
    time: 'Sabah',
    title: 'Tren ile Floransa’ya Geçiş',
    description: 'Bologna Centrale → Firenze SMN (Hızlı tren ~40dk).',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },
  {
    id: 'f-2',
    city: City.FLORENCE,
    time: '10:00',
    title: 'Duomo Meydanı',
    description: 'Katedral, Çan Kulesi ve Vaftizhane. Dışarıdan veya kombine biletle içeriden gezi.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-3',
    city: City.FLORENCE,
    time: '11:30',
    title: 'Piazza della Signoria',
    description: 'Açık hava heykel müzesi, Palazzo Vecchio girişi.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'f-4',
    city: City.FLORENCE,
    time: '13:00',
    title: 'Ponte Vecchio',
    description: 'Tarihi kuyumcular köprüsü üzerinde yürüyüş.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-5',
    city: City.FLORENCE,
    time: '14:30',
    title: 'Uffizi Gallery',
    description: 'Rönesans’ın en önemli eserleri. Önceden bilet şart.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '25€+'
  },
  {
    id: 'f-6',
    city: City.FLORENCE,
    time: '17:00',
    title: 'Santa Croce Bazilikası',
    description: 'Michelangelo ve Galileo’nun mezarlarının bulunduğu kilise.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-7',
    city: City.FLORENCE,
    time: 'Akşam',
    title: 'Bologna’ya Dönüş',
    description: 'Akşam yemeği sonrası trenle Bologna konaklamasına dönüş.',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },

  // --- VENEDİK (22 Feb - Günübirlik) ---
  {
    id: 'v-1',
    city: City.VENICE,
    time: 'Sabah',
    title: 'Tren ile Venedik’e Geçiş',
    description: 'Bologna → Venezia Santa Lucia (~1.5 saat).',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },
  {
    id: 'v-2',
    city: City.VENICE,
    time: '10:30',
    title: 'Vaporetto ile Büyük Kanal',
    description: 'İstasyondan meydana giderken 1 veya 2 numaralı hattı kullan.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-3',
    city: City.VENICE,
    time: '12:00',
    title: 'Rialto Köprüsü',
    description: 'Kanal üzerindeki en ünlü köprüde fotoğraf molası.',
    tags: [TagType.PHOTO, TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-4',
    city: City.VENICE,
    time: '13:30',
    title: 'San Marco Meydanı',
    description: 'Bazilika, Çan Kulesi ve tarihi atmosfer.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-5',
    city: City.VENICE,
    time: '14:30',
    title: 'Doge’s Palace (Dükler Sarayı)',
    description: 'Gotik mimari şaheseri. Önceden bilet alınmalı.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '30€'
  },
  {
    id: 'v-6',
    city: City.VENICE,
    time: 'Akşam',
    title: 'Bologna’ya Dönüş',
    description: 'Dönüş treni öncesi kanallarda son yürüyüş.',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },

  // --- VERONA (23 Feb - Günübirlik) ---
  {
    id: 'ver-1',
    city: City.VERONA,
    time: 'Sabah',
    title: 'Tren ile Verona’ya Geçiş',
    description: 'Bologna → Verona Porta Nuova (~50 dk).',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },
  {
    id: 'ver-2',
    city: City.VERONA,
    time: '10:30',
    title: 'Verona Arena',
    description: 'Roma döneminden kalma devasa amfitiyatro. Dışarıdan veya içeriden gezi.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '10€'
  },
  {
    id: 'ver-3',
    city: City.VERONA,
    time: '12:00',
    title: 'Juliet’in Evi (Casa di Giulietta)',
    description: 'Meşhur balkon ve heykel. Avlu ücretsiz, ev girişi ücretli.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'ver-4',
    city: City.VERONA,
    time: '13:30',
    title: 'Piazza delle Erbe',
    description: 'Şehrin en eski ve canlı meydanında öğle yemeği molası.',
    tags: [TagType.FOOD, TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'ver-5',
    city: City.VERONA,
    time: '15:30',
    title: 'Adige Nehri & Castelvecchio',
    description: 'Nehir kenarında yürüyüş ve kale köprüsünden geçiş (Ponte Scaligero).',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'ver-6',
    city: City.VERONA,
    time: 'Akşam',
    title: 'Bologna’ya Dönüş',
    description: 'Son Bologna akşamı için şehre dönüş.',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },

  // --- MİLANO (24-26 Feb) ---
  {
    id: 'm-1',
    city: City.MILAN,
    time: '09:46 - 12:15',
    title: 'Milano’ya Tren Yolculuğu',
    description: 'Bologna’dan çıkış, Milano Centrale’ye varış ve otele yerleşme.',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },
  {
    id: 'm-2',
    city: City.MILAN,
    time: '13:30',
    title: 'Duomo di Milano',
    description: 'Gotik katedral. Terasa çıkış şiddetle önerilir (Asansör/Merdiven).',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '20€+'
  },
  {
    id: 'm-3',
    city: City.MILAN,
    time: '15:30',
    title: 'Galleria Vittorio Emanuele II',
    description: 'Dünyanın en eski alışveriş pasajlarından biri. Boğa mozaiğinde dönme ritüeli.',
    tags: [TagType.SHOPPING, TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'm-4',
    city: City.MILAN,
    time: 'Akşam',
    title: 'Navigli Bölgesi Akşam Yemeği',
    description: 'Kanallar bölgesinde "Aperitivo" veya akşam yemeği.',
    tags: [TagType.FOOD],
    isCompleted: false
  },
  // 25 Feb
  {
    id: 'm-5',
    city: City.MILAN,
    time: 'Tüm Gün',
    title: 'Alışveriş Günü',
    description: 'Serravalle Designer Outlet (uzak) veya Scalo Milano (yakın) seçenekleri.',
    tags: [TagType.SHOPPING],
    isCompleted: false
  },
  {
    id: 'm-6',
    city: City.MILAN,
    time: 'Akşam',
    title: 'Brera veya Navigli',
    description: 'Son akşam için Brera’nın şık sokakları veya Navigli’nin canlı ortamı.',
    tags: [TagType.FOOD, TagType.SIGHTSEEING],
    isCompleted: false
  },
  // 26 Feb
  {
    id: 'm-7',
    city: City.MILAN,
    time: '07:05',
    title: 'Milano’dan Bologna’ya Dönüş',
    description: 'Milano Centrale → Bologna (09:56 varış).',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  },
  {
    id: 'm-8',
    city: City.MILAN,
    time: '13:30',
    title: 'Uçuş: Bologna → İstanbul',
    description: 'Bologna Havalimanı’ndan (BLQ) dönüş uçuşu.',
    tags: [TagType.TRANSPORT],
    isCompleted: false
  }
];

export const getTagColor = (tag: TagType) => {
  switch (tag) {
    case TagType.FOOD: return 'bg-orange-100 text-orange-700 border-orange-200';
    case TagType.SIGHTSEEING: return 'bg-blue-100 text-blue-700 border-blue-200';
    case TagType.TRANSPORT: return 'bg-gray-100 text-gray-700 border-gray-200';
    case TagType.PHOTO: return 'bg-purple-100 text-purple-700 border-purple-200';
    case TagType.SHOPPING: return 'bg-pink-100 text-pink-700 border-pink-200';
    case TagType.INFO: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export const getTagIcon = (tag: TagType) => {
  switch (tag) {
    case TagType.FOOD: return <Utensils size={12} className="mr-1" />;
    case TagType.SIGHTSEEING: return <Footprints size={12} className="mr-1" />;
    case TagType.TRANSPORT: return <Train size={12} className="mr-1" />;
    case TagType.PHOTO: return <Camera size={12} className="mr-1" />;
    case TagType.SHOPPING: return <ShoppingBag size={12} className="mr-1" />;
    case TagType.INFO: return <Info size={12} className="mr-1" />;
    default: return null;
  }
};
