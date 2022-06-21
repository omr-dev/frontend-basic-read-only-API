export const Employee = ({ item }) => {
  return (
    <div className="employeeBox">
      <p>
        {item.EMPLOYEE_ID}-{item.FIRST_NAME} {item.LAST_NAME}
      </p>
    </div>
  );
};
