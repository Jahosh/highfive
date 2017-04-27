exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0;')
  .then(() => {
    return knex('submission').del()
      .then(() => {
        // Inserts seed entries
        return knex('submission').insert([
          {
            id: 1,
            user_id: 1,
            jobpost_id: 1,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 2,
            user_id: 1,
            jobpost_id: 1,
            status: 'passed',
            completed: 1,
            notes: ''
          },
          {
            id: 3,
            user_id: 2,
            jobpost_id: 2,
            status: 'viewed',
            completed: 0,
            notes: ''
          },
          {
            id: 4,
            user_id: 2,
            jobpost_id: 2,
            status: 'failed',
            completed: 1,
            notes: ''
          },
          {
            id: 5,
            user_id: 3,
            jobpost_id: 3,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 6,
            user_id: 3,
            jobpost_id: 3,
            status: null,
            completed: 1,
            notes: ''
          },
          //below is what Sandra added
          {
            id: 7,
            user_id: 1,
            jobpost_id: 31,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 8,
            user_id: 2,
            jobpost_id: 31,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 9,
            user_id: 3,
            jobpost_id: 31,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 10,
            user_id: 4,
            jobpost_id: 31,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 11,
            user_id: 5,
            jobpost_id: 31,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 12,
            user_id: 6,
            jobpost_id: 31,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 13,
            user_id: 7,
            jobpost_id: 31,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 14,
            user_id: 8,
            jobpost_id: 31,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 15,
            user_id: 9,
            jobpost_id: 31,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 16,
            user_id: 10,
            jobpost_id: 31,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 17,
            user_id: 1,
            jobpost_id: 63,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 18,
            user_id: 2,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 19,
            user_id: 3,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 20,
            user_id: 4,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 21,
            user_id: 5,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 22,
            user_id: 6,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 23,
            user_id: 7,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 24,
            user_id: 8,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 25,
            user_id: 9,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 26,
            user_id: 10,
            jobpost_id: 63,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 32,
            user_id: 7,
            jobpost_id: 15,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 33,
            user_id: 8,
            jobpost_id: 15,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 34,
            user_id: 9,
            jobpost_id: 15,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 35,
            user_id: 10,
            jobpost_id: 15,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 36,
            user_id: 1,
            jobpost_id: 47,
            status: null,
            completed: 0,
            notes: ''
          },
          {
            id: 37,
            user_id: 2,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 38,
            user_id: 3,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 39,
            user_id: 4,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 40,
            user_id: 5,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 41,
            user_id: 6,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 42,
            user_id: 7,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 43,
            user_id: 8,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 44,
            user_id: 9,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 45,
            user_id: 10,
            jobpost_id: 47,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 47,
            user_id: 2,
            jobpost_id: 79,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 49,
            user_id: 4,
            jobpost_id: 79,
            status: null,
            completed: 1,
            notes: ''
          },
          {
            id: 50,
            user_id: 5,
            jobpost_id: 79,
            status: null,
            completed: 1,
            notes: ''
          },
        ]);
    });
  });
};
