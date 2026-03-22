export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificates: Certificate[] = [];