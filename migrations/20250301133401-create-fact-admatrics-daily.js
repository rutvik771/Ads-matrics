"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FactAdMetricsDaily", {
      fact_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      region_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      placement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      device_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      impressions: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clicks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      conversions: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      custom_metrics: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // Add foreign key constraints
    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["date_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_date_id",
      references: {
        table: "DimDate",
        field: "date_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["region_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_region_id",
      references: {
        table: "DimRegion",
        field: "region_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["age_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_age_id",
      references: {
        table: "DimAgeGroup",
        field: "age_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["gender_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_gender_id",
      references: {
        table: "DimGender",
        field: "gender_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["platform_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_platform_id",
      references: {
        table: "DimPlatform",
        field: "platform_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["placement_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_placement_id",
      references: {
        table: "DimPlacement",
        field: "placement_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("FactAdMetricsDaily", {
      fields: ["device_type_id"],
      type: "foreign key",
      name: "fk_fact_ad_metrics_daily_device_type_id",
      references: {
        table: "DimDeviceType",
        field: "device_type_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FactAdMetricsDaily");
  },
};