import React, {useState, useEffect, useContext} from 'react';
import {API, MESSAGES, USER_ROLES, LABLES} from '../constants';
import {GET} from '../middleWare';
import {UserRoleContext} from "../contexts/UserRoleContext";
import {setTableSortOrder, getTableSortOrder} from '../helper'
import './UserSearchView.scss'

const UserSearchView = () => {
    let [users, setUsers] = useState([]);
    let [searchValue, setSearch] = useState("");
    let userRole = useContext(UserRoleContext);
    let [sortingOrder, setSortingOrder] = useState();

    useEffect(() => {
        if (!isAuthorized()) {
            return;
        }
        let order = getTableSortOrder() || 0;//1 asc, -1 - desc, 0 - not sorted
        setSortingOrder(order);

        async function getUsers() {
            const response = await GET(API.GET.USERS);

            if (response && response.data) {
                let {users} = response.data;
                users = users.filter(user => {
                    return user.lastname.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1;
                });
                setUsers(sort(users, sortingOrder || order));
            } else {
                if (response && response.error) {
                    //TODO SHOW MESSAGE, ADD GLOBAL ERROR MESSAGE HANDLER
                    console.warn(response);
                    return;
                }
            }
        }

        if (searchValue.length > 2 || searchValue.length === 0) {
            getUsers();
        }
    }, [searchValue]);

    const onChange = (value) => {
        if (value.length > 2 || value.length === 0) {
            setSearch(value);
        }
    };

    const sort = (users, order) => {
        if (!order) return users;
        let sortedUsers = (users.sort((a, b) => {
            if (a.lastname < b.lastname) {
                return order === -1 ? -1 : 1;
            }
            if (a.lastname > b.lastname) {
                return order === -1 ? 1 : -1;
            }
            return 0;
        }));
        setTableSortOrder(order);
        return Array.from(sortedUsers);
    };

    const sortUsers = () => {
        let sortedUser;
        if (sortingOrder === 1) {
            setSortingOrder(-1);
            sortedUser = sort(users, -1);
        } else {
            setSortingOrder(1);
            sortedUser = sort(users, 1);
        }

        setUsers(sortedUser);
    };

    const isAuthorized = () => {
        return userRole === USER_ROLES.CRUD_ADMIN || userRole === USER_ROLES.READONLY_ADMIN;
    };

    return (
        <div className="user-search-view">
            {isAuthorized() ?
                <React.Fragment>
                    <div>
                        <span>{LABLES.SEARCH}</span>
                    </div>
                    <input type="text" onChange={(e) => onChange(e.target.value)}/>
                    {users.length ?
                        <table className="user-table">
                            <thead>
                            <tr>
                                <td>
                                    <button onClick={() => sortUsers()}>{LABLES.SORT_BUTTON}</button>
                                </td>
                                <td>Country</td>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => {
                                return <tr key={`${index}${user.lastname}`}>
                                    <td>{user.lastname}</td>
                                    {userRole === USER_ROLES.CRUD_ADMIN ?
                                        <td>
                                            <select value={user.country} onChange={() => {
                                            }}>
                                                <option value='de'>de</option>
                                                <option value='ru'>ru</option>
                                            </select>
                                        </td> :
                                        <td>{user.country}</td>
                                    }
                                </tr>
                            })}
                            </tbody>
                        </table>
                        : <div>
                            <span>{MESSAGES.INFO.NO_USER_FIND}</span>
                        </div>
                    }
                </React.Fragment> : <div>{MESSAGES.ERRORS.NOT_AUTHORIZED}</div>}
        </div>)
};

export default UserSearchView;