import { Card } from '../components/common/Card';
import { FiPieChart } from 'react-icons/fi';

export const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <div className="flex space-x-3">
          <select className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Export
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Financial Overview" icon={<FiPieChart className="text-green-500" />}>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Financial reports chart will be displayed here
          </div>
        </Card>
        
        <Card title="Health Analytics" icon={<FiPieChart className="text-blue-500" />}>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Health reports chart will be displayed here
          </div>
        </Card>
        
        <Card title="Learning Progress" icon={<FiPieChart className="text-purple-500" />}>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Learning reports chart will be displayed here
          </div>
        </Card>
      </div>
    </div>
  );
};
