interface EmployeeInterface {
  id: number;
  name: string;
  role: string;
  salary: number;
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UpdateEmplopyee = ({
  id,
  name,
  role,
  salary,
  onChangeId,
  onChangeName,
  onChangeRole,
  onChangeSalary,
  onClickButton,
}: EmployeeInterface) => {
  return (
    <main className='container'>
      <label className='container__label'>Update Employee</label>
      <form className='container__form'>
        <input
          type='text'
          className='container__input'
          value={id}
          onChange={onChangeId}
          placeholder='ID'
        />

        <input
          type='text'
          className='container__input'
          value={name}
          onChange={onChangeName}
          placeholder='Name'
        />

        <input
          type='text'
          className='container__input'
          value={role}
          placeholder='Role'
          onChange={onChangeRole}
        />

        <input
          type='text'
          className='container__input'
          value={salary}
          placeholder='Salary'
          onChange={onChangeSalary}
        />
      </form>
    </main>
  );
};

export default UpdateEmplopyee;
