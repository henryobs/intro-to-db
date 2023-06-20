// name, img, price, quantity
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please specify a name"]
  },
  img: {
    type: String,
    required: [true, "Please specify a img"]
  },
  price: {
    type: Number,
    required: [true, "Please specify a price"],
    min: [1, "Price cannot be less than 0 naira"]
  },
  quantity: {
    type: Number,
    required: [true, "Please specify a quantity"],
    min: [1, "Quatity must be above zero"]
  }
}, { timestamps: true });

const productModel = mongoose.model('product', productSchema);

export default productModel;
