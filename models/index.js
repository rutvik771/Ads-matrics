const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/sequelize-cli")[process.env.NODE_ENV || "development"];
const sequelize = require("../config/database")

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.FactAdMetricsDaily = require("./FactAdMetricsDaily")(sequelize, DataTypes);
db.DimAgeGroup = require("./DimAgeGroup")(sequelize, DataTypes);
db.DimDate = require("./DimDate")(sequelize, DataTypes);
db.DimDeviceType = require("./DimDeviceType")(sequelize, DataTypes);
db.DimGender = require("./DimGender")(sequelize, DataTypes);
db.DimPlacement = require("./DimPlacement")(sequelize, DataTypes);
db.DimPlatform = require("./DimPlatform")(sequelize, DataTypes);
db.DimRegion = require("./DimRegion")(sequelize, DataTypes);

db.FactAdMetricsDaily.belongsTo(db.DimDate, { foreignKey: "date_id",as: "date" });
db.FactAdMetricsDaily.belongsTo(db.DimRegion, { foreignKey: "region_id",as: "region" });
db.FactAdMetricsDaily.belongsTo(db.DimAgeGroup, { foreignKey: "age_id" ,as: "ageGroup"});
db.FactAdMetricsDaily.belongsTo(db.DimGender, { foreignKey: "gender_id",as: "gender" });
db.FactAdMetricsDaily.belongsTo(db.DimPlatform, {
  foreignKey: "platform_id",as: "platform"
});
db.FactAdMetricsDaily.belongsTo(db.DimPlacement, {
  foreignKey: "placement_id",as: "placement"
});
db.FactAdMetricsDaily.belongsTo(db.DimDeviceType, {
  foreignKey: "device_type_id",as: "deviceType"
});

module.exports = db;
