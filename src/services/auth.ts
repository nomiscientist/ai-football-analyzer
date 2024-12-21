import { useState } from 'react';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export const registerUser = async (username: string, email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const logoutUser = async (): Promise<void> => {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });
};