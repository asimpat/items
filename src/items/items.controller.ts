import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createDto';
import { ItemsService } from './items.service';
import { Item } from './Schema/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  // get all items
  @Get('all')
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  // get item by the id
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  // create item
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItemDto);
  }

  // update item by id
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemService.updateItem(id, updateItemDto);
  }

  // delete item by id
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.deleteItem(id);
  }
}
