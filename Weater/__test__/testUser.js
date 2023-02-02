import axios from 'axios';
const baseUrl = process.env.baseUrl

describe('User Login and Register API', () => {
  test('Successful login', async () => {
    const response = await axios.post(`${baseUrl}/login`, {
      email: 'test@email.com',
      password: 'password123'
    });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
  });

  test('Failed login due to incorrect password', async () => {
    try {
      await axios.post(`${baseUrl}/login`, {
        email: 'test@email.com',
        password: 'incorrectpassword'
      });
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data).toEqual({
        error: 'Email or password is incorrect'
      });
    }
  });

  test('Successful registration', async () => {
    const response = await axios.post(`${baseUrl}/register`, {
      name: 'Test User',
      email: 'newtest@email.com',
      password: 'password123'
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('token');
  });

  test('Failed registration due to missing data', async () => {
    try {
      await axios.post(`${baseUrl}/register`, {
        name: '',
        email: 'newtest@email.com',
        password: 'password123'
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual({
        error: 'Name, email, and password are required'
      });
    }
  });
});
