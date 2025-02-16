export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;       
    link: string;        // link to the real product on kaspi.kz
    gallery?: string[];  
}
  