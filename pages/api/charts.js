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
            [Op.gte]: startDate, // Filter records created on or after the start date
          },
        },
        include: [
          { model: db.DimDate, as: "date" },
          { model: db.DimRegion, as: "region" },
          { model: db.DimAgeGroup, as: "ageGroup" },
          { model: db.DimGender, as: "gender" },
          { model: db.DimPlatform, as: "platform" },
          { model: db.DimPlacement, as: "placement" },
          { model: db.DimDeviceType, as: "deviceType" },
        ],
      });

      // Return the fetched data as a JSON response
      return res.status(200).json({status:200,data:data});

    } return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}