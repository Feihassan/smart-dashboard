import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { Card } from '../common/Card';
import { FiBookOpen } from 'react-icons/fi';
import { learningData } from '../../data/mockData';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {payload[0].value} hours
        </p>
      </div>
    );
  }
  return null;
};

export const LearningAnalytics = () => {
  return (
    <Card 
      title="Learning Analytics" 
      icon={<FiBookOpen className="text-purple-500" />}
      className="h-full"
    >
      <div className="h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={learningData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="subject" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip content={<CustomTooltip />} contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }} />
            <Bar 
              dataKey="hours" 
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
