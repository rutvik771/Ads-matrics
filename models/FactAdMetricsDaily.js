module.exports = (sequelize, DataTypes) => {
  const FactAdMetricsDaily = sequelize.define("FactAdMetricsDaily", {
    fact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    platform_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    placement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    impressions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    conversions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    custom_metrics: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
    },
  });
  FactAdMetricsDaily.associate = (models) => {
    FactAdMetricsDaily.belongsTo(models.DimDate, { foreignKey: "date_id",as: "date" });
    FactAdMetricsDaily.belongsTo(models.DimRegion, { foreignKey: "region_id",as: "region" });
    FactAdMetricsDaily.belongsTo(models.DimAgeGroup, { foreignKey: "age_id" ,as: "ageGroup"});
    FactAdMetricsDaily.belongsTo(models.DimGender, { foreignKey: "gender_id",as: "gender" });
    FactAdMetricsDaily.belongsTo(models.DimPlatform, {
      foreignKey: "platform_id",as: "platform"
    });
    FactAdMetricsDaily.belongsTo(models.DimPlacement, {
      foreignKey: "placement_id",as: "placement"
    });
    FactAdMetricsDaily.belongsTo(models.DimDeviceType, {
      foreignKey: "device_type_id",as: "deviceType"
    });
  };
  return FactAdMetricsDaily;
};
