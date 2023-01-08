
const Intern = require('../lib/InternClass');

describe(('Intern'), () => {
  describe(('getSchool'), () => {
    it('should return the school of the intern', () => {
      const school = 'UNB';
      const result = new Intern('bob', 10, 'bob@email.com', school);
      expect(result.getSchool()).toBe(school);
    })
  })
  describe(('getRole'), () => {
    it('should return the role of the employee', () => {
      const result = new Intern('bob', 10, 'bob@email.com', 'UNB');
      expect(result.getRole()).toBe(Intern);
    })
  })
})