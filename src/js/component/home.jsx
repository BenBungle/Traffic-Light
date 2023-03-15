import React, { useState}  from "react";

const Home = () => {
	const [selectedLight, setSelectedLight] = useState(null);

	const handleLightClick = (light) => {
	  setSelectedLight(light);
	};

	return (
		<div >
			<div id="trafficTop"></div>
			<div id="container">
				<div className={`redLight ${selectedLight === "red"? "selected":""}`}
				onClick={()=> handleLightClick("red")}>
				</div>
				<div className={`yellowLight ${selectedLight === "yellow"? "selected":""}`}
				onClick={()=> handleLightClick("yellow")}>
				</div>
				<div className={`greenLight ${selectedLight ==="green"? "selected":""}`}
					onClick={()=> handleLightClick("green")}>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
//$ template literal {funcion === "algo"? es esto real pasa el "algo" defino el "algo" y los dos : es el else o sino pasa "" que es nada, como estamos usando onclick la nada es false statement de "algo" es decir el mouse no esta en encima del click}