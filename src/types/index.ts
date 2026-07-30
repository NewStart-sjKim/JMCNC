export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrls: string[];
  order: number;
  createdAt: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  category: "Notice" | "Tech Update" | "Holiday" | "Urgent";
  isPinned: boolean;
  views: number;
  createdAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  material: string;
  quantity: string;
  deadline: string;
  message: string;
  fileUrls: string[];
  status: "new" | "checked";
  createdAt: string;
}
