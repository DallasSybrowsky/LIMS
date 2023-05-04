import { Schema, Types } from ('mongoose');

const apptSchema = new Schema({
    apptId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    apptDate: {
        type: Date,
        required: true,
    },
    apptTime: {
        type: String,
        required: true,
    },
    apptType: {
        type: String,
        required: true,
    },
    apptNotes: {
        type: String,
        required: true,
    },
    petId: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client",
    },
});

module.exports = apptSchema;