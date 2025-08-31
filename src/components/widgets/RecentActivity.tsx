import { Card } from '../common/Card';
import { FiDollarSign, FiActivity, FiBook, FiShoppingBag } from 'react-icons/fi';
import { recentActivities } from '../../data/mockData';

const ActivityIcon = ({ type }) => {
  switch (type) {
    case 'payment':
      return <FiDollarSign className="h-5 w-5 text-green-500" />;
    case 'expense':
      return <FiShoppingBag className="h-5 w-5 text-red-500" />;
    case 'exercise':
      return <FiActivity className="h-5 w-5 text-blue-500" />;
    case 'study':
      return <FiBook className="h-5 w-5 text-purple-500" />;
    default:
      return <div className="h-5 w-5 rounded-full bg-gray-200" />;
  }
};

const ActivityItem = ({ activity }) => {
  return (
    <div className="flex items-start py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <div className="flex-shrink-0 mt-0.5">
        <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <ActivityIcon type={activity.type} />
        </div>
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {activity.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(activity.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </p>
          {activity.amount && (
            <span className={`text-xs font-medium ${
              activity.type === 'payment' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {activity.type === 'payment' ? '+' : '-'}${activity.amount}
            </span>
          )}
          {activity.duration && (
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              {activity.duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const RecentActivity = () => {
  return (
    <Card title="Recent Activity" className="h-full">
      <div className="mt-4 space-y-2">
        {recentActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
      <div className="mt-4">
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
          View all activity →
        </button>
      </div>
    </Card>
  );
};
