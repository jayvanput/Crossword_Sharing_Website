const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const squareSchema = new Schema({
    black: { type: Number, required: true },
    number: { type: Number, required: false },
    next_tab: { type: Number, required: true },
    prev_tab: { type: Number, required: true },
    next_tab_down: { type: Number, required: true },
    prev_tab_down: { type: Number, required: true },
    across_clue: { type: Number, required: true },
    down_clue: { type: Number, required: true }
})

const clueSchema = new Schema({
    number: { type: Number, required: true },
    text: { type: String, required: true },
    direction: { type: Number, required: true },
})

const crosswordSchema = new Schema({
    title: { type: String, required: false },
    date_created: { type: Date, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    squares: [squareSchema],
    clues: [clueSchema]
}, {
    timestamps: true,
})

const Crossword = mongoose.model('crossword', crosswordSchema);

module.exports = Crossword;