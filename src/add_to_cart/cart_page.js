import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Cartdata() {
    const mystate = useSelector((state) => state.cardData)
    // console.log("carddata in /card =>", mystate);
    return (
        <div className="App">
            <br />
            <br />
            <h1 style={{ color: '#31473A' }}>Your Cart List</h1>
            <div style={{ height: 200 }}>
                <dotlottie-player
                    src="https://lottie.host/ae74e78a-3bd5-4fa6-ba7f-405312d37a6d/MiZxGCf5s0.json"
                    background="transparent"
                    speed="1"

                    loop autoplay>

                </dotlottie-player>
            </div>
            <br />
            <br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mystate.cardData.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.author}</td>
                                <td>{data.price}</td>
                                <td>{data.price == 0 ? (
                                    <Button variant="success">
                                        <a href={data.download} target="_blank" rel="noreferrer">Download</a>
                                    </Button>
                                ) : (
                                    <Button variant="warning">
                                        <Link to="/payment" style={{color:'black'}}>
                                            Buy
                                        </Link>
                                    </Button>
                                )}
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
        </div>
    )

}