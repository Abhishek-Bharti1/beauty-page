import React, { useState } from 'react';
import '../styles/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    profession: '',
    goal: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-header">
        FILL THE FORM BELOW TO ENQUIRE
      </div>
      <div className="form-group">
        <label>*Enter your name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Eg. Aneesha Mehra" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>*Enter your WhatsApp Number</label>
        <div className="phone-input">
          <select>
            <option value="+91">+91</option>
            {/* Add more country codes as needed */}
          </select>
          <input 
            type="text" 
            name="whatsapp" 
            placeholder="Eg. 0000000000" 
            value={formData.whatsapp} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      <div className="form-group">
        <label>*Select your profession</label>
        <select 
          name="profession" 
          value={formData.profession} 
          onChange={handleChange} 
          required
        >
          <option value="">Choose the most relevant option</option>
          {/* Add profession options here */}
        </select>
      </div>
      <div className="form-group">
        <label>*Select your goal</label>
        <select 
          name="goal" 
          value={formData.goal} 
          onChange={handleChange} 
          required
        >
          <option value="">Choose the most relevant option</option>
          {/* Add goal options here */}
        </select>
      </div>
      <div className="form-group">
        <label>*Select your city</label>
        <select 
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          required
        >
          <option value="">Choose the most relevant option</option>
          {/* Add city options here */}
        </select>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Form;
