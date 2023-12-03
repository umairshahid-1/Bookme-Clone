const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {

  // Create a new FormData object and append the file, upload preset, and cloud name
  const uploadData = new FormData();
  
  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset);
  uploadData.append("cloud_name", cloud_name);

  // Use the Fetch API to make a POST request to Cloudinary's image upload endpoint
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "post",
      body: uploadData,
    }
  );

  // Parse the response JSON
  const data = await res.json();

  // Return the data (presumably containing information about the uploaded image)
  return data;
};

// Export the uploadImageToCloudinary function as the default export of the module
export default uploadImageToCloudinary;
