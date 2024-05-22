export interface IRecommendUser {
  id: Number;
  user_id: Number;
  nickname: string;
  bio: string | null;
  avatar_url: string | "https://placehold.it/100x100";
  priority: string | null;
  is_company: Number;
  is_real: Number;
  fullname: string;
  role: "admin" | "user";
  sex: "male" | "female";
  email: string;
}

export interface IImage {
  created_at: Date;
  id: 2;
  image_id: string;
  image_url: string;
  updated_at: Date;
}

export interface IPostPaginate {
  post_id: Number;
  user_id: Number;
  images_id: Array<IImage>;
  post_detail: {
    caption: string;
    created_at: Date;
    id: Number;
    like_total: number;
    updated_at: Date;
    user_id: Number;
  };
  user_profile: {
    avatar_url: string | "https://placehold.it/100x100";
    bio: string;
    id: Number;
    is_company: Number;
    is_real: Number;
    nickname: string;
    priority: string;
    user_id: Number;
  };
}
