import axios from 'axios';

const testLogin = async () => {
  const apiUrl = 'https://backend.vlai.in/auth/login';  // Replace with your actual backend URL

  const payload = {
    email: 'johndoe@example.com',  // Replace with actual email
    password: 'password123'        // Replace with actual password
  };

  try {
    const response = await axios.post(apiUrl, payload, { withCredentials: true });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

testLogin();
