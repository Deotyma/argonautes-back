import mongoose from 'mongoose';

const Argonaute = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

export default mongoose.model ('Argonaute', Argonaute);