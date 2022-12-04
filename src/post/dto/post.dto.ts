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
const ACTIVITIES = {
  DESIGNER: '1',
  FRONTEND_ENGINEER: '2',
  BACKEND_ENGINEER: '3',
  INFRASTRUCTURE_ENGINEER: '4',
  DIRECTOR: '5',
} as const;
