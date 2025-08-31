import { OverviewCards } from '../components/widgets/OverviewCards';
import { FinanceChart } from '../components/charts/FinanceChart';
import { HealthTracker } from '../components/widgets/HealthTracker';
import { LearningAnalytics } from '../components/charts/LearningAnalytics';
import { RecentActivity } from '../components/widgets/RecentActivity';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <OverviewCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinanceChart />
        <HealthTracker />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearningAnalytics />
        <RecentActivity />
      </div>
    </div>
  );
};
