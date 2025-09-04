import { FiDollarSign, FiActivity, FiBookOpen, FiTrendingUp, FiUsers, FiCalendar, FiTarget, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface StatCardProps {
  stat: {
    id: number;
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
    icon: ReactNode;
    color: string;
    bgColor: string;
    borderColor: string;
    description: string;
    chartData: number[];
  };
  isActive?: boolean;
  onClick?: () => void;
}

interface StatData {
  id: number;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  chartData: number[];
}

const stats: StatData[] = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$12,845',
    change: '+12.5%',
    changeType: 'increase',
    icon: <FiDollarSign className="h-5 w-5" />,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    borderColor: 'border-green-100 dark:border-green-800',
    description: 'Last 30 days',
    chartData: [30, 40, 35, 50, 49, 60, 70]
  },
  {
    id: 2,
    title: 'Active Users',
    value: '2,431',
    change: '+8.2%',
    changeType: 'increase',
    icon: <FiUsers className="h-5 w-5" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    borderColor: 'border-blue-100 dark:border-blue-800',
    description: 'Active this month',
    chartData: [20, 30, 25, 35, 40, 45, 50]
  },
  {
    id: 3,
    title: 'Tasks Completed',
    value: '1,248',
    change: '+5.1%',
    changeType: 'increase',
    icon: <FiTarget className="h-5 w-5" />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    borderColor: 'border-purple-100 dark:border-purple-800',
    description: 'This week',
    chartData: [10, 15, 25, 30, 35, 40, 45]
  },
  {
    id: 4,
    title: 'Avg. Session',
    value: '4.8m',
    change: '-1.2%',
    changeType: 'decrease',
    icon: <FiAward className="h-5 w-5" />,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
    borderColor: 'border-yellow-100 dark:border-yellow-800',
    description: 'Average duration',
    chartData: [25, 30, 35, 40, 45, 40, 35]
  }
];

const StatCard: React.FC<StatCardProps> = ({ stat, isActive = false, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 border ${stat.borderColor} shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer ${
        isActive ? 'ring-2 ring-offset-2 ring-blue-500' : ''
      }`}
      style={{
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
      }}
      initial={false}
      animate={{
        scale: isActive ? 1.02 : 1,
        borderWidth: isActive ? '2px' : '1px',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <span className={`text-sm font-medium ${
              stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">{stat.description}</p>
        </div>
        <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
          {stat.icon}
        </div>
      </div>
      
      {/* Mini chart */}
      <div className="mt-4 h-12 w-full flex items-end">
        {stat.chartData.map((value, index) => (
          <div 
            key={index}
            className="flex-1 flex items-end mx-0.5"
            style={{ height: '100%' }}
          >
            <div 
              className={`w-full rounded-t-sm ${
                stat.changeType === 'increase' 
                  ? 'bg-gradient-to-t from-green-400 to-green-200 dark:from-green-500 dark:to-green-300/50'
                  : 'bg-gradient-to-t from-red-400 to-red-200 dark:from-red-500 dark:to-red-300/50'
              }`}
              style={{ 
                height: `${(value / 70) * 100}%`,
                opacity: 0.7 - (index * 0.1) > 0.2 ? 0.7 - (index * 0.1) : 0.2
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const OverviewCards: React.FC<{ onCardClick?: (cardId: number) => void }> = ({ onCardClick }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    setActiveCard(cardId === activeCard ? null : cardId);
    if (onCardClick) {
      onCardClick(cardId);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard 
          key={stat.id} 
          stat={stat} 
          isActive={activeCard === stat.id}
          onClick={() => handleCardClick(stat.id)}
        />
      ))}
    </div>
  );
};
