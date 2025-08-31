import { FiDollarSign, FiActivity, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    title: 'Total Income',
    value: '$4,200',
    change: '+12.5%',
    icon: <FiDollarSign className="h-6 w-6 text-green-500" />,
    trend: 'up',
  },
  {
    title: 'Calories Burned',
    value: '1,850',
    change: '+8.2%',
    icon: <FiActivity className="h-6 w-6 text-blue-500" />,
    trend: 'up',
  },
  {
    title: 'Hours Studied',
    value: '42',
    change: '+5.1%',
    icon: <FiBookOpen className="h-6 w-6 text-purple-500" />,
    trend: 'up',
  },
  {
    title: 'Productivity',
    value: '78%',
    change: '+3.2%',
    icon: <FiTrendingUp className="h-6 w-6 text-yellow-500" />,
    trend: 'up',
  },
];

export const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {stat.value}
              </p>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
