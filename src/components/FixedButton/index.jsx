import React , { Component , PropTypes } from 'react';

import './index.less';

const FixedButton = (props) => {
	return (
		<div>
			<div className="fixed_buttons">
				{	
					props.options.map((item,i)=>{
						let cn = 'fixed_buttons_items';
						if(item.light){
							cn += ' light';
						}
						if(item.disabled){
							cn += ' disabled';
						}
						return (
							<a href="javascript:" 
								key={ i }
								disabled={ item.disabled }
								onClick={ item.disabled ? ()=>{} : item.onClick }
								className={ cn } 
								style={{width: 100 / props.options.length + '%' }}
							>
								{ item.name }
							</a>
						)
					})
				}
			</div>
			<div className="fixed_buttons_brank"></div>
		</div>
	);
};

FixedButton.PropTypes = {
	options: PropTypes.array.isRequired
}

export default FixedButton;