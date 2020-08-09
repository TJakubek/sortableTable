declare global {
  interface Data {
    city: string;
    company: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }

  interface ApiData extends Data {
    address: { city: string };
    company: { name: string };
  }

  interface SortData {
    id: string;
    dir: SortOrder;
    sort: Data[];
  }

  interface HoveredCellData {
    row: number;
    column: number;
  }
}

export {};
