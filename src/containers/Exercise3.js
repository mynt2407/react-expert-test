import { Col, Row } from "react-bootstrap";
import FilterInput from "../common/filter/FilterInput";
import styles from "../css/modal.module.css"
import { useEffect, useState } from "react";
import userApi from "../api/UserApi";

const Exercise3 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const data = await userApi.getAllUsers();
            setUsers(data);
        }
        getAllUsers();
    }, [])

    const handleChange = (options) => {
        console.log(options);
    }
    return (
        <div className={styles.marginModal}>
            <h2 style={{ color: "red" }}>Exercise 3</h2>
            <Row>
                <Col>
                    <FilterInput
                        placeholder="Enter your name"
                        data={users}
                        attributeName="name"
                        onChangeValue={handleChange}
                    />
                </Col>

                <Col>
                    <FilterInput
                        placeholder="Enter your street address"
                        data={users}
                        attributeName="address.street"
                        onChangeValue={handleChange}
                    />
                </Col>

                <Col>
                    <FilterInput
                        placeholder="Enter your phone number"
                        data={users}
                        attributeName="phone"
                        onChangeValue={handleChange}
                    />
                </Col>
            </Row>
        </div>
    )
}
export default Exercise3;