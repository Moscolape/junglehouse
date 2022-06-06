function Cart() {

    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    const numbers = [1,2,3,4]

    return (
        <div>
            <h2 style = {{ color: 'red', paddingLeft: '10px' }}>Cart</h2>
            <ul>
                <li>Montsera: {monsteraPrice}€</li>
                <li>Ivy: {ivyPrice}€</li>
                <li>Flowers: {flowerPrice}€</li>
            </ul>
            <p style = {{ color: 'red', paddingLeft: '10px' }}>Total: {monsteraPrice + ivyPrice + flowerPrice }€.</p>
            <ul>
                {numbers.map((x) => (
                    <li>${x*2}</li>
                    ))
                }
            </ul>
        </div>
        )
    }

export default Cart;