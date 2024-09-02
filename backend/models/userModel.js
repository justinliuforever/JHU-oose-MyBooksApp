import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    likedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);

