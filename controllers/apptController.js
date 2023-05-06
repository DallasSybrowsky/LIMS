import Appts from "../models/Appts";

export const getAllAppts = async (req, res) => {
  try {
    const appts = await Appts.find();
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getApptById = async (req, res) => {
  try {
    const appt = await Appts.findById(req.params.id);
    if (!appt) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }
    res.json(appt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAppt = async (req, res) => {
  const appt = new Appts(req.body);
  try {
    const newAppt = await appt.save();
    res.status(201).json(newAppt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAppt = async (req, res) => {
  try {
    const appt = await Appts.findById(req.params.id);
    if (!appt) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }
    appt.set(req.body);
    const updatedAppt = await appt.save();
    res.json(updatedAppt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAppt = async (req, res) => {
  try {
    const appt = await Appts.findById(req.params.id);
    if (!appt) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }
    await appt.remove();
    res.json({ message: "Appointment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
