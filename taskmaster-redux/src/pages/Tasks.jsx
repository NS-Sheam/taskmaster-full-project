import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { useTasks } from '../redux/features/tasks/taks';
import TaskCard from '../components/tasks/TaskCard';
import ArchivedTasks from '../components/tasks/ArchivedTasks';

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { tasks, refetch } = useTasks(searchTerm);


  const pendingTask = tasks?.filter(item => item.status === "pending");
  const runningTask = tasks?.filter(item => item.status === "running");
  const doneTask = tasks?.filter(item => item.status === "done");
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    refetch();
  };

  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Task Master</h1>
          </div>
          <div className="flex gap-5">
            <div className="search-field flex justify-center items-center gap-3">
              <div className="search-field flex justify-center items-center gap-3">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="rounded-md border-2 border-secondary/20 px-5 py-2 w-80 focus:outline-none focus:border-primary transition-all text-slate-900"
                  placeholder="Search"
                />
                <div className="flex items-center gap-3 -ml-12">
                  <MagnifyingGlassIcon className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </div>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-white hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">Add Task</button>
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="fixed inset-0 flex items-center justify-center -z-10">
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1 className='text-slate-900'>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTask?.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingTask?.map(item => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1 className='text-slate-900'>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {runningTask?.length}
              </p>
            </div>
            <div className="space-y-3">
              {runningTask?.map(item => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1 className='text-slate-900'>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTask?.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneTask?.map(item => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <ArchivedTasks />
      </div>
    </div>
  );
};

export default Tasks;
