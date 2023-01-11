import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Facebook } from "react-bootstrap-icons";
import { Line } from "react-bootstrap-icons";
import { Twitter } from 'react-bootstrap-icons';

const Footer = () => { 
    return (
        <Container fluid className='bg-dark text-white'>
            <Row className='py-3' >
                <Col md={2}></Col>
                <Col md={8} className='text-center h4'>
                    <Stack gap={3} className="mx-auto">
                        <div>Tel/0X-XXXXXXXX</div>
                        <div>Add/XX市XX區XX路XX號</div>
                        <div>Mail/xxx@xxxxx.com.tw</div>
                        <div>Time/周一到周六/08:00-20:00</div>
                        <div className='text-secondary'>@clothes 2023-2099</div>
                        <Stack direction="horizontal" gap={2} className='mx-auto'>
                            <Facebook />
                            <Line />
                            <Twitter />
                        </Stack>
                    </Stack>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default Footer