import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  project_type: { type: String, required: true },
  project_description: { type: String },
  budget_min: { type: Number, required: true },
  budget_max: { type: Number, required: true },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
