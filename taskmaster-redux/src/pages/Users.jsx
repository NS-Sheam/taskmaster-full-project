import { useForm } from "react-hook-form";
import { addUser } from "../redux/features/user/users";
import { useNavigate } from "react-router-dom";


const Users = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const addUserToDb = await addUser(data);

        if (addUserToDb?.id) {
            navigate('/');
        }

    };


    return (
        <div className="hero min-h-screen bg-secondary">
            <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row-reverse  w-full lg:w-3/4">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Add user!</h1>
                    <p className="py-6 text-white">Add a user. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, voluptas consectetur dolorum adipisci reiciendis doloremque sapiente molestiae rem a!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" {...register('name', { required: 'Name is required' })} className={`input input-bordered ${errors.name ? 'input-error' : ''}`} />
                            {errors.name && <span className="text-error">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register('email', { required: 'Email is required' })} className={`input input-bordered ${errors.email ? 'input-error' : ''}`} />
                            {errors.email && <span className="text-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register('password', { required: 'Password is required' })} className={`input input-bordered ${errors.password ? 'input-error' : ''}`} />
                            {errors.password && <span className="text-error">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Users;