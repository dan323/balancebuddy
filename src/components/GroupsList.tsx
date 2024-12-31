import React from "react";

const GroupsList = ({ userName, groups }) => {
  return (
    <div>
      <h1>{userName}'s Groups</h1>
      {groups.length === 0 ? (
        <p>No groups found for {userName}.</p>
      ) : (
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <h2>{group.name}</h2>
              <p>
                <strong>Members:</strong> {group.members.join(", ")}
              </p>
              <p>
                <strong>Total Expenses:</strong> €
                {group.expenses.reduce((total, expense) => total + expense.amount, 0)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupsList;
