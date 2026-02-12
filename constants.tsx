import { Activity, City, TagType } from './types';
import { Camera, Utensils, Footprints, Train, ShoppingBag, Info } from 'lucide-react';
import React from 'react';

export const INITIAL_DATA: Activity[] = [
  // --- VENEDİK ---
  {
    id: 'v-1',
    city: City.VENICE,
    time: '08:30 - 12:00',
    title: 'Vaporetto Turu (Hat 1)',
    description: 'Santa Lucia istasyonundan San Marco’ya kadar sarayları izleyerek git.',
    tags: [TagType.TRANSPORT, TagType.SIGHTSEEING],
    isCompleted: false,
    price: 'Bilet'
  },
  {
    id: 'v-2',
    city: City.VENICE,
    time: '09:30',
    title: 'Rialto Köprüsü',
    description: 'Vaporetto’dan Rialto durağında in. İkonik köprüde fotoğraf çekil.',
    tags: [TagType.PHOTO, TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-3',
    city: City.VENICE,
    time: '10:00',
    title: 'Rialto Pazarı',
    description: 'Köprünün yakınındaki tarihi balık ve sebze pazarını gez.',
    tags: [TagType.SHOPPING, TagType.FOOD],
    isCompleted: false
  },
  {
    id: 'v-4',
    city: City.VENICE,
    time: '12:00 - 15:00',
    title: 'San Marco Meydanı',
    description: 'Şehrin kalbi. Pahalı olduğu için oturma, etrafı gez.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-5',
    city: City.VENICE,
    time: '12:30',
    title: 'San Marco Bazilikası',
    description: 'İçine girmek için bilet gerekli. Altın mozaikleri gör.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '10€+'
  },
  {
    id: 'v-6',
    city: City.VENICE,
    time: '13:30',
    title: 'Doge’s Palace & Ahlar Köprüsü',
    description: 'Dükler Sarayı dışarıdan, Ahlar Köprüsü (Ponte dei Sospiri) yanında fotoğraf.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'v-7',
    city: City.VENICE,
    time: 'Öğle Yemeği',
    title: 'Cicchetti veya Pizza',
    description: 'Meydandan uzaklaş. Ara sokaklarda ayaküstü atıştırmalık (Cicchetti) ye.',
    tags: [TagType.FOOD],
    isCompleted: false
  },
  {
    id: 'v-8',
    city: City.VENICE,
    time: '15:00 - 18:00',
    title: 'Libreria Acqua Alta',
    description: 'Kitaplardan yapılmış merdivene çık, kanal manzarasını izle.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'v-9',
    city: City.VENICE,
    time: '16:30',
    title: 'Dorsoduro Bölgesi',
    description: 'Turistlerden uzak, sanatsal ve gerçek Venedik sokakları.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'v-10',
    city: City.VENICE,
    time: '17:30',
    title: 'Gondol Turu',
    description: 'İsteğe bağlı klasik Venedik deneyimi.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '80-100€'
  },
  {
    id: 'v-11',
    city: City.VENICE,
    time: 'Not',
    title: 'Giriş Ücreti Kontrolü',
    description: 'Venedik giriş ücreti uygulamasını resmi siteden kontrol et.',
    tags: [TagType.INFO],
    isCompleted: false
  },

  // --- FLORANSA ---
  {
    id: 'f-1',
    city: City.FLORENCE,
    time: '08:30 - 12:00',
    title: 'Duomo Meydanı',
    description: 'Santa Maria del Fiore Katedrali. İçi ücretsiz, sıra olabilir.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-2',
    city: City.FLORENCE,
    time: '09:30',
    title: 'Vaftizhane Kapıları',
    description: 'Meşhur "Cennet Kapıları"nı dışarıdan incele.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'f-3',
    city: City.FLORENCE,
    time: '10:30',
    title: 'Akademi Galerisi',
    description: 'Davut Heykeli (David) burada. Bilet önceden alınmalı.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false,
    price: '24€'
  },
  {
    id: 'f-4',
    city: City.FLORENCE,
    time: '12:00 - 14:30',
    title: 'Piazza della Signoria',
    description: 'Açık hava müzesi gibi, heykelleri ücretsiz gör.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-5',
    city: City.FLORENCE,
    time: 'Öğle Yemeği',
    title: 'All’Antico Vinaio',
    description: 'Meşhur "schiacciata" sandviçi. Sıra olabilir ama hızlı.',
    tags: [TagType.FOOD],
    isCompleted: false
  },
  {
    id: 'f-6',
    city: City.FLORENCE,
    time: 'Alternatif Yemek',
    title: 'Mercato Centrale',
    description: 'Merkez Pazarı üst katında İtalyan lezzetleri.',
    tags: [TagType.FOOD, TagType.SHOPPING],
    isCompleted: false
  },
  {
    id: 'f-7',
    city: City.FLORENCE,
    time: '14:30 - 18:00',
    title: 'Uffizi Galerisi (Dış)',
    description: 'Vakit darlığından dış avlusunu ve heykelleri gez.',
    tags: [TagType.SIGHTSEEING],
    isCompleted: false
  },
  {
    id: 'f-8',
    city: City.FLORENCE,
    time: '16:00',
    title: 'Ponte Vecchio',
    description: 'Kuyumcuların olduğu tarihi köprü. Arno nehrini izle.',
    tags: [TagType.SIGHTSEEING, TagType.PHOTO],
    isCompleted: false
  },
  {
    id: 'f-9',
    city: City.FLORENCE,
    time: 'Gün Batımı',
    title: 'Piazzale Michelangelo',
    description: 'Şehri tepeden gören en iyi manzara. Yokuş çıkılacak.',
    tags: [TagType.PHOTO, TagType.SIGHTSEEING],
    isCompleted: false
  }
];

export const getTagColor = (tag: TagType) => {
  switch (tag) {
    case TagType.FOOD: return 'bg-orange-100 text-orange-700 border-orange-200';
    case TagType.SIGHTSEEING: return 'bg-blue-100 text-blue-700 border-blue-200';
    case TagType.TRANSPORT: return 'bg-gray-100 text-gray-700 border-gray-200';
    case TagType.PHOTO: return 'bg-purple-100 text-purple-700 border-purple-200';
    case TagType.SHOPPING: return 'bg-green-100 text-green-700 border-green-200';
    case TagType.INFO: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-100 text-gray-600';
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