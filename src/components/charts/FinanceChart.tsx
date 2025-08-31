import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../common/Card';
import { FiDollarSign } from 'react-icons/fi';
import { financeData } from '../../data/mockData';

export const FinanceChart = () => {
  return (
    <Card title="Finance Overview" icon={<FiDollarSign className="text-green-500" />}>
      <div className="h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={financeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#6B7280' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', { month: 'short' });
              }}
            />
            <YAxis 
              tick={{ fill: '#6B7280' }}
              axisLine={false} 
              tickLine={false} 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              labelFormatter={(label) => {
                const date = new Date(label);
                return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
              }}
              formatter={(value, name) => {
                const formattedValue = `$${value?.toLocaleString()}`;
                return [formattedValue, name === 'income' ? 'Income' : 'Expenses'];
              }}
            />
            <Legend 
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {value === 'income' ? 'Income' : 'Expenses'}
                </span>
              )}
            />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#10B981" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#3B82F6" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
