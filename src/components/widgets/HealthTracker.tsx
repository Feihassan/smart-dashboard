import { Card } from '../common/Card';
import { FiActivity, FiDroplet } from 'react-icons/fi';
import { healthData } from '../../data/mockData';

const ProgressBar = ({ value, max, color, label, unit = '' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
        <span className="font-medium">
          {value.toLocaleString()}{unit} <span className="text-gray-500">/ {max.toLocaleString()}{unit}</span>
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export const HealthTracker = () => {
  return (
    <Card 
      title="Health Tracker" 
      icon={<FiActivity className="text-blue-500" />}
      className="h-full"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Daily Steps</h3>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {healthData.steps.current.toLocaleString()}
              <span className="text-sm font-normal text-gray-500 ml-1">steps</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Goal: {healthData.steps.goal.toLocaleString()}</div>
              <div className="text-sm text-green-500 font-medium">
                {Math.round((healthData.steps.current / healthData.steps.goal) * 100)}% of goal
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar 
              value={healthData.steps.current} 
              max={healthData.steps.goal} 
              color="bg-blue-500"
              label="Steps"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Calories</h3>
          <ProgressBar 
            value={healthData.calories.current} 
            max={healthData.calories.goal} 
            color="bg-green-500"
            label="Calories Burned"
            unit=" kcal"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Water Intake</h3>
          <div className="flex items-center space-x-4">
            <div className="text-3xl text-blue-500">
              <FiDroplet />
            </div>
            <div className="flex-1">
              <ProgressBar 
                value={healthData.water.current} 
                max={healthData.water.goal} 
                color="bg-blue-500"
                label="Water"
                unit=" glasses"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
