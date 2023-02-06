const { registerUser } = require('../controllers/userController');
const User = require('../models/userModel');
jest.mock('../models/userModel');

describe('registerUser', () => {
  beforeEach(() => {
    User.findOne.mockReset();
    User.create.mockReset();
  });

  it('registers a user', async () => {
    User.findOne.mockReturnValueOnce(null);
    User.create.mockReturnValueOnce({
      userName: 'Test User',
      email: 'test@example.com',
      password: 'password'
    });

    const req = {
      body: {
        userName: 'Test User',
        email: 'test@example.com',
        password: 'password'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
  
      userName: 'Test User',
      email: 'test@example.com',
      
    });
  });

  it('throws an error if the user already exists', async () => {
    User.findOne.mockReturnValueOnce({});

    const req = {
      body: {
        userName: 'Test User',
        email: 'test@example.com',
        password: 'password'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    try {
      await registerUser(req, res);
      fail();
    } catch (error) {
      expect(error.message).toBe('User already exists');
    }
  });

  it('throws an error if userName, email, or password is missing', async () => {
    User.findOne.mockReturnValueOnce(null);

    const req = {
      body: {
        userName: 'Test User',
        email: 'test@example.com'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    try {
      await registerUser(req, res);
      fail();
    } catch (error) {
      expect(error.message).toBe('Please add all fields');
    }
  });
});