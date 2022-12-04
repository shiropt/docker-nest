import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiHeader,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Post as PostModel, Prisma } from '@prisma/client';
import { CreatePostDto, PostResponse } from './dto/post.dto';
import { PostService } from './post.service';
import { CreatePostResponse } from './response/post.response';

@ApiTags('投稿API')
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPost(@Param('id') id: string): Promise<PostModel | null> {
    return this.postService.getPost(parseInt(id, 10));
  }

  @Get()
  async getPosts(): Promise<PostModel[] | null> {
    return this.postService.getPosts();
  }

  @Post()
  @ApiOkResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async createPost(@Body() post: CreatePostDto): Promise<PostResponse> {
    return this.postService.createPost(post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost(parseInt(id, 10));
  }
}
