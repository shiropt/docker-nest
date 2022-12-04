import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
