exports.seed = function (knex) {
  return (
    knex('vegetables')
      // Deletes ALL existing entries
      // truncate() deletes existing entries while also reseting ID's
      .truncate()
      .then(function () {
        // Inserts seed entries
        return knex('vegetables').insert([
          { name: 'Cilantro', color: 'green' },
          { name: 'cucumber', color: 'green' },
          { name: 'lettuce', color: 'green' },
        ]);
      })
  );
};
