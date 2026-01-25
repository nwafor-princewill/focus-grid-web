// src/utils/cloudinaryUpload.ts

/**
 * Upload files to Cloudinary and return their URLs
 * @param files - Array of File objects to upload
 * @returns Promise<string[]> - Array of secure URLs
 */
export const uploadFilesToCloudinary = async (files: File[]): Promise<string[]> => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary configuration missing. Check your .env file.');
  }

  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    // Determine file type
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const isPDF = fileExtension === 'pdf';
    const isDocument = ['pdf', 'doc', 'docx', 'zip', 'txt'].includes(fileExtension || '');
    
    // Use 'raw' resource type for documents, 'auto' for images
    const resourceType = isDocument ? 'raw' : 'auto';

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed for ${file.name}`);
      }

      const data = await response.json();
      
      // For PDFs, add fl_attachment flag to force download
      if (isPDF) {
        // Insert fl_attachment before /upload/
        return data.secure_url.replace('/upload/', '/upload/fl_attachment/');
      }
      
      return data.secure_url;
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
      throw error;
    }
  });

  return Promise.all(uploadPromises);
};