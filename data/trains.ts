
import { Train, TrainClass } from '../types';

export const stations = [
  { code: 'NDLS', name: 'New Delhi' },
  { code: 'MMCT', name: 'Mumbai Central' },
  { code: 'HWH', name: 'Howrah Jn' },
  { code: 'MAS', name: 'MGR Chennai Central' },
  { code: 'SBC', name: 'KSR Bengaluru City Jn' },
  { code: 'PNBE', name: 'Patna Jn' },
  { code: 'CSMT', name: 'Chhatrapati Shivaji Maharaj Terminus' },
  { code: 'BSB', name: 'Varanasi Jn' },
  { code: 'GNC', name: 'Gandhinagar Capital' },
  { code: 'MYS', name: 'Mysuru Jn' },
  { code: 'NZM', name: 'Hazrat Nizamuddin' },
  { code: 'VGLJ', name: 'VGL Jhansi Jn' },
  { code: 'LJN', name: 'Lucknow NE' },
  { code: 'KRMI', name: 'Karmali' },
  { code: 'ADI', name: 'Ahmedabad Jn' },
  { code: 'RKMP', name: 'Rani Kamlapati (Bhopal)' },
  { code: 'SDAH', name: 'Sealdah' },
  { code: 'LTT', name: 'Lokmanya Tilak Term' },
  { code: 'JYG', name: 'Jaynagar' },
  { code: 'ASR', name: 'Amritsar Jn' },
  { code: 'AII', name: 'Ajmer Jn' },
  { code: 'KLK', name: 'Kalka' },
  { code: 'RNC', name: 'Ranchi Jn' }
];

export const mockTrains: Train[] = [
  {
    id: '1',
    number: '22436',
    name: 'VANDE BHARAT EXPRESS',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Varanasi Jn',
    toCode: 'BSB',
    departure: '06:00',
    arrival: '14:00',
    duration: '08h 00m',
    runsOn: ['M', 'T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0124', fare: 1750, lastUpdated: 'Just now', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0012', fare: 3300, lastUpdated: 'Just now', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Catering', 'Bio Toilet', 'CCTV']
  },
  {
    id: '1_RET',
    number: '22435',
    name: 'VANDE BHARAT EXPRESS',
    from: 'Varanasi Jn',
    fromCode: 'BSB',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '15:00',
    arrival: '23:00',
    duration: '08h 00m',
    runsOn: ['M', 'T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0080', fare: 1750, lastUpdated: '2 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'WL 04', fare: 3300, lastUpdated: '2 min ago', type: 'red' }
    ],
    amenities: ['Wi-Fi', 'Catering', 'Bio Toilet', 'CCTV']
  },
  {
    id: '2',
    number: '20901',
    name: 'VANDE BHARAT EXP',
    from: 'Mumbai Central',
    fromCode: 'MMCT',
    to: 'Gandhinagar Capital',
    toCode: 'GNC',
    departure: '06:10',
    arrival: '12:25',
    duration: '06h 15m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0450', fare: 1420, lastUpdated: '1 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0045', fare: 2630, lastUpdated: '1 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Onboard Infotainment', 'Catering']
  },
  {
    id: '2_RET',
    number: '20902',
    name: 'VANDE BHARAT EXP',
    from: 'Gandhinagar Capital',
    fromCode: 'GNC',
    to: 'Mumbai Central',
    toCode: 'MMCT',
    departure: '14:05',
    arrival: '20:25',
    duration: '06h 20m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0210', fare: 1420, lastUpdated: '5 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0012', fare: 2630, lastUpdated: '5 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Onboard Infotainment', 'Catering']
  },
  {
    id: '3',
    number: '20607',
    name: 'VANDE BHARAT EXPRESS',
    from: 'MGR Chennai Ctr',
    fromCode: 'MAS',
    to: 'Mysuru Jn',
    toCode: 'MYS',
    departure: '05:50',
    arrival: '12:20',
    duration: '06h 30m',
    runsOn: ['M', 'T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'WL 24', fare: 1200, lastUpdated: '5 min ago', type: 'red' },
      { class: TrainClass.EC, status: 'AVAILABLE-0008', fare: 2295, lastUpdated: '5 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Catering', 'Automatic Doors']
  },
  {
    id: '3_RET',
    number: '20608',
    name: 'VANDE BHARAT EXPRESS',
    from: 'Mysuru Jn',
    fromCode: 'MYS',
    to: 'MGR Chennai Ctr',
    toCode: 'MAS',
    departure: '13:05',
    arrival: '19:30',
    duration: '06h 25m',
    runsOn: ['M', 'T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0112', fare: 1200, lastUpdated: '10 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0040', fare: 2295, lastUpdated: '10 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Catering', 'Automatic Doors']
  },
  {
    id: '4',
    number: '12049',
    name: 'GATIMAN EXPRESS',
    from: 'Hazrat Nizamuddin',
    fromCode: 'NZM',
    to: 'VGL Jhansi Jn',
    toCode: 'VGLJ',
    departure: '08:10',
    arrival: '12:35',
    duration: '04h 25m',
    runsOn: ['M', 'T', 'W', 'T', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0150', fare: 950, lastUpdated: '30 sec ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0020', fare: 1850, lastUpdated: '30 sec ago', type: 'green' }
    ],
    amenities: ['Hostess Service', 'Wi-Fi', 'Catering']
  },
  {
    id: '5',
    number: '22221',
    name: 'CSMT RAJDHANI',
    from: 'Chhatrapati Shivaji Maharaj T',
    fromCode: 'CSMT',
    to: 'Hazrat Nizamuddin',
    toCode: 'NZM',
    departure: '16:00',
    arrival: '09:55',
    duration: '17h 55m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-0002', fare: 4980, lastUpdated: '10 min ago', type: 'green' },
      { class: TrainClass._2A, status: 'RAC 05', fare: 2950, lastUpdated: '10 min ago', type: 'yellow' },
      { class: TrainClass._3A, status: 'WL 56', fare: 2050, lastUpdated: '10 min ago', type: 'red' }
    ],
    amenities: ['Catering', 'Linen', 'Pantry Car']
  },
  {
    id: '6',
    number: '12301',
    name: 'HOWRAH RAJDHANI',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Howrah Jn',
    toCode: 'HWH',
    departure: '16:50',
    arrival: '10:05',
    duration: '17h 15m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'RAC 02', fare: 5400, lastUpdated: '5 min ago', type: 'yellow' },
      { class: TrainClass._2A, status: 'AVAILABLE-0045', fare: 3200, lastUpdated: '5 min ago', type: 'green' },
      { class: TrainClass._3A, status: 'GNWL 14/WL 8', fare: 2250, lastUpdated: '5 min ago', type: 'red' }
    ],
    amenities: ['Catering', 'Linen', 'Charging', 'Reading Light']
  },
  {
    id: '6_RET',
    number: '12302',
    name: 'HOWRAH RAJDHANI',
    from: 'Howrah Jn',
    fromCode: 'HWH',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '16:50',
    arrival: '10:00',
    duration: '17h 10m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-010', fare: 5400, lastUpdated: '1 min ago', type: 'green' },
      { class: TrainClass._2A, status: 'AVAILABLE-0120', fare: 3200, lastUpdated: '1 min ago', type: 'green' },
      { class: TrainClass._3A, status: 'AVAILABLE-0210', fare: 2250, lastUpdated: '1 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Linen', 'Charging']
  },
  {
    id: '7',
    number: '12952',
    name: 'MUMBAI RAJDHANI',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Mumbai Central',
    toCode: 'MMCT',
    departure: '16:30',
    arrival: '08:35',
    duration: '16h 05m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-0004', fare: 4800, lastUpdated: '1 min ago', type: 'green' },
      { class: TrainClass._2A, status: 'AVAILABLE-0082', fare: 2850, lastUpdated: '1 min ago', type: 'green' },
      { class: TrainClass._3A, status: 'AVAILABLE-0145', fare: 1950, lastUpdated: '1 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Linen', 'Wi-Fi']
  },
  {
    id: '7_RET',
    number: '12951',
    name: 'MUMBAI RAJDHANI',
    from: 'Mumbai Central',
    fromCode: 'MMCT',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '17:00',
    arrival: '08:32',
    duration: '15h 32m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'WL 02', fare: 4800, lastUpdated: 'Just now', type: 'red' },
      { class: TrainClass._2A, status: 'AVAILABLE-0022', fare: 2850, lastUpdated: 'Just now', type: 'green' },
      { class: TrainClass._3A, status: 'RAC 45', fare: 1950, lastUpdated: 'Just now', type: 'yellow' }
    ],
    amenities: ['Catering', 'Linen', 'Wi-Fi']
  },
  {
    id: '8',
    number: '12002',
    name: 'BHOPAL SHATABDI',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Rani Kamlapati',
    toCode: 'RKMP',
    departure: '06:00',
    arrival: '14:40',
    duration: '08h 40m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0320', fare: 1550, lastUpdated: '10 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0024', fare: 2600, lastUpdated: '10 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Newspaper']
  },
  {
    id: '9',
    number: '22119',
    name: 'TEJAS EXPRESS',
    from: 'Chhatrapati Shivaji Maharaj T',
    fromCode: 'CSMT',
    to: 'Karmali',
    toCode: 'KRMI',
    departure: '05:50',
    arrival: '14:00',
    duration: '08h 10m',
    runsOn: ['T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0080', fare: 1680, lastUpdated: '2 min ago', type: 'green' },
      { class: TrainClass.EC, status: 'AVAILABLE-0015', fare: 3100, lastUpdated: '2 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Infotainment', 'Catering', 'Attendant']
  },
  {
    id: '10',
    number: '12260',
    name: 'DURONTO EXPRESS',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Sealdah',
    toCode: 'SDAH',
    departure: '19:40',
    arrival: '12:45',
    duration: '17h 05m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'GNWL 08/WL 04', fare: 3100, lastUpdated: '3 min ago', type: 'red' },
      { class: TrainClass._3A, status: 'RAC 12', fare: 2150, lastUpdated: '3 min ago', type: 'yellow' }
    ],
    amenities: ['Catering', 'Linen', 'High Speed']
  },
  {
    id: '11',
    number: '11061',
    name: 'LTT JAYNAGAR EXP',
    from: 'Lokmanya Tilak Term',
    fromCode: 'LTT',
    to: 'Jaynagar',
    toCode: 'JYG',
    departure: '11:30',
    arrival: '02:00',
    duration: '38h 30m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'Regret', fare: 3100, lastUpdated: '15 min ago', type: 'red' },
      { class: TrainClass._3A, status: 'WL 145', fare: 1900, lastUpdated: '15 min ago', type: 'red' },
      { class: TrainClass.SL, status: 'WL 400', fare: 750, lastUpdated: '15 min ago', type: 'red' }
    ],
    amenities: ['Pantry', 'Bio Toilet']
  },
  {
    id: '12',
    number: '12627',
    name: 'KARNATAKA EXPRESS',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'KSR Bengaluru City Jn',
    toCode: 'SBC',
    departure: '21:15',
    arrival: '12:00',
    duration: '38h 45m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-0002', fare: 5200, lastUpdated: '5 min ago', type: 'green' },
      { class: TrainClass._2A, status: 'RAC 10', fare: 3050, lastUpdated: '5 min ago', type: 'yellow' },
      { class: TrainClass._3A, status: 'WL 45', fare: 2100, lastUpdated: '5 min ago', type: 'red' }
    ],
    amenities: ['Pantry', 'Bio Toilet', 'Linen']
  },
  {
    id: '13',
    number: '12628',
    name: 'KARNATAKA EXPRESS',
    from: 'KSR Bengaluru City Jn',
    fromCode: 'SBC',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '19:20',
    arrival: '09:00',
    duration: '37h 40m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'WL 02', fare: 5200, lastUpdated: 'Just now', type: 'red' },
      { class: TrainClass._2A, status: 'AVAILABLE-0005', fare: 3050, lastUpdated: 'Just now', type: 'green' },
      { class: TrainClass._3A, status: 'RAC 15', fare: 2100, lastUpdated: 'Just now', type: 'yellow' }
    ],
    amenities: ['Pantry', 'Bio Toilet', 'Linen']
  },
  {
    id: '14',
    number: '12953',
    name: 'AUGUST KRANTI RAJ',
    from: 'Mumbai Central',
    fromCode: 'MMCT',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '17:10',
    arrival: '09:43',
    duration: '16h 33m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-0008', fare: 4800, lastUpdated: 'Just now', type: 'green' },
      { class: TrainClass._2A, status: 'AVAILABLE-0040', fare: 2850, lastUpdated: 'Just now', type: 'green' }
    ],
    amenities: ['Catering', 'Linen', 'Wi-Fi']
  },
  {
    id: '15',
    number: '12903',
    name: 'GOLDEN TEMPLE ML',
    from: 'Mumbai Central',
    fromCode: 'MMCT',
    to: 'Amritsar Jn',
    toCode: 'ASR',
    departure: '18:45',
    arrival: '05:30',
    duration: '34h 45m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'WL 45', fare: 2600, lastUpdated: '10 min ago', type: 'red' },
      { class: TrainClass._3A, status: 'WL 120', fare: 1800, lastUpdated: '10 min ago', type: 'red' }
    ],
    amenities: ['Pantry', 'Linen']
  },
  {
    id: '16',
    number: '12050',
    name: 'GATIMAN EXPRESS',
    from: 'VGL Jhansi Jn',
    fromCode: 'VGLJ',
    to: 'Hazrat Nizamuddin',
    toCode: 'NZM',
    departure: '15:05',
    arrival: '19:30',
    duration: '04h 25m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0200', fare: 950, lastUpdated: '1 min ago', type: 'green' }
    ],
    amenities: ['Hostess Service', 'Wi-Fi']
  },
  {
    id: '17',
    number: '12309',
    name: 'RJPB TEJAS RAJ',
    from: 'Patna Jn',
    fromCode: 'PNBE',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '19:10',
    arrival: '07:40',
    duration: '12h 30m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._1A, status: 'WL 05', fare: 4200, lastUpdated: 'Just now', type: 'red' },
      { class: TrainClass._2A, status: 'RAC 08', fare: 2500, lastUpdated: 'Just now', type: 'yellow' }
    ],
    amenities: ['Catering', 'Pantry']
  },
  {
    id: '18',
    number: '12621',
    name: 'TAMILNADU EXP',
    from: 'MGR Chennai Central',
    fromCode: 'MAS',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '22:00',
    arrival: '07:40',
    duration: '33h 40m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'AVAILABLE-0008', fare: 2850, lastUpdated: '1 hr ago', type: 'green' },
      { class: TrainClass._3A, status: 'RAC 45', fare: 1950, lastUpdated: '1 hr ago', type: 'yellow' }
    ],
    amenities: ['Pantry', 'Linen']
  },
  {
    id: '19',
    number: '12213',
    name: 'DURONTO EXPRESS',
    from: 'KSR Bengaluru City Jn',
    fromCode: 'SBC',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '23:40',
    arrival: '05:00',
    duration: '29h 20m',
    runsOn: ['S'],
    classes: [
      { class: TrainClass._1A, status: 'AVAILABLE-0006', fare: 5400, lastUpdated: '45 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Linen']
  },
  {
    id: '20',
    number: '12015',
    name: 'AJMER SHATABDI',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Ajmer Jn',
    toCode: 'AII',
    departure: '06:10',
    arrival: '12:55',
    duration: '06h 45m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0240', fare: 1150, lastUpdated: '2 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Newspaper']
  },
  {
    id: '21',
    number: '20171',
    name: 'VANDE BHARAT EXP',
    from: 'Rani Kamlapati',
    fromCode: 'RKMP',
    to: 'Hazrat Nizamuddin',
    toCode: 'NZM',
    departure: '05:40',
    arrival: '13:10',
    duration: '07h 30m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0150', fare: 1650, lastUpdated: '10 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Catering']
  },
  {
    id: '22',
    number: '20839',
    name: 'RANCHI RAJDHANI',
    from: 'Ranchi Jn',
    fromCode: 'RNC',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '18:10',
    arrival: '11:10',
    duration: '17h 00m',
    runsOn: ['W', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'RAC 05', fare: 2700, lastUpdated: '30 min ago', type: 'yellow' }
    ],
    amenities: ['Catering', 'Linen']
  },
  {
    id: '23',
    number: '12005',
    name: 'KALKA SHATABDI',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Kalka',
    toCode: 'KLK',
    departure: '17:15',
    arrival: '21:15',
    duration: '04h 00m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0310', fare: 950, lastUpdated: '5 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Newspaper']
  },
  {
    id: '24',
    number: '22439',
    name: 'VANDE BHARAT EXP',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Katra',
    toCode: 'SVDK',
    departure: '06:00',
    arrival: '14:00',
    duration: '08h 00m',
    runsOn: ['M', 'T', 'W', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass.CC, status: 'AVAILABLE-0100', fare: 1600, lastUpdated: '1 min ago', type: 'green' }
    ],
    amenities: ['Wi-Fi', 'Catering']
  },
  {
    id: '25',
    number: '12423',
    name: 'RAJDHANI EXP',
    from: 'Dibrugarh',
    fromCode: 'DBRG',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '20:55',
    arrival: '10:30',
    duration: '37h 35m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'WL 05', fare: 3500, lastUpdated: 'Just now', type: 'red' }
    ],
    amenities: ['Catering', 'Pantry']
  },
  {
    id: '26',
    number: '12424',
    name: 'RAJDHANI EXP',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Dibrugarh',
    toCode: 'DBRG',
    departure: '16:20',
    arrival: '05:55',
    duration: '37h 35m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._2A, status: 'AVAILABLE-0010', fare: 3500, lastUpdated: 'Just now', type: 'green' }
    ],
    amenities: ['Catering', 'Pantry']
  },
  {
    id: '27',
    number: '12801',
    name: 'PURUSHOTTAM EXP',
    from: 'Puri',
    fromCode: 'PURI',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '21:55',
    arrival: '04:00',
    duration: '30h 05m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._3A, status: 'WL 56', fare: 1800, lastUpdated: '5 min ago', type: 'red' }
    ],
    amenities: ['Pantry', 'Bio Toilet']
  },
  {
    id: '28',
    number: '12625',
    name: 'KERALA EXPRESS',
    from: 'Thiruvananthapuram',
    fromCode: 'TVC',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '12:20',
    arrival: '13:15',
    duration: '48h 55m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._3A, status: 'WL 150', fare: 2100, lastUpdated: 'Just now', type: 'red' }
    ],
    amenities: ['Pantry', 'Linen']
  },
  {
    id: '29',
    number: '12626',
    name: 'KERALA EXPRESS',
    from: 'New Delhi',
    fromCode: 'NDLS',
    to: 'Thiruvananthapuram',
    toCode: 'TVC',
    departure: '20:10',
    arrival: '21:00',
    duration: '48h 50m',
    runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    classes: [
      { class: TrainClass._3A, status: 'WL 89', fare: 2100, lastUpdated: 'Just now', type: 'red' }
    ],
    amenities: ['Pantry', 'Linen']
  },
  {
    id: '30',
    number: '12273',
    name: 'HOWRAH DURONTO',
    from: 'Howrah Jn',
    fromCode: 'HWH',
    to: 'New Delhi',
    toCode: 'NDLS',
    departure: '08:35',
    arrival: '06:05',
    duration: '21h 30m',
    runsOn: ['M', 'F'],
    classes: [
      { class: TrainClass._2A, status: 'AVAILABLE-0010', fare: 3200, lastUpdated: '10 min ago', type: 'green' }
    ],
    amenities: ['Catering', 'Linen']
  }
];
