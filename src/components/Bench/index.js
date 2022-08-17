import { React } from "react";
import { Row, Col } from "react-bootstrap";
import MonsterCard from "../MonsterCard";

const Bench = ({ Pokemon }) => {

    return (
        <Row>
            {
                Pokemon.map((P, i) => {
                    return (
                        <MonsterCard
                            key={`Bench ${i}`}
                            pokemon={P}
                            height={'300px'}
                        />
                    )
                })
            }
        </Row>
    );
};

export default Bench;