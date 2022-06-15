import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Button } from 'reactstrap'

function List(props) {
    return (
        <div>
            <div className='container'>
                <div className='d-flex p-5 justify-content-between'>
                    {
                        props.data.map((o, i) => {
                            return (
                                    <Card className='col-11 key={i}'
                                    >
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {o.name}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {o.expiry}
                                            </CardSubtitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                $ {o.price}
                                            </CardSubtitle>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </CardText>
                                            <Button onClick={() => props.onButton(o.id)}>
                                                Get id
                                            </Button>
                                        </CardBody>
                                    </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default List;