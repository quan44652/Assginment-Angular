import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    sticker: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    priceNew: {
      type: Number,
      required: true,
    },
    priceOld: {
      type: Number,
      required: true,
    },
    promotionId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Promotion",
        autopopulate: true,
      },
    ],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      autopopulate: true,
    },
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", productSchema);
