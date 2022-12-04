import { Post } from '@prisma/client';

export class PostResponse implements Post {
  id: number;

  title: string;

  content: string;

  published: boolean;

  authorId: number;
}

export class CreatePostDto implements Omit<Post, 'id'> {
  title: string;

  content: string;

  published: boolean;

  authorId: number;
}
