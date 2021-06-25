export default {
  saltWorkFactor: 10,
  mongo: {
    host: process.env.MONGO_HOST || "mongo",
    port: process.env.MONGO_PORT || "27017",
    db: process.env.MONGO_DB || "ecom_ts",
  },
};
