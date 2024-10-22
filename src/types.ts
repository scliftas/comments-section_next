export type Image = {
  png: string;
  webp: string;
};

export type User = {
  image: Image;
  username: string;
};

export interface Reply extends Comment {
  replyingTo: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Reply[];
}
