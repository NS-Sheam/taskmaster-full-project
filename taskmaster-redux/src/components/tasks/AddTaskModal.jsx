import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { addTask, useTasks } from "../../redux/features/tasks/taks";
import { useUsers } from "../../redux/features/user/users";
import { Datepicker } from "@datepicker-react/styled";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm()
    const { refetch } = useTasks("");
    const { users } = useUsers();

    const onSubmit = async (data) => {

        const newData = { ...data, status: "pending" };
        await addTask(newData);
        refetch();
        onCancel();
    }



    const onCancel = () => {
        reset();
        setIsOpen(false);
    };
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"} >
            <form onSubmit={handleSubmit(onSubmit)} className="z-20 text-slate-900">
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Title
                    </label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        id="title"
                        name="title"
                        {...register("title")}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Description
                    </label>
                    <textarea
                        className="w-full rounded-md"
                        type="text"
                        id="description"
                        name="description"
                        {...register("description")}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Deadline
                    </label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="date"
                        name="deadline"
                        {...register("deadline")}
                    />
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Assign to
                    </label>
                    <select
                        className="w-full rounded-md"
                        id="assign_to"
                        name="assign_to"
                        {...register("assign_to")}
                    >
                        {
                            users?.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Priority
                    </label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        name="priority"
                        {...register("priority")}
                    >
                        <option defaultValue value="high">
                            High
                        </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => onCancel()}
                        type="button"
                        className="btn btn-danger "
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary ">
                        submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;