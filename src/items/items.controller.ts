import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemsDto } from './dto/createItems.dto';
import { ItemsService } from './items.service';
import { Item } from './Schema/items.schema';
import { UpdateItemsDto } from './dto/updateItems.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('all')
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAllItems();
  }

  @Get(':id')
  async findOne(@Param('id') id){
    return await this.itemsService.findAllById(id);
  }

  @Post()
  async createItems(@Body() item: CreateItemsDto): Promise<Item> {
    return await this.itemsService.createItem(item);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: string,
    @Body() updateItem: UpdateItemsDto,
  ) {
    return await this.itemsService.updateItems(id, updateItem);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id) {
    return await this.itemsService.deleteItem(id);
  }
}
