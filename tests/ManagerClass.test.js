
const Manager = require('../lib/ManagerClass');

describe(('Manager'), () => {
  describe('getRole', () => {
    it('should return the role of the employee', () => {
      const result = new Manager('bob', 10, 'bob@email.com', 2);
      expect(result.getRole()).toBe(Manager);
    })
  })
})