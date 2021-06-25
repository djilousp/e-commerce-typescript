conn = new Mongo();
db = conn.getDB("admin");

db.createUser({
  user: "ecom",
  pwd: "secret",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" },
  ],
});
db = conn.getDB("ecom_ts");
db.createUser({
  user: "ecom",
  pwd: "secret",
  roles: [],
});
db.grantRolesToUser("ecom", [{ role: "readWrite", db: "ecom_ts" }]);
db.createCollection("delete_me");
