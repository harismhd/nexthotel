import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    cuisine: "",
    location: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("hotels").insert([formData]);

      if (error) {
        throw error;
      }

      console.log("Restaurant added successfully:", data);

      setFormData({
        title: "",
        description: "",
        image: "",
        cuisine: "",
        location: "",
        text: "",
      });
    } catch (error) {
      //   console.error("Error adding restaurant:", error .message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Text"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Restaurant
      </button>
    </form>
  );
};

export default AddRestaurantForm;
