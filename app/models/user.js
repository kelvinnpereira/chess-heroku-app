'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_curso: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
  });
  user.associate = function(models) {
    user.belongsTo(models.curso,    {foreignKey: 'id_curso' , as: 'id_curso_fk'});
    user.hasMany  (models.partida,  {foreignKey: 'id_user_1', as: 'user1'});
    user.hasMany  (models.partida,  {foreignKey: 'id_user_2', as: 'user2'});
    user.hasMany  (models.partida,  {foreignKey: 'winner'   , as: 'user_winner'});
    user.hasMany  (models.mensagem, {foreignKey: 'id_user'  , as: 'id_user_fk'});
  };
  return user;
};