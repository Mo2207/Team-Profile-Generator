
const Engineer = require('../lib/EngineerClass');

describe(('Engineer'), () => {
  describe('getGithub', () => {
    it('should return the Github username of the employee', () => {
      const githubUsername = 'bobsGithub';
      const result = new Engineer('bob', 10, 'bob@email.com', githubUsername);
      expect(result.getGithub()).toBe(githubUsername);
    })
  })
  describe('getRole', () => {
    it('should return the role of the employee', () => {
      const githubUsername = 'bobsGithub';
      const result = new Engineer('bob', 10, 'bob@email.com', 'bobsGithub');
      expect(result.getRole()).toBe(Engineer);
    })
  })
})