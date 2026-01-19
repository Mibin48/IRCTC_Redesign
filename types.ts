
export enum TrainClass {
  ALL = 'All Classes',
  SL = 'Sleeper (SL)',
  _3A = 'AC 3 Tier (3A)',
  _2A = 'AC 2 Tier (2A)',
  _1A = 'AC First Class (1A)',
  CC = 'AC Chair Car (CC)',
  EC = 'Exec. Chair Car (EC)',
  _2S = 'Second Sitting (2S)',
  _3E = 'AC 3 Economy (3E)',
  VBC = 'Vande Bharat Chair Car',
  VBE = 'Vande Bharat Executive'
}

export enum Quota {
  GENERAL = 'GENERAL',
  LADIES = 'LADIES',
  LOWER_BERTH = 'LOWER BERTH/SR. CITIZEN',
  PERSON_WITH_DISABILITY = 'PERSON WITH DISABILITY',
  DUTY_PASS = 'DUTY PASS',
  TATKAL = 'TATKAL',
  PREMIUM_TATKAL = 'PREMIUM TATKAL'
}

export interface Availability {
  class: TrainClass;
  status: string; // e.g., 'AVAILABLE-0045'
  fare: number;
  lastUpdated: string;
  type: 'green' | 'yellow' | 'red';
}

export interface Train {
  id: string;
  number: string;
  name: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departure: string;
  arrival: string;
  duration: string;
  runsOn: string[]; // ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  classes: Availability[];
  amenities: string[];
}

export interface Station {
  code: string;
  name: string;
}
