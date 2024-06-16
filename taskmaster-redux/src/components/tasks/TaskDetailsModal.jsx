

import { useTasks } from "../../redux/features/tasks/taks";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
    const { tasks } = useTasks("");

    const singleTask = tasks?.find(item => item.id === id)


    return <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary">{singleTask?.title}</h3>
            <p className="text-black">{singleTask?.description}</p>
            <p className="font-bold text-black">Assigned To: {singleTask?.assign_to}</p>
            <p className="text-black">Deadline: {singleTask?.deadline}</p>
            <p className={singleTask?.priority === "high" ? "font-bold text-red-600" : singleTask?.priority === "medium" ? "font-bold text-yellow-600" : "font-bold text-green-700"}>Priority: {singleTask?.priority}</p>
        </div>
    </Modal>
};

export default TaskDetailsModal;