import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiHeader,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePostDto, PostResponse } from './dto/post.dto';
import { Prisma } from '@prisma/client';
import { PostService } from './post.service';
import { CreatePostResponse } from './response/post.response';

@ApiTags('投稿API')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  @ApiOkResponse({ type: PostResponse })
  async getPost(@Param('id') id: string) {
    return this.postService.getPost(parseInt(id, 10));
  }

  @Get()
  @ApiOkResponse({ type: PostResponse, isArray: true })
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post()
  async createPost(@Body() post: CreatePostDto): Promise<PostResponse> {
    return this.postService.createPost(post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(parseInt(id, 10));
  }
}
