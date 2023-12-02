import Bus from "../models/BusSchema.js";


export const addNewBus = async (req, res) => {
  const { CompanyID, BusNumber, TotalSeats, photo, EnRoute, bio, timeSlots } = req.body;

  try {

    let bus = null;

    // Create a new bus
     bus = new Bus({
      CompanyID,
      BusNumber,
      TotalSeats,
      photo,
      EnRoute,
      bio,
      timeSlots,
    });

    await bus.save();
    return res.status(200).json({ message: "Bus successfully added" });
  } 
  catch (err) {
    console.error("Error during bus signup:", err);
    return res.status(500).json({ success: false, message: "Internal server error", error: err });
  }
}


export const updateBus = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBus = await Bus.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedBus,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteBus = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Bus.findByIdAndDelete(
        id,
      );
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted",
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to delete" });
    }
  };
  
  
  export const getSingleBus = async (req, res) => {
    const id = req.params.id;
  
    try {
      const bus = await Bus.findById(id).select("-password");
  
      if (!Bus) {
        return res.status(404).json({ success: false, message: "No Bus found" });
      }
  
      res.status(200).json({
        success: true,
        message: "Bus found",
        data: bus,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  
  
  export const getAllBus = async (req, res) => {
  
    try {
      const bus = await Bus.find({}).select("-password");
  
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: bus,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "not found" });
    }
  };
  