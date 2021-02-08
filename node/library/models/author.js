const { DateTime } = require("luxon");

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    family_name: { type: String, required: true, maxlength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
    return this.family_name + ", " + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function () {
    return (
        this.date_of_death.getYear() - this.date_of_birth.getYear()
    ).toString();
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
    return "/catalog/author/" + this._id;
});

// Virtual for author's date of birth formatted for text
AuthorSchema.virtual("date_of_birth_formatted").get(function () {
    if (this.date_of_birth) {
        return DateTime.fromJSDate(this.date_of_birth).toLocaleString(
            DateTime.DATE_MED
        );
    } else {
        return "unknown";
    }
});

// Virtual for author's date of death formatted for text
AuthorSchema.virtual("date_of_death_formatted").get(function () {
    if (this.date_of_death) {
        return DateTime.fromJSDate(this.date_of_death).toLocaleString(
            DateTime.DATE_MED
        );
    } else {
        return "";
    }
});

// Virtual for author's date of birth formatted for form
AuthorSchema.virtual("date_of_birth_formatted_form").get(function () {
    if (this.date_of_birth) {
        return DateTime.fromJSDate(this.date_of_birth).toISODate();
    } else {
        return "unknown";
    }
});

// Virtual for author's date of death formatted for form
AuthorSchema.virtual("date_of_death_formatted_form").get(function () {
    if (this.date_of_death) {
        return DateTime.fromJSDate(this.date_of_death).toISODate();
    } else {
        return "unknown";
    }
});

//Export model
module.exports = mongoose.model("Author", AuthorSchema);
