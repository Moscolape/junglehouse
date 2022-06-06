import { plantList } from "./Plantlist";
import '../styles/ShoppingList.css';
// import PlantItem from "./PlantItem";

function handleClick() {
	console.log(plantList[0].name)
};


function ShoppingList() {
	// const categories = plantList.reduce(
	// 	(acc, plant) =>
	// 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 	[]
	// )

	// console.log(categories);

	return (
		<div>
			{/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}

			<ul className = 'jh-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className= 'jh-plant-item' onClick = {handleClick}>
                        {plant.name}
                        {/* {plant.isBestSale ? <span>🔥</span> : <span>👎</span>} */}
						{/* {plant.isBestSale ? <span>🔥</span> : null } */}
						{plant.isSpecialOffer && <span>🔥</span> }
						{/* {plant.isBestSale && plant.category === 'exterior' && <span>🔥</span>} */}
						{plant.isSpecialOffer && <div className='jh-sales'>Sale</div>}
						{/* {plant.isBestSale || plant.category === "classic" ? <span>🔥</span>: null} */}
                    </li>
				))}
			</ul>

{/* 
				<ul className='jh-plant-list'>
					{plantList.map(({ id, cover, name, water, light }) => (
						<PlantItem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
						/>
					))}
				</ul> */}
		</div>
	)
}


export default ShoppingList;