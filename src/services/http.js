import { browserHistory } from 'react-router';

export default function(url, parms, body){
    return new Promise((resolve) => {
        setTimeout(() => resolve({}), 1000);
    });
}