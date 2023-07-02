import { Schema, model } from 'mongoose';

const recipeSchema = new Schema<IRecipe>({
  title: {
    type: String,
    required: [true, 'Email is required'],
  },
  ingredients: {
    type: [String],
    required: [true, 'Username is required'],
  },
  image:{
    type:String,
  }
});

const User = model<IRecipe>('User', recipeSchema);

export default User;
