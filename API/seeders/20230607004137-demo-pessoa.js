'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				ativo: true,
				email: 'ana@ana.com',
				roole: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@marcos.com',
				roole: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				roole: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@sandra.com',
				roole: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				ativo: true,
				email: 'paula@paula.com',
				roole: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@sergio.com',
				roole: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}

