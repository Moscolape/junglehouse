function Recommendation () {

    const month = new Date().getMonth();
    const isSpring = month >= 2 && month <= 5;

    // isSpring ? (
    //     <div>It's time to repot 🥦</div>
    // ): (
    //     <div>It's not time to repot</div>
    // )

    if (isSpring) {
        return <div>It's time to repot 🥦</div>
    } else {
        return <div>It's not time to repot</div>
    }
}

export default Recommendation;