import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './Schema/items.schema';
import { CreateItemsDto } from './dto/createItems.dto';
import { UpdateItemsDto } from './dto/updateItems.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemmodel: Model<Item>) {}

  async findAllItems(): Promise<Item[]> {
    const findAll = await this.itemmodel.find();
    return findAll;
  }

  async createItem(item: CreateItemsDto): Promise<Item> {
    const addItems = await this.itemmodel.create(item);
    return addItems.save();
  }

  async findAllById(id) {
    const findItem = await this.itemmodel.findById(id);
    if (!findItem) {
      return { msg: `item does not exist` };
    }
    return findItem;
  }

  async updateItems(id: string, updateItem: UpdateItemsDto) {
    const editItem = await this.itemmodel.findByIdAndUpdate(id, updateItem, {
      new: true,
    });
    if (!editItem) {
      return { msg: `item does not exist` };
    }
    return editItem;
  }

  async deleteItem(id: string) {
    const deleteItem = await this.itemmodel.findByIdAndDelete(id);
    if (!deleteItem) {
      return { msg: `item does not exist` };
    }
    return { msg: `Succesfully deleted` };
  }
}
