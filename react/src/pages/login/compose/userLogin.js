import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserLogin() {
    return(
        <Form className='bg-light border m-5 p-3 rounded-1'>
            <Form.Text className='fs-2 mb-3 border-bottom'>Login</Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <div className='d-grid'>
                <Button variant="primary" type="submit">Login</Button>
            </div>
        </Form>
    )
}

export default UserLogin