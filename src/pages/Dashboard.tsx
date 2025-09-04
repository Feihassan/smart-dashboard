import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverviewCards } from '../components/widgets/OverviewCards';
import { FinanceChart } from '../components/charts/FinanceChart';
import { HealthTracker } from '../components/widgets/HealthTracker';
import { LearningAnalytics } from '../components/charts/LearningAnalytics';
import { RecentActivity } from '../components/widgets/RecentActivity';
import { QuickActions } from '../components/widgets/QuickActions';
import { PerformanceMetrics } from '../components/charts/PerformanceMetrics';
import { useTheme } from '../contexts/ThemeContext';
import { FiX } from 'react-icons/fi';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cardDetails, setCardDetails] = useState<{title: string; value: string} | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 p-4 md:p-6"
    >
      <motion.div variants={item} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here's what's happening with your data.</p>
        </div>
        <QuickActions />
      </motion.div>

      <motion.div variants={item}>
        <OverviewCards onCardClick={(cardId) => {
          setSelectedCard(prev => prev === cardId ? null : cardId);
          // In a real app, you would fetch data based on cardId
          const cards = [
            { title: 'Total Revenue', value: 'Detailed revenue analytics and trends' },
            { title: 'Active Users', value: 'User engagement and activity metrics' },
            { title: 'Tasks Completed', value: 'Task completion statistics and insights' },
            { title: 'Avg. Session', value: 'Session duration and user behavior' },
          ];
          setCardDetails(cards[cardId - 1]);
        }} />
      </motion.div>

      <AnimatePresence>
        {selectedCard !== null && cardDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 relative"
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Close details"
            >
              <FiX className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {cardDetails.title} Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {cardDetails.value}
            </p>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                This is a detailed view of your {cardDetails.title.toLowerCase()}. In a real application, this would show more detailed analytics and metrics specific to this card.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={item} className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <motion.div variants={item} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Overview</h2>
            <FinanceChart />
          </motion.div>
          
          <motion.div variants={item} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h2>
            <PerformanceMetrics />
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div variants={item}>
            <HealthTracker />
          </motion.div>
          <motion.div variants={item}>
            <RecentActivity />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Analytics</h2>
          <LearningAnalytics />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <RecentActivity />
        </div>
      </motion.div>
    </motion.div>
  );
};
