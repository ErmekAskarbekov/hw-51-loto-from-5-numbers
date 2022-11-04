import React from 'react';
import './newNumbers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NewNumbersProps {
    children: number;
    children2: number;
    children3: number;
    children4: number;
    children5: number;
    children6: number;
}

const NewNumbers: React.FC<NewNumbersProps> = props => {
    return (
        <div>
            <div className="card-body d-flex justify-content-evenly p-3">
                <span>{props.children}</span>
                <span>{props.children2}</span>
                <span>{props.children3}</span>
                <span>{props.children4}</span>
                <span>{props.children5}</span>
                <span>{props.children6}</span>
            </div>
        </div>
    );
};

export default NewNumbers;