import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('celula', table => {
    table.increments('id_celula').notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('dias_celulas').notNullable();
    table.string('hours').notNullable();  
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('celula');
}

