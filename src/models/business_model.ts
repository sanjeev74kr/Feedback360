import mongoose from 'mongoose';

interface IBusiness {
  name: string,
  description: string,
  location: string,
  category: string

}

const businessSchema = new mongoose.Schema<IBusiness>(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }

  });


const businessModel: mongoose.Model<IBusiness> = mongoose.model('businesses', businessSchema);
export { IBusiness, businessModel };