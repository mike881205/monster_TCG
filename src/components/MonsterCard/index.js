import { React, useEffect } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import Constants from "../../constants";
import "./style.css"

const MonsterCard = ({ pokemon, height }) => {

    const { Types, Stages, Rarities } = Constants;
    const { name, type, weakness, resistance, retreatCost, stage, HP, special, abilities, attached, image } = pokemon;
    const { color, symbol } = Types[type[0]];

    useEffect(() => {
        console.log(pokemon)
        if (special) special.execute(pokemon, {});
    }, []);

    return (

        <Card style={{ width: '25rem', backgroundColor: color, border: '5px solid gold' }} >
            <Card.Header>
                <Col>
                    <Row id="stage">
                        <Col xs={3}>
                            <strong>{Stages[stage]}</strong>
                        </Col>
                        <Col xs={9}></Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>{name}</h5>
                        </Col>
                        <Col>

                        </Col>
                        <Col>
                            <h5>{HP} HP</h5>
                        </Col>
                        <Col className="symbol" style={{ backgroundColor: color }}>
                            <h5>{symbol}</h5>
                        </Col>
                    </Row>
                </Col>
            </Card.Header>
            <Card.Img variant="top" src={image} style={{border: '5px solid gold'}} />
            <ListGroup className="list-group-flush" >
                {
                    !special ?
                        ''
                        :
                        <ListGroup.Item style={{ borderBottom: '1px solid black', background: color }} >
                            <strong>{special.name}</strong>: {special.description}
                        </ListGroup.Item>

                }
                {
                    abilities.map((ability, i) => {
                        const { name, cost, damage, description, execute } = ability;
                        return (
                            <ListGroup.Item key={`${i} - ${ability.name}`} className="ability" onClick={() => execute(pokemon, {}, ability)} style={{ borderBottom: '1px solid black', background: color }}>
                                <Row >
                                    <Col id="ability_cost" xs={2}>
                                        <Row>
                                            {
                                                cost.length < 1 ?
                                                    ''
                                                    :
                                                    cost.map((card, i) => {
                                                        return (
                                                            <Col key={`cost: ${i}-${card}`} className="symbol" style={{ backgroundColor: Types[card].color }}>
                                                                {Types[card].symbol}
                                                            </Col>
                                                        )
                                                    })
                                            }
                                        </Row>
                                    </Col>
                                    <Col id="ability_description" xs={8}>
                                        <p><strong>{name}</strong>: {description}</p>
                                    </Col>
                                    <Col id="ability_damage" xs={2}>
                                        {
                                            damage === 0 ?
                                                ''
                                                :
                                                <p>{damage}</p>
                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <Card.Footer>
                <Row>
                    <Col id="weakness">
                        <Row>
                            <Col>
                                <p>Weakness</p>
                            </Col>
                        </Row>
                        <Row>
                            {
                                weakness.length < 1 ?
                                    ''
                                    :
                                    weakness.map((card, i) => {
                                        return (
                                            <Col key={`weakness: ${i}-${card}`} className="symbol" style={{ backgroundColor: Types[card].color }}>
                                                {Types[card].symbol}
                                            </Col>
                                        )
                                    })
                            }
                        </Row>
                    </Col>
                    <Col id="resistance">
                        <Row>
                            <Col>
                                <p>Resistance</p>
                            </Col>
                        </Row>
                        <Row>
                            {
                                !resistance ?
                                    ''
                                    :
                                    resistance.map((obj, i) => {
                                        return (
                                            <Row key={`resistance: ${i}-${obj.type}`}>
                                                <Col className="symbol" style={{ backgroundColor: Types[obj.type].color }}>
                                                    {Types[obj.type].symbol}
                                                </Col>
                                                <Col>-{obj.amount}</Col>
                                            </Row>
                                        )
                                    })
                            }
                        </Row>
                    </Col>
                    <Col id="retreatCost" >
                        <Row>
                            <Col>
                                <p>Retreat Cost</p>
                            </Col>
                        </Row>
                        <Row>
                            {
                                retreatCost.length < 1 ?
                                    ''
                                    :
                                    retreatCost.map((card, i) => {
                                        return (
                                            <Col key={`retreat: ${i}-${card}`} className="symbol" style={{ backgroundColor: Types[card].color }}>
                                                {Types[card].symbol}
                                            </Col>
                                        )
                                    })
                            }
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default MonsterCard;