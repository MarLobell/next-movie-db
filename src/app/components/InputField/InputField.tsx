import styles from "./InputField.module.scss";

type InputFieldProps = {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, onChange }: InputFieldProps) => {
    return <input className={styles.inputField} type="text" onChange={onChange} placeholder={label} />;
}

export default InputField;