import { Post } from '@prisma/client';

export class CreatePostResponse implements Post {
  id: number;

  title: string;

  content: string;

  published: boolean;

  authorId: number;
}
