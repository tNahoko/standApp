exports.up = function (knex) {
  return knex.schema.createTable("list", (table) => {
    table.increments("id");

    table.date("date").notNullable();

    table.string("desc", 50).notNullable();

    table.enu("status", ["done", "pending", "cancel"]).notNullable();
  });
};

exports.down = function (knex) {};