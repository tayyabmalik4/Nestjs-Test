import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Book } from './Schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }
}
