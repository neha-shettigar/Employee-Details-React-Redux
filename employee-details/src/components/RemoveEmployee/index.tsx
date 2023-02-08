
// interface for RemoveEmplopyee
interface EmployeeInterface {
  id: number;
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// takes only id 
const RemoveEmplopyee = ({
  id,
  onChangeId,
  onClickButton,
}: EmployeeInterface) => {
  return (
    <main className='container'>
      <label className='container__label'>Add Employee</label>
      <form className='container__form'>
        <input
          type='text'
          className='container__input'
          value={id}
          onChange={onChangeId}
          placeholder='ID'
        />
        {/* for submitting the inputs */}
        <button
          className='container__button'
          type='submit'
          onClick={onClickButton}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default RemoveEmplopyee;
