import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Chart from './Chart';
import axios from "axios";
import Loader from '../Loader';

const Dashboard = () => {
  const [analysisType, setAnalysisType] = useState("region");
  const [durationInDays, setDurationInDays] = useState<number>(7);
  const [data, setData] = useState([]);
  const [processedData, setProcessedData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData(durationInDays);
  }, []);

  const fetchData = async (days:number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/charts?days=${days}`);
      if (response.status == 200) {
        setData(response.data?.data);
        await processData(response.data?.data,"region");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const processData = async(data:any,type:string) => {
    switch (type) {
      case "region":
        // Scenario 1: Region Heatmap (Group by region and calculate CPM)
        const regionData = data.reduce((acc:any, item:any) => {
          const regionName = item?.region?.region_name;
          if (!acc[regionName]) {
            acc[regionName] = {
              total_impressions: 0,
              total_cost: 0,
              CPM: 0,
            };
          }
          acc[regionName].total_impressions += item.impressions;
          acc[regionName].total_cost += item.cost;
          acc[regionName].CPM = ((acc[regionName].total_cost / acc[regionName].total_impressions) * 1000).toFixed(2);
          return acc;
        }, {});
        setProcessedData(Object.keys(regionData).map((region) => ({
          region_name: region,
          ...regionData[region],
        })));
        break;
      case "age_gender":
        // Scenario 2: Age and Gender Analysis (Group by age and gender)
        const ageGenderData = data?.reduce((acc:any, item:any) => {
          const ageRange = item.ageGroup?.age_range;
          const genderName = item.gender?.gender_name;
          const key = `${ageRange}`;
          if (!acc[key]) {
            acc[key] = {
              ageRange: ageRange,
              gender: genderName,
              Likes: 0,
            };
          }
          acc[key].Likes += item?.custom_metrics?.likes;
          return acc;
        }, {});

        setProcessedData(Object.values(ageGenderData));
        break;
      case "account":
        // Scenario 3: Account Level Analysis (Group by platform and calculate CPC)
        const accountData = data.reduce((acc:any, item:any) => {
          const platformName = item.platform.platform_name;
          if (!acc[platformName]) {
            acc[platformName] = {
              total_cost: 0,
              total_conversions: 0,
              CPC: 0,
            };
          }
          acc[platformName].total_cost += item.cost;
          acc[platformName].total_conversions += item.conversions;
          acc[platformName].CPC = (acc[platformName].total_cost / acc[platformName].total_conversions).toFixed(2);
          return acc;
        }, {});

        setProcessedData(Object.keys(accountData).map((platform) => ({
          platform: platform,
          ...accountData[platform],
        })));
        break;
      default:
        // Default: Show raw data
        setProcessedData(data);
        break;
    }
  };
  console.log(data, '-------')
  console.log(processedData, '-------')
  return (
    <>
      {isLoading && processedData ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Box>
          <Flex width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={"1em"}>
            <Flex width={"100%"} alignItems={"center"} gap={3}>
              <Heading size="md">Analysis Type</Heading>
              <Select maxWidth={"20em"} value={analysisType} onChange={(e:any) => {setAnalysisType(e.target.value),processData(data,e.target.value)}}>
                <option value="region">Region</option>
                <option value="age_gender">Age-gender</option>
                <option value="account">Account</option>
              </Select>
            </Flex>
            <Select maxWidth={"20em"} value={durationInDays} onChange={(e: any) => {setDurationInDays(e.target.value),fetchData(e.target.value)}}>
              <option value={7}>7 days</option>
              <option value={14}>14 days</option>
            </Select>
          </Flex>
          <Chart
            type={analysisType}
            duration={durationInDays}
            data={processedData}
          />
        </Box>
      )}
    </>
  )
}

export default Dashboard;