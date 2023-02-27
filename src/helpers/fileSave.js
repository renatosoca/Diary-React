export const fileSave = async ( file ) => {
  if ( !file ) throw new Error('file is required');

  const cloudURL = `https://api.cloudinary.com/v1_1/projeccts-reacct/upload`;
  const formData = new FormData();
  formData.append('upload_preset', 'journal-react');
  formData.append('file', file);

  try {
    const resp = await fetch( cloudURL, {
      method: 'POST',
      body: formData
    });
    if ( !resp.ok ) throw new Error('Error uploading image');
    
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error);
  }
}
