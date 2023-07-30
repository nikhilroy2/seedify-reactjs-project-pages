import React from 'react';


function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
        </div>
    );
}

export default Homepage;

const Section1 = () => {
    return (
        <section id="Section1">
            <div className="container-xl mx-auto">
                Lorem, ipsum dolor.
            </div>
        </section>
    )
}


