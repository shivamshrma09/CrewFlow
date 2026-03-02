const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const joinWaitlist = async (email, suggestion, rating) => {
  try {
    const response = await fetch(`${API_URL}/api/waitlist/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, suggestion, rating }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to join waitlist');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
