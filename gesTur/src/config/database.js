module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gesTur',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
