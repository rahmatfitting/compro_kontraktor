export type ProjectType = 'rumah' | 'ruko' | 'renovasi';

export type Project = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: ProjectType;
  year: number;
  image: string;
  city: string;
  value: string;
  client: string;
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Villa Arkana Uluwatu',
    lat: -8.8291,
    lng: 115.0884,
    type: 'rumah',
    year: 2023,
    image: '/projects/villa-bali.jpg',
    city: 'Bali',
    value: 'Rp 4.5 Miliar',
    client: 'Bpk. Surya Wijaya'
  },
  {
    id: '2',
    name: 'Modern Residence Menteng',
    lat: -6.2017,
    lng: 106.8315,
    type: 'rumah',
    year: 2022,
    image: '/projects/menteng.jpg',
    city: 'Jakarta Pusat',
    value: 'Rp 8.2 Miliar',
    client: 'Ibu Anita'
  },
  {
    id: '3',
    name: 'Ruko Artha Gading Junction',
    lat: -6.1481,
    lng: 106.8927,
    type: 'ruko',
    year: 2021,
    image: '/projects/ruko-gading.jpg',
    city: 'Jakarta Utara',
    value: 'Rp 3.1 Miliar',
    client: 'PT Maju Bersama'
  },
  {
    id: '4',
    name: 'Renovasi Interior Penthouse SCBD',
    lat: -6.2241,
    lng: 106.8115,
    type: 'renovasi',
    year: 2023,
    image: '/projects/scbd.jpg',
    city: 'Jakarta Selatan',
    value: 'Rp 1.5 Miliar',
    client: 'Bpk. James Robertson'
  },
  {
    id: '5',
    name: 'Arkana Office Suite Bandung',
    lat: -6.9175,
    lng: 107.6191,
    type: 'ruko',
    year: 2022,
    image: '/projects/office-bdg.jpg',
    city: 'Bandung',
    value: 'Rp 5.8 Miliar',
    client: 'CV Kreatif Mandiri'
  },
  {
    id: '6',
    name: 'Minimalist House Surabaya',
    lat: -7.2575,
    lng: 112.7521,
    type: 'rumah',
    year: 2023,
    image: '/projects/surabaya.jpg',
    city: 'Surabaya',
    value: 'Rp 2.9 Miliar',
    client: 'Ibu Linda'
  },
  {
    id: '7',
    name: 'Renovasi Klinik Utama Medan',
    lat: 3.5952,
    lng: 98.6722,
    type: 'renovasi',
    year: 2021,
    image: '/projects/klinik-medan.jpg',
    city: 'Medan',
    value: 'Rp 1.2 Miliar',
    client: 'dr. Hendra Sp.A'
  },
  {
    id: '8',
    name: 'Townhouse Alam Sutera',
    lat: -6.2384,
    lng: 106.6548,
    type: 'rumah',
    year: 2022,
    image: '/projects/townhouse.jpg',
    city: 'Tangerang',
    value: 'Rp 3.5 Miliar',
    client: 'Bpk. Rudy'
  }
];
