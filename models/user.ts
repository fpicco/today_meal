import { Schema, model, models } from 'mongoose';

interface IUser {
  email: string;
  username: string;
  image?: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', userSchema);

export default User;
