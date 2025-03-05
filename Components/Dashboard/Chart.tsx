import { Box, Flex, Heading } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';

const Chart = ({type,data}:any) => {

  return (
    <Box>
      <Heading size="md" mb={4} color={"#838181"}>{type == "region" ? "Region Heatmap" : type == "age" ? "Age and Gender Analysis" : "Account Level Analysis"}</Heading>
      <Flex width={"100%"} gap={4} justifyContent={"center"} alignItems={"center"}>
        <Box bg={"white"} padding={5} borderRadius={8} width="100%" overflow="auto">
          {type === "region" &&
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={900} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region_name" padding={{ left: 30, right: 30 }} />
                <YAxis domain={[0, 4000]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CPM" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Region" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>}
            {type === "age_gender" &&
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={900} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageRange" padding={{ left: 30, right: 30 }} />
                <YAxis domain={[0, 15000]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="age" stroke="#82ca9d" />
                <Line type="monotone" dataKey="gender" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>}
            {type === "account" &&
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={900} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" padding={{ left: 30, right: 30 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CPC" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="platform" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>}
        </Box>
      </Flex>
    </Box>
  )
}

export default Chart