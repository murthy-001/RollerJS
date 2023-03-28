import { Roller } from './Roller';

// describe("Smoke test", () => {
//   test("The test scaffold runs successfully.", () => {
//     expect(true).toBe(true);
//   });
// })

// describe("Roller tests", () => {
//   test("Description", () => {
//   });
// });

describe("Roller constructor", () => {
  it("should set _faces to the value passed in if it's greater than or equal to 2", () => {
    const roller = new Roller(4);
    expect(roller["_faces"]).toEqual(4);
  });

  it("should default _faces to 6 if the value passed in is less than 2", () => {
    const roller = new Roller(0);
    expect(roller["_faces"]).toEqual(6);
  });

  it("should set _distribution to an empty map", () => {
    const roller = new Roller(2);
    expect(roller["_distribution"]).toEqual(new Map());
  });

  it("should set _last to 0", () => {
    const roller = new Roller(2);
    expect(roller["_last"]).toEqual(0);
  });
});

describe('Roller class', () => {
  describe('roll() method', () => {
    it('should return 0 if the value provided is less than 1', () => {
      const roller = new Roller(6);
      expect(roller.roll(0)).toEqual(0);
    });

    it('should return 0 if the value provided is greater than the number of faces', () => {
      const roller = new Roller(6);
      expect(roller.roll(7)).toEqual(0);
    });

    it('should record the roll and return the same value if the value provided is between 1 and the number of faces (inclusive)', () => {
      const roller = new Roller(6);
      expect(roller.roll(3)).toEqual(3);
      expect(roller.roll(1)).toEqual(1);
      expect(roller.roll(6)).toEqual(6);
    });

    it('should set the last roll to 0 if no valid rolls have been made yet', () => {
      const roller = new Roller(6);
      expect(roller.last()).toEqual(0);
      roller.roll(3);
      roller.roll(1);
      expect(roller.last()).toEqual(1);
    });
  });
});

