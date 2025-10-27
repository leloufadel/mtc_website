export interface User {
  id: number;
  username: string;
  password: string;
  created_at: Date;
}

export interface BlogMedia {
  id: number;
  blog_id: number;
  url: string;
  media_type: 'image' | 'video';
  file_name: string;
  file_size?: number;
  display_order: number;
  created_at: Date;
}

export interface Blog {
  id: number;
  user_id: number;
  title: string;
  content: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
  author?: string;
  media?: BlogMedia[];
}

export interface BlogCreateInput {
  title: string;
  content: string;
  published: boolean;
  user_id: number;
}

export interface BlogUpdateInput {
  title?: string;
  content?: string;
  published?: boolean;
}

export interface MediaUploadResponse {
  success: boolean;
  data?: {
    id: number;
    url: string;
    media_type: 'image' | 'video';
    file_name: string;
  };
  error?: string;
}

