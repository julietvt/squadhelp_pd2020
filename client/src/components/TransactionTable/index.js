import React from "react";
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants.js';

const TransactionTable = props => {
    const {data, className} = props;
    return(
        <table className={className}>
            <TableHead/>
            <tbody>
            {
                data.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>
                            {
                                transaction.type === CONSTANTS.INCOME && 'Income'
                            }
                            {
                                transaction.type === CONSTANTS.EXPENSE && 'Expense'
                            }
                        </td>
                        <td>
                            {
                                `${transaction.sum}`
                            }
                        </td>

                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

TransactionTable.defaultProps = [{}];

TransactionTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isIncome: PropTypes.bool,
        sum: PropTypes.number,
    }))
};

export default TransactionTable;


const TableHead = () => (
    <thead>
    <tr>
        <th>Id</th>
        <th>Income/Expense</th>
        <th>Sum</th>
    </tr>
    </thead>
);