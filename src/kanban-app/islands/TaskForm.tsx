import {useState} from "preact/hooks";

const useForm = () => {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const onChange = (event) => {
        const auxValues = { ...values };
        auxValues[event.target.name] = event.target.value;
        setValues(auxValues);
    };

    const onSubmit = (callback) => (event) => {
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
    };
    return [{ values, loading }, onChange, onSubmit];
};

export default function TaskForm() {
    const [{ values, loading }, onChange, onSubmit] = useForm();
    const { name, description } = values;
    const saveTask = async () => {
        if (name && description) {
            console.log(values);
            const headers = new Headers({
                "content-type": "application/json"
            });
            const res = await fetch("http://localhost:8080/tasks", {
                method: "POST",
                headers,
                body: JSON.stringify({name, description}),
            });

        }
    };

    return (
        <form class="task-form" onSubmit={onSubmit(saveTask)}>
            <input type="text" placeholder="Name" name="name" onInput={onChange} />
            <input type="text" placeholder="Description" name="description" onInput={onChange} />
            <button type="submit" disabled={!(name && description)}>{loading ? 'saving...' : 'Save'}</button>
        </form>
    );
}