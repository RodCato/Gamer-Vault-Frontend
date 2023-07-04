import mockUsers from "../mockUsers"
describe('Mock Users Component', () => {
    it('should contain an array of users with the correct structure', () => {
      expect(Array.isArray(mockUsers)).toBe(true);
  
      mockUsers.forEach(user => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(typeof user.id).toBe('number');
        expect(typeof user.email).toBe('string');
        expect(user.email).toContain('@');
      });
    });
  
    it('should have unique user IDs', () => {
      const userIds = mockUsers.map(user => user.id);
      const uniqueUserIds = [...new Set(userIds)];
  
      expect(userIds.length).toBe(uniqueUserIds.length);
    });
  });