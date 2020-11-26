'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
    { fid: 1, name: "How to Dance", description: 'Darius Freeman Dancing', url:'https://youtu.be/LXO-jKksQkM', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Survive", description: 'How to Survive', url:'https://youtu.be/Van2M5vQP9E', key:'Survival', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Draw", description: 'Drawing for dummies', url:'https://youtu.be/Zgmna_JOljE', key:'Drawing', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Cook", description: 'Salmon', url:'https://youtu.be/D9excd9CJLE', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Professionally Cook", description: 'Chef Ramsey teaches', url:'https://youtu.be/jD9VJ92xyzA', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Be Sarcastic", description: 'Sarcasm 101', url:'https://youtu.be/WefqSN8dqOU', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Take Control", description: 'taking control of situations', url:'https://youtu.be/dI7QcpHQudo', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Tell Jokes", description: 'Joking one oh one', url:'https://youtu.be/dI7QcpHQudo', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Drink Whiskey", description: 'Drankin', url:'https://youtu.be/Ve7cm-Kpko8', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Horror Walk", description: 'How to Creep MFers out.', url:'https://youtu.be/MF-LPsCsdr8?t=46', key:'dance', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
    { fid: 1, name: "How to Act", description: 'Joakin Pheonix Joker Role', url:'https://youtu.be/WbliHNs4q14', key:'Acting', comments: 'Oh My God, Darius Tae Freeman is sooo great.  He is the Joakin Pheonix of our Generation!'   delastMod: new Date(), createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Videos', null, {});
  }
};
