const Input = ({ name, type, value, onChange }) => {
    return (
        <>
            <label>{name}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default Input;
