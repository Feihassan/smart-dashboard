import { useState } from 'react';
import { FiPlus, FiRefreshCw, FiDownload, FiShare2 } from 'react-icons/fi';

type Action = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export const QuickActions = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const actions: Action[] = [
    {
      id: 'add',
      label: 'Add New',
      icon: <FiPlus className="w-4 h-4" />,
      onClick: () => console.log('Add new item'),
    },
    {
      id: 'refresh',
      label: 'Refresh',
      icon: <FiRefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />,
      onClick: handleRefresh,
    },
    {
      id: 'export',
      label: 'Export',
      icon: <FiDownload className="w-4 h-4" />,
      onClick: () => console.log('Export data'),
    },
    {
      id: 'share',
      label: 'Share',
      icon: <FiShare2 className="w-4 h-4" />,
      onClick: () => console.log('Share dashboard'),
    },
  ];

  return (
    <div className="flex space-x-2">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={action.onClick}
          className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          disabled={isRefreshing && action.id === 'refresh'}
        >
          {action.icon}
          <span className="hidden sm:inline">{action.label}</span>
        </button>
      ))}
    </div>
  );
};
