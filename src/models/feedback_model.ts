import mongoose, { Types } from "mongoose";

interface IFeedback {
  businessId: Types.ObjectId;
  ratings: number;
  reviews: string;

}

const feedbackSchema = new mongoose.Schema<IFeedback>({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'businesses',
    required: true
  },
  ratings: {
    type: Number,
    required: true
  },
  reviews: {
    type: String,
  },
});


const feedbackModel = mongoose.model<IFeedback>('feedbacks', feedbackSchema);
export { IFeedback, feedbackModel };