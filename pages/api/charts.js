import db from '../../models';
import { Op } from "sequelize";

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const days = parseInt(req.query.days) || 7;

      // Calculate the start date (today - number of days)
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      const data = await db.FactAdMetricsDaily.findAll({
        where: {
          createdAt: {
            [Op.gte]: startDate,
          },
        },
        include: [
          {
            model: db.DimDate,
            as: "date",
            attributes: ["date_id", "date_value"],
          },
          {
            model: db.DimRegion,
            as: "region",
            attributes: ["region_id", "region_name"],
          },
          {
            model: db.DimAgeGroup,
            as: "ageGroup",
            attributes: ["age_id", "age_range"],
          },
          {
            model: db.DimGender,
            as: "gender",
            attributes: ["gender_id", "gender_name"],
          },
          {
            model: db.DimPlatform,
            as: "platform",
            attributes: ["platform_id", "platform_name"],
          },
          {
            model: db.DimPlacement,
            as: "placement",
            attributes: ["placement_id", "placement_name"],
          },
          {
            model: db.DimDeviceType,
            as: "deviceType",
            attributes: ["device_type_id", "device_type_name"],
          },
        ],
      });

      return res.status(200).json({status:200,data:data});

    } return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}