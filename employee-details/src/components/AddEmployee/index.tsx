interface EmployeeInterface {
  id: number;
  name: string;
  role: string;
  salary: number;
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton:(e: React.MouseEvent<HTMLButtonElement>) => void;
}

// interface for employee detail input
const AddEmplopyee = ({
  id,
  name,
  role,
  salary,
  onChangeId,
  onChangeName,
  onChangeRole,
  onChangeSalary,
  onClickButton
}: EmployeeInterface) => {
  return (
    // main container
    <main className='container'>
      <label className='container__label'>Add Employee</label>
      <form className='container__form'>

        {/* input field for id */}
        <input
          type='text'
          className='container__input'
          value={id}
          onChange={onChangeId}
          placeholder='ID'
        />

        {/* input field for name */}
        <input
          type='text'
          className='container__input'
          value={name}
          onChange={onChangeName}
          placeholder='Name'
        />

        {/* input field for role */}
        <input
          type='text'
          className='container__input'
          value={role}
          placeholder='Role'
          onChange={onChangeRole}
        />

        {/* input field for salary */}
        <input
          type='text'
          className='container__input'
          value={salary}
          placeholder='Salary'
          onChange={onChangeSalary}
        />

        {/* for submitting the inputs */}
        <button className="container__button" type="submit" onClick={onClickButton}>Submit</button>
      </form>
    </main>
  );
};

export default AddEmplopyee;
