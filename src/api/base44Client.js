import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68cbcfe7f9dca4798a252b0b", 
  requiresAuth: true // Ensure authentication is required for all operations
});
