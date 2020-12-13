import React from 'react';
import './scroll.styles.scss'


const Scroll=(props)=>{
	return(
		  <div style={{ overflowY: 'auto', overflowX:'hidden', height: '500px',width:'97%'}}>
     		 {props.children}
    	  </div>
		);
}

export default Scroll;