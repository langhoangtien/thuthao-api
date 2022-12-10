import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create(createCategoryDto);
  }

  async findAll() {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    return this.categoryModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    // return this.categoryModel.findOneAndUpdate()

    const category = await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto)
      .setOptions({ new: true });
    return category;
  }

  async remove(id: string) {
    const deletedCategory = await this.categoryModel.findByIdAndRemove({ _id: id }).exec();
    return deletedCategory;
  }
}
