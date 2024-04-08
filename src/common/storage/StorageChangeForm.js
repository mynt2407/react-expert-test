import { Button, Form } from "react-bootstrap";
import useLocalStorage from "../../hook/useLocalStorage";
import { Formik } from "formik";

const StorageChangeForm = () => {

    const [name, setName] = useLocalStorage("name", "")
    const initForm = {
        name: name || "",
    };

    const handleSubmitForm = async (values) => {
        setName(values.name);
    }

    return (
        <Formik
            initialValues={initForm}
            onSubmit={handleSubmitForm}
        >
            {({
                handleSubmit,
                handleChange,
                values,
            }) => (
                <>
                    <Form onSubmit={handleSubmit}>
                        {/* Name */}
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Name</Form.Label>
                            <Form.Control
                                size="md"
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={values.name}
                                onChange={handleChange} />
                        </Form.Group>

                        {/* Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="md"
                        >
                            Save
                        </Button>
                    </Form>
                </>
            )}
        </Formik>)
}
export default StorageChangeForm;