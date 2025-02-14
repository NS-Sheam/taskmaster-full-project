import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteTask, updateTaskStatus, useTasks } from '../../redux/features/tasks/taks';


const TaskCard = ({ task }) => {
  const { refetch } = useTasks("");
  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  }
  else if (task.status === "running") {
    updatedStatus = "done";
  }
  else {
    updatedStatus = "archive";
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
          } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-500' : ''
          }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign_to}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button title="Delete" onClick={() => {
            deleteTask(task?.id);
            refetch()
          }}>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            title="Change status"
            onClick={() => {
              updateTaskStatus({ id: task.id, status: updatedStatus });
              refetch()
            }}
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
