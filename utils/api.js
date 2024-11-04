// In api.js
import { supabase } from './supabaseClient';

export const fetchQuizImages = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('quiz-images') // Replace with your bucket name
      .list();

    if (error) {
      throw error;
    }

    // Map the fetched data to include both name and URL
    const images = data.map((file) => ({
      name: file.name,
      url: `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/quiz-images/${file.name}`,
    }));

    return images;
  } catch (error) {
    console.error('Error fetching quiz images:', error.message);
    return [];
  }
};
