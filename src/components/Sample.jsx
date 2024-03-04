import * as React from 'react';

export default function Sample(props){
    const isRobo = props.isRobo;

    return (
        <h2>
            Hello {isRobo ? 'R2D2': props.name}
        </h2>
    );
}



/*import * as React from 'react';
export default function Sample(){
   
    return(
        <><img src="https://images.indianexpress.com/2023/12/CAT-2023-topper-Rachit-Dhanania.jpg?w=640 " width="500" height="333"></img><h4>Product-1</h4></>
    );

}*/